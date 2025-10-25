import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Dumbbell, Target, TrendingUp, Users, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fitness.jpg";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Custom Workout Plans",
      description: "Get personalized workout routines tailored to your fitness goals, experience level, and available equipment.",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Monitor your fitness journey with detailed analytics, weight tracking, and performance metrics over time.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Plan your workouts with an intelligent calendar that adapts to your schedule and recovery needs.",
    },
    {
      icon: Dumbbell,
      title: "Exercise Library",
      description: "Access hundreds of exercises with proper form instructions, videos, and muscle group targeting.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow fitness enthusiasts, share achievements, and stay motivated together.",
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Celebrate milestones and stay motivated with our comprehensive achievement and rewards system.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border" role="banner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-20" aria-label="Main navigation">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-primary" aria-hidden="true" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FlexZone
              </span>
            </div>
            <Link to="/login">
              <Button 
                size="lg" 
                className="tap-target font-semibold"
                aria-label="Log in to your account"
              >
                Log In
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section 
          className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 gradient-hero"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Text */}
              <div className="text-center lg:text-left text-white">
                <h1 
                  id="hero-heading" 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Transform Your Fitness Journey
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Track your workouts, create custom plans, and achieve your fitness goals with intelligent tools designed for real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/signup">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="tap-target text-lg font-semibold h-14 px-8"
                      aria-label="Get started with FlexZone"
                    >
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/learn-more">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="tap-target text-lg font-semibold h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                      aria-label="Learn more about FlexZone"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="People exercising in a modern gym, showcasing various workout activities"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="features-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful features to help you build strength, track progress, and stay motivated every step of the way.
              </p>
            </div>

            <div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              role="list"
              aria-label="Platform features"
            >
              {features.map((feature, index) => (
                <div key={index} role="listitem">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 gradient-hero"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto text-center text-white">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of fitness enthusiasts who are already transforming their lives with FlexZone.
            </p>
            <Link to="/signup">
              <Button 
                size="lg"
                variant="secondary"
                className="tap-target text-lg font-semibold h-14 px-8"
                aria-label="Sign up for FlexZone"
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6 text-primary" aria-hidden="true" />
                <span className="text-lg font-bold">FlexZone</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your ultimate fitness companion for tracking workouts and achieving your goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#features" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="View features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="View pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="About FlexZone"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="Contact us"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#privacy" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="Read privacy policy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#accessibility" 
                    className="text-muted-foreground hover:text-foreground transition-colors tap-target inline-block"
                    aria-label="View accessibility statement"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FlexZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
