export function UserMetric({ number, label }: { number: number; label: string }) {
  return (
    <p className="font-bold text-sm">
      {number} <span className="font-normal text-gray-500">{label}</span>
    </p>
  );
}
