import { TagListItem } from '@/features/tag-list-item';

interface TagListFormProps {
  title: string;
}

export function TagListForm({ title }: TagListFormProps) {
  return (
    <div className="flex flex-col border p-4 rounded">
      <h6 className="text-lg font-bold mb-2">{title}</h6>

      <TagListItem />
    </div>
  );
}
