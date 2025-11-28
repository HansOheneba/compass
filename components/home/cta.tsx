import { Badge } from "@/components/ui/badge";

const ctaButtons = [
  "Consulting & Technology",
  "Data Science & Analytics",
  "Healthcare",
  "Finance & Accounting",
  "Marketing & Sales",
  "Creative & Design",
  "Engineering & Science",
  "Education & Research",
];

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Passionate About Your Future?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore career paths and discover what excites you most
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {ctaButtons.map((text, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {text}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
