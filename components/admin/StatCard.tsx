interface Props {
  title: string;
  value: string;
}

export function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm text-neutral-500">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}