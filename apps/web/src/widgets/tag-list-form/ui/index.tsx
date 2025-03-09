import { TagListItem } from './tag-list-item';

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

interface TagListFormProps {
  title: string;
}

export function TagListForm({ title }: TagListFormProps) {
  return (
    <div className="flex flex-col border p-4 rounded">
      <h6 className="text-lg font-bold">{title}</h6>

      <ol className="mt-2">
        {TEMPORARY_TAG_LIST.map(({ id, name }) => (
          <TagListItem key={id} id={id} name={name} />
        ))}
      </ol>
    </div>
  );
}
