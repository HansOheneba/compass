import { Card } from "@/components/ui/card";
import { Sparkles, Target, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Guidance",
    description:
      "Get recommendations tailored to your unique profile and aspirations",
  },
  {
    icon: Target,
    title: "Clear Pathways",
    description: "Discover step-by-step career progression strategies",
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor your development and celebrate milestones",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Connect with career experts and mentors",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Why Choose Compass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering your career decisions with data-driven insights and
            personalized support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                className="p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
