import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, Clock, Star, Users, ArrowRight, Shield, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">20minCoach</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/search">
              <Button variant="ghost">Find a Coach</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Clock className="h-4 w-4" />
            Expert guidance in just 20 minutes
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Connect with Experts
            <span className="block text-primary">Anytime, Anywhere</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant video coaching from professionals in health, psychology, law, mechanics, programming, arts, and more. Quick, affordable, and on-demand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/search">
              <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-all">
                Find Your Coach
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="gap-2">
                Become a Coach
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>1,000+ Coaches</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-secondary" />
              <span>4.9 Avg Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>50+ Specialties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "20-Minute Sessions",
              description: "Get focused, actionable advice without the time commitment. Perfect for busy schedules."
            },
            {
              icon: Shield,
              title: "Verified Experts",
              description: "All coaches are verified professionals with proven expertise in their fields."
            },
            {
              icon: Video,
              title: "Instant Video Calls",
              description: "Connect face-to-face through high-quality video calls. No appointments needed."
            }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
          <p className="text-muted-foreground text-lg">Find the right expert for your needs</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "Health & Fitness",
            "Psychology",
            "Legal Advice",
            "Auto Mechanics",
            "Programming",
            "Cloud Services",
            "Arts & Design",
            "Agriculture",
            "Business",
            "Languages"
          ].map((category, idx) => (
            <Link key={idx} to="/search">
              <div className="bg-card rounded-xl p-6 text-center hover:shadow-md transition-all border hover:border-primary cursor-pointer">
                <p className="font-medium">{category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-primary rounded-3xl p-12 md:p-20 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Expert Help?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users getting instant access to professional coaching
          </p>
          <Link to="/search">
            <Button size="lg" variant="secondary" className="gap-2 shadow-lg">
              Start Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              <span className="font-semibold">20minCoach</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 20minCoach. Expert guidance, anytime.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
