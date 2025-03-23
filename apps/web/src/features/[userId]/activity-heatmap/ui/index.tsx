import { useMemo } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@it-diots/shared/ui';

import { addDays, differenceInDays, endOfWeek, format } from 'date-fns';

const DATE_LABELS = {
  MONTH_LIST: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  DAY_LIST: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
};

const CONSTANTS = {
  DAYS_IN_WEEK: DATE_LABELS.DAY_LIST.length,
  SQUARE_SIZE: 8,
  LINE_HEIGHT: 18,
  MONTH_LABEL_GUTTER_SIZE: 6,
  WEEKDAY_LABEL_SIZE: 50,
  HEAT: 3,
};

/** @todo 색상 변수화 */
const COLOR_BY_HEAT_LIST = ['#e6e6e6', '#bebebe', '#8b8b8b', '#4d4d4d', '#000000'];
const MONTH_LABEL_SIZE = CONSTANTS.LINE_HEIGHT + CONSTANTS.MONTH_LABEL_GUTTER_SIZE;

/** 0부터 count까지의 배열 반환 */
function getRangeList(count: number): number[] {
  return Array.from({ length: count }, (_, i) => i);
}

/**
 * 활동량을 기반으로 색상 인덱스를 반환
 *
 * @returns {number} 색상 인덱스, COLOR_BY_HEAT_LIST[n]로 사용
 */
function getHeatIndex(count: number): number {
  if (count === 0) return 0;
  if (count < 4) return 1;
  if (count < 8) return 2;
  if (count < 12) return 3;
  return 4;
}

interface Activity {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  startDate: string;
  endDate: string;
  activityList: Activity[];
  gutterSize?: number;
}

/**
 * 활동 히트맵 컴포넌트
 *
 * @remarks
 * GitHub의 컨트리뷰션 그래프와 유사한 형태의 캘린더형 히트맵을 표시
 * 활동량에 따라 색상 강도가 다르게 표시되며, 각 셀에 툴팁으로 상세 정보를 제공
 *
 * @param {string} props.startDate - 표시할 기간의 시작일 (UTC)
 * @param {string} props.endDate - 표시할 기간의 종료일 (UTC)
 * @param {number} [props.gutterSize=2] - 셀 간의 간격 (픽셀)
 * @param {Activity[]} props.activityList - 활동 데이터 배열
 * @returns {JSX.Element} 히트맵 SVG 요소
 */
export function ActivityHeatmap({
  startDate,
  endDate,
  activityList,
  gutterSize = 3,
}: ActivityHeatmapProps) {
  const squareSizeWithGutter = CONSTANTS.SQUARE_SIZE + gutterSize;

  /** 시작 날짜와 끝 날짜의 빈 날짜 수 */
  const numEmptyDaysAtEnd = CONSTANTS.DAYS_IN_WEEK - 1 - new Date(endDate).getDay();
  const numEmptyDaysAtStart = new Date(startDate).getDay();

  /** 시작 날짜에 빈 날짜 추가 */
  const startDateWithEmptyDays = addDays(startDate, -numEmptyDaysAtStart);

  /** 시작 날짜부터 종료 날짜까지의 일수 (첫날 포함) */
  const dateDifferenceInDays = differenceInDays(endDate, startDate) + 1;

  /**
   * 총 날짜 계산
   *
   * 총 날짜는 시작 날짜부터 종료 날짜까지의 일수 + 시작 날짜에 빈 날짜 + 종료 날짜에 빈 날짜 (25년 기준 365일 + 3일 + 3일)
   */
  const numDaysRoundedToWeek = dateDifferenceInDays + numEmptyDaysAtStart + numEmptyDaysAtEnd;

  const weekCount = Math.ceil(numDaysRoundedToWeek / CONSTANTS.DAYS_IN_WEEK);

  const weekWidth = CONSTANTS.DAYS_IN_WEEK * squareSizeWithGutter;
  const width = weekCount * squareSizeWithGutter - (gutterSize - CONSTANTS.WEEKDAY_LABEL_SIZE);
  const height = weekWidth + (MONTH_LABEL_SIZE - gutterSize);

  const heatList = useMemo(() => activityList.map((a) => a.count), [activityList]);

  const activityMap = useMemo(
    () =>
      activityList.reduce(
        (acc, activity) => {
          const index = differenceInDays(new Date(activity.date), startDateWithEmptyDays);

          if (index < 0) return acc;

          acc[index] = {
            count: activity.count,
            date: activity.date,
          };

          return acc;
        },
        {} as Record<number, Activity>
      ),
    [activityList, startDateWithEmptyDays, heatList]
  );

  const renderMonthLabels = () => {
    return getRangeList(weekCount - 2).map((weekIndex) => {
      const date = endOfWeek(addDays(startDateWithEmptyDays, weekIndex * CONSTANTS.DAYS_IN_WEEK));
      const x = weekIndex * squareSizeWithGutter;
      const y = (MONTH_LABEL_SIZE - CONSTANTS.MONTH_LABEL_GUTTER_SIZE) / 2 + 1;

      const isFirstWeekOfMonth =
        date.getDate() >= CONSTANTS.DAYS_IN_WEEK &&
        date.getDate() <= 2 * CONSTANTS.DAYS_IN_WEEK - 1;

      return isFirstWeekOfMonth ? (
        <text key={weekIndex} x={x} y={y} style={{ fill: 'currentColor', fontSize: '11px' }}>
          {DATE_LABELS.MONTH_LIST[date.getMonth()]}
        </text>
      ) : null;
    });
  };

  const renderWeekdayLabels = () => {
    return DATE_LABELS.DAY_LIST.map((weekdayLabel, dayIndex) => {
      if (!weekdayLabel) return null;

      const y = (dayIndex + 1) * CONSTANTS.SQUARE_SIZE + dayIndex * gutterSize;

      return (
        <text
          key={`day-${dayIndex}`}
          x={0}
          y={y - 5}
          dy={dayIndex * 1}
          style={{ fill: 'currentColor', fontSize: '11px' }}
        >
          {weekdayLabel}
        </text>
      );
    });
  };

  const renderSquare = (dayIndex: number, index: number) => {
    /** 표시 범위를 벗어나는 셀 필터링 (시작일 이전 또는 종료일 이후) */
    const indexOutOfRange =
      index < numEmptyDaysAtStart || index >= numEmptyDaysAtStart + dateDifferenceInDays;

    if (indexOutOfRange) return null;

    const y = dayIndex * squareSizeWithGutter;
    const activity = activityMap[index];

    const heat = getHeatIndex(activity?.count || 0);

    return (
      <Tooltip key={`square-${index}`}>
        <TooltipTrigger asChild>
          <g>
            <rect
              width={CONSTANTS.SQUARE_SIZE}
              height={CONSTANTS.SQUARE_SIZE}
              x={0}
              y={y}
              rx="3"
              fill={COLOR_BY_HEAT_LIST[heat]}
            />

            {/* 활동이 없는 경우(heat=0) 테두리만 표시하기 위한 내부 사각형 */}
            {!heat && (
              <rect
                width={CONSTANTS.SQUARE_SIZE - 2}
                height={CONSTANTS.SQUARE_SIZE - 2}
                x={1.1}
                y={y + 1}
                rx="2"
                fill={COLOR_BY_HEAT_LIST[heat]}
              />
            )}
          </g>
        </TooltipTrigger>

        {activity && (
          <TooltipContent>
            <p>
              {format(new Date(activity?.date), 'M월 d일')}에 {activity?.count}회 읽으셨어요!
            </p>
          </TooltipContent>
        )}
      </Tooltip>
    );
  };

  const renderWeek = (weekIndex: number) => (
    <g key={`week-${weekIndex}`} transform={`translate(${weekIndex * squareSizeWithGutter}, 0)`}>
      {getRangeList(CONSTANTS.DAYS_IN_WEEK).map((dayIndex) =>
        renderSquare(dayIndex, weekIndex * CONSTANTS.DAYS_IN_WEEK + dayIndex)
      )}
    </g>
  );

  return (
    <TooltipProvider>
      <svg width={width} viewBox={`0 0 ${width} ${height}`}>
        <g transform={`translate(${CONSTANTS.WEEKDAY_LABEL_SIZE}, 0)`}>{renderMonthLabels()}</g>
        <g transform={`translate(0, ${MONTH_LABEL_SIZE})`}>{renderWeekdayLabels()}</g>
        <g transform={`translate(${CONSTANTS.WEEKDAY_LABEL_SIZE}, ${MONTH_LABEL_SIZE})`}>
          {getRangeList(weekCount).map(renderWeek)}
        </g>
      </svg>
    </TooltipProvider>
  );
}
