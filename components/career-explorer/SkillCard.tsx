interface SkillCardProps {
  name: string;
  importance: string;
  userHas: boolean;
}

export default function SkillCard({
  name,
  importance,
  userHas,
}: SkillCardProps) {
  const importanceColor =
    importance === "Critical"
      ? "bg-red-100 text-red-800"
      : importance === "Important"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-blue-100 text-blue-800";

  return (
    <div
      className={`p-4 rounded-lg border ${
        userHas ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <span
            className={`text-xs mt-1 inline-block px-2 py-1 rounded ${importanceColor}`}
          >
            {importance}
          </span>
        </div>
        {userHas && <span className="text-green-600 font-bold text-xl">✓</span>}
      </div>
    </div>
  );
}
