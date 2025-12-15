export default function IndustryHeader({
  industry,
  description,
}: {
  industry: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black mb-2">{industry}</h1>
      <p className="text-gray-600 max-w-2xl">{description}</p>
    </div>
  );
}
