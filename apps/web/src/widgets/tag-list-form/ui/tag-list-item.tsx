export function TagListItem({ id, name }: { id: number; name: string }) {
  return (
    <li className="py-1.5">
      <a
        href={`/tag/${name}`}
        className="flex flex-row items-center px-2 rounded-lg hover:bg-gray-100"
      >
        <span className="inline-flex min-w-14 justify-center text-muted-foreground">{id}</span>
        <p className="pl-4">{name}</p>
      </a>
    </li>
  );
}
