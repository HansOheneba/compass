interface AlignmentBarProps {
  label: string;
  value?: number;
  total: number;
}

export default function AlignmentBar({
  label,
  value,
  total,
}: AlignmentBarProps) {
  const percentage = value ? (value / total) * 100 : 0;

  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-2">
        <span>{label}</span>
        <span>
          {value ?? 0} / {total}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
