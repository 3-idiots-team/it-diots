const TEMPORARY_TAG_LIST = [
  { id: 1, name: 'Cursor' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Next.js' },
  { id: 4, name: 'Supabase' },
  { id: 5, name: 'AI' },
  { id: 6, name: 'ChatGPT' },
  { id: 7, name: 'NVIDIA' },
  { id: 8, name: 'LLM' },
  { id: 9, name: 'GPT' },
  { id: 10, name: 'Claude' },
];

/** TODO: 추천, 인기, 최근 추가 태그 action 분기용 props 추가 */
export function TagListItem() {
  return (
    <ol>
      {TEMPORARY_TAG_LIST.map(({ id, name }) => (
        <li className="py-1.5">
          <a
            href={`/tag/${name}`}
            className="flex flex-row items-center px-2 rounded-lg hover:bg-gray-100"
          >
            <span className="inline-flex min-w-14 justify-center text-muted-foreground">{id}</span>
            <p className="pl-4">{name}</p>
          </a>
        </li>
      ))}
    </ol>
  );
}
