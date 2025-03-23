import { useMemo } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@it-diots/shared/ui';

import { addDays, differenceInDays, endOfWeek } from 'date-fns';

const CONSTANTS = {
  DAYS_IN_WEEK: 7,
  SQUARE_SIZE: 8,
  LINE_HEIGHT: 18,
  MONTH_LABEL_GUTTER_SIZE: 6,
  WEEKDAY_LABEL_SIZE: 50,
  HEAT: 3,
};

const DATE_LABELS = {
  MONTH_LIST: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  DAY_LIST: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
};

const COLOR_BY_HEAT_LIST = ['#e6e6e6', '#bebebe', '#8b8b8b', '#4d4d4d'];
const MONTH_LABEL_SIZE = CONSTANTS.LINE_HEIGHT + CONSTANTS.MONTH_LABEL_GUTTER_SIZE;

function getRangeList(count: number): number[] {
  return Array.from({ length: count }, (_, i) => i);
}

function getHeatList(values: number[]) {
  const uniques = Array.from(new Set(values)).sort((a, b) => a - b);

  if (uniques.length <= CONSTANTS.HEAT) {
    return [...Array(CONSTANTS.HEAT - uniques.length).fill(0), ...uniques];
  }

  const heatSize = Math.floor(uniques.length / CONSTANTS.HEAT);

  return Array.from(
    { length: CONSTANTS.HEAT },
    (_, i) => uniques[Math.min(heatSize * (i + 1), uniques.length - 1)]
  );
}

function getHeat(value: number, bins: number[]): number {
  if (!value) return 0;
  if (value > Math.max(...bins)) return bins.length;

  return bins.findIndex((binMaxValue) => value <= binMaxValue) + 1;
}

interface Activity {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  startDate: Date;
  endDate: Date;
  activityList: Activity[];
  gutterSize?: number;
}

export function ActivityHeatmap({
  startDate,
  endDate,
  activityList,
  gutterSize = 3,
}: ActivityHeatmapProps) {
  const squareSizeWithGutter = CONSTANTS.SQUARE_SIZE + gutterSize;

  // 시작 날짜와 끝 날짜의 빈 날짜 수
  const numEmptyDaysAtEnd = CONSTANTS.DAYS_IN_WEEK - 1 - endDate.getDay();
  const numEmptyDaysAtStart = startDate.getDay();

  // 시작 날짜에 빈 날짜 추가
  const startDateWithEmptyDays = addDays(startDate, -numEmptyDaysAtStart);

  // 시작 날짜부터 종료 날짜까지의 일수 (첫날 포함)
  const dateDifferenceInDays = differenceInDays(endDate, startDate) + 1;

  /**
   * 총 날짜 계산
   *
   * 총 날짜는 시작 날짜부터 종료 날짜까지의 일수 + 시작 날짜에 빈 날짜 + 종료 날짜에 빈 날짜 (25년 기준 365일 + 3일 + 3일)
   */
  const numDaysRoundedToWeek = dateDifferenceInDays + numEmptyDaysAtStart + numEmptyDaysAtEnd;

  // 주 수 계산
  const weekCount = Math.ceil(numDaysRoundedToWeek / CONSTANTS.DAYS_IN_WEEK);

  const weekWidth = CONSTANTS.DAYS_IN_WEEK * squareSizeWithGutter;
  const width = weekCount * squareSizeWithGutter - (gutterSize - CONSTANTS.WEEKDAY_LABEL_SIZE);
  const height = weekWidth + (MONTH_LABEL_SIZE - gutterSize);

  const countList = useMemo(() => activityList.map((a) => a.count), [activityList]);
  const heatList = useMemo(() => getHeatList(countList), [countList]);

  const activityMap = useMemo(
    () =>
      activityList.reduce(
        (acc, activity) => {
          const index = differenceInDays(new Date(activity.date), startDateWithEmptyDays);

          if (index < 0) return acc;

          const count = activity.count;

          acc[index] = {
            count,
            heat: getHeat(count, heatList),
            date: activity.date,
          };

          return acc;
        },
        {} as Record<number, Activity & { heat: number }>
      ),
    [activityList, startDateWithEmptyDays, heatList]
  );

  // 렌더링 함수들
  const renderMonthLabels = () => {
    return getRangeList(weekCount - 2).map((weekIndex) => {
      const date = endOfWeek(addDays(startDateWithEmptyDays, weekIndex * CONSTANTS.DAYS_IN_WEEK));
      const x = weekIndex * squareSizeWithGutter;
      const y = (MONTH_LABEL_SIZE - CONSTANTS.MONTH_LABEL_GUTTER_SIZE) / 2 + 1;

      const isFirstWeekOfMonth =
        date.getDate() >= CONSTANTS.DAYS_IN_WEEK &&
        date.getDate() <= 2 * CONSTANTS.DAYS_IN_WEEK - 1;

      return isFirstWeekOfMonth ? (
        <text key={weekIndex} x={x} y={y} style={{ fill: 'currentColor', fontSize: '13px' }}>
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
        <text key={`day-${dayIndex}`} x={0} y={y} fontSize="13px">
          {weekdayLabel}
        </text>
      );
    });
  };

  const renderSquare = (dayIndex: number, index: number) => {
    const indexOutOfRange =
      index < numEmptyDaysAtStart || index >= numEmptyDaysAtStart + dateDifferenceInDays;
    if (indexOutOfRange) return null;

    const y = dayIndex * squareSizeWithGutter;
    const activity = activityMap[index];

    const heat = activity?.heat || 0;

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
              {activity?.date}일에 {activity?.count}회 읽으셨네요!
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
