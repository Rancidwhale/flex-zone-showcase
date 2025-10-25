import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, TrendingUp, Users, Calendar, Trophy, Zap, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  const benefits = [
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Whether you want to lose weight, build muscle, or improve endurance, our platform adapts to your specific goals with personalized workout plans.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Track every metric that matters - from weight progression to workout volume. Visualize your progress with detailed charts and analytics.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Life gets busy. Our smart scheduler adapts to your availability and ensures you never miss a workout with intelligent reminders and recovery tracking.",
    },
    {
      icon: Dumbbell,
      title: "Extensive Exercise Database",
      description: "Access 500+ exercises with HD video demonstrations, proper form tips, and muscle group targeting to ensure safe and effective training.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a thriving community of fitness enthusiasts. Share progress, get motivation, and celebrate achievements together.",
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Stay motivated with badges, streaks, and milestones. Gamification makes fitness fun and keeps you coming back for more.",
    },
    {
      icon: Zap,
      title: "AI-Powered Recommendations",
      description: "Our intelligent system learns from your workouts and suggests optimal exercises, rest periods, and progression strategies.",
    },
    {
      icon: Heart,
      title: "Health Integration",
      description: "Sync with popular fitness trackers and health apps to get a complete picture of your wellness journey.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your data is encrypted and secure. We never share your personal information without your explicit consent.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FlexZone
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to Achieve Your Fitness Goals
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            FlexZone combines cutting-edge technology with proven fitness principles to create the ultimate workout companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg font-semibold h-14 px-8">
                Start Free Today
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="text-lg font-semibold h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose FlexZone?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built the most comprehensive fitness platform to support you at every stage of your journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who are already achieving their goals with FlexZone.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-lg font-semibold h-14 px-8">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FlexZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
