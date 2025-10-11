import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-border/50">
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
