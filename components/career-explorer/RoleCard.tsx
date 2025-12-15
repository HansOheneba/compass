interface RoleCardProps {
  title: string;
  level: string;
  matchScore?: number;
}

export default function RoleCard({ title, level, matchScore }: RoleCardProps) {
  return (
    <div className="p-5 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">Level: {level}</p>
        </div>
        {matchScore !== undefined && (
          <div className="text-right">
            <span className="text-sm font-bold text-green-600">
              {matchScore}% Match
            </span>
          </div>
        )}
      </div>
      {matchScore !== undefined && (
        <div className="w-full h-1.5 bg-gray-300 rounded-full mt-3">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${matchScore}%` }}
          />
        </div>
      )}
    </div>
  );
}
