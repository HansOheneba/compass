import AlignmentBar from "./AlignmentBar";

interface Skill {
  name: string;
  rating: number;
  category: "soft" | "technical";
}

interface InterestsProfile {
  [key: string]: number;
}

interface AlignmentCheck {
  interest?: number;
  skills?: number;
  values?: number;
  growth?: number;
  future?: number;
  environment?: number;
  total?: number;
}

interface AlignmentSectionProps {
  skills?: {
    skills?: Skill[];
  } | null;
  interests?: InterestsProfile | null;
  alignment?: AlignmentCheck | null;
  criteria: Record<string, string>;
}

export default function AlignmentSection({
  skills,
  interests,
  alignment,
  criteria,
}: AlignmentSectionProps) {
  return (
    <section className="bg-gray-100 border rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-3">Your Alignment</h2>
      <p className="text-gray-600 mb-6">
        This section compares your personal data with what this industry
        typically requires.
      </p>

      <div className="space-y-6">
        <AlignmentBar
          label="Skills Fit"
          value={skills?.skills?.length}
          total={10}
        />
        <AlignmentBar
          label="Interests Fit"
          value={
            interests
              ? Object.values(interests).reduce(
                  (a: number, b: number) => a + b,
                  0
                )
              : undefined
          }
          total={30}
        />
        <AlignmentBar
          label="Career Alignment Score"
          value={alignment?.total}
          total={30}
        />

        <div className="bg-white rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-900 mb-3">
            Why this industry fits:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {Object.entries(criteria).map(([key, value]) => (
              <li key={key} className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
