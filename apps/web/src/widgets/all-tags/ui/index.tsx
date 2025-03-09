import { TagNavigateButton } from './tag-navigate-button';

import { 한글_초성 } from '@/shared/constants';

const TEMPORARY_TAG_LIST: string[] = [
  '.net',
  '.net-core',
  '.net-maui',
  '3d',
  'ab-testing',
  'accessibility',
  'ai',
  'ai-agents',
  'chromeos',
  'cicd',
  'cloud',
  'clojure',
  'facebook',
  'fastapi',
  'feature-engineering',
  'jenkins',
  'jest',
  'jira',
  'pandas',
  'passkeys',
  'php',
  'spotify',
  'spring',
  'sql',
  'tailwindcss',
  'typescript',
  'vue',
  'webassembly',
  'webdev',
  'webgl',
  'webhooks',
  'webscraping',
  'websecurity',
  'webserver',
  'aws',
  'azure',
  'docker',
  'kubernetes',
  'linux',
  'macos',
  'windows',
  '고양이',
  '과자',
  '나라',
  '나비',
  '달력',
  '도서관',
  '라디오',
  '레몬',
  '마늘',
  '모자',
  '바다',
  '비행기',
  '사과',
  '수도',
  '아이스크림',
  '얼굴',
  '자전거',
  '정원',
  '치약',
  '친구',
  '코끼리',
  '커피',
  '탁자',
  '토끼',
  '포도',
  '풍선',
  '학교',
  '호수',
];

export function AllTags() {
  function getFirstLetter(tag: string): string {
    const firstChar = tag.charAt(0);

    /** 한글인 경우, 초성 반환 */
    if (/[가-힣]/.test(firstChar)) {
      const initialCode = Math.floor((firstChar.charCodeAt(0) - 44032) / 588);
      return 한글_초성[initialCode] as string;
    }

    return firstChar.toUpperCase();
  }

  /** A: ["ai", "aws"] 포맷으로 정렬 */
  function groupTagsByLetter(tags: string[]): Record<string, string[]> {
    /** 초성 기준 정렬, 알파벳이 한글보다 우선순위 */
    const sortedTags = tags.sort((a, b) => getFirstLetter(a).localeCompare(getFirstLetter(b)));

    return sortedTags.reduce((acc: Record<string, string[]>, tag) => {
      const firstLetter = getFirstLetter(tag);

      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(tag);

      return acc;
    }, {});
  }

  const groupedTags = groupTagsByLetter(TEMPORARY_TAG_LIST);

  return (
    <div className="columns-[20rem] w-full">
      {Object.entries(groupedTags).map(([letter, tagList], index) => (
        <div key={letter}>
          <h2 className={`text-lg font-semibold ${index === 0 ? 'mb-4' : 'my-4'}`}>{letter}</h2>

          <div className="flex flex-col gap-3">
            {tagList.map((tag) => (
              <TagNavigateButton key={tag} tag={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
