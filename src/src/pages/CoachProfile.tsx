import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Video, 
  Star, 
  MapPin, 
  Clock, 
  Award, 
  MessageSquare,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

const CoachProfile = () => {
  const { id } = useParams();

  // Mock detailed coach data
  const coach = {
    id: 1,
    name: "Dr. Maria Silva",
    specialty: "Health & Fitness",
    rating: 4.9,
    reviews: 127,
    location: "São Paulo, Brasil",
    available: true,
    rate: "$15/session",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    bio: "Certified nutritionist with over 10 years of experience helping clients achieve their wellness goals. Specializing in personalized meal planning, weight management, and lifestyle coaching.",
    languages: ["Portuguese", "English", "Spanish"],
    expertise: [
      "Nutrition Planning",
      "Weight Management",
      "Sports Nutrition",
      "Lifestyle Coaching",
      "Wellness Programs"
    ],
    certifications: [
      "Certified Nutritionist",
      "Sports Nutrition Specialist",
      "Wellness Coach Certification"
    ],
    stats: {
      totalSessions: 340,
      responseTime: "< 2 min",
      completionRate: 98
    },
    recentReviews: [
      {
        id: 1,
        user: "João P.",
        rating: 5,
        date: "2 days ago",
        comment: "Maria was incredibly helpful! She gave me practical advice that I could implement right away."
      },
      {
        id: 2,
        user: "Ana M.",
        rating: 5,
        date: "1 week ago",
        comment: "Very knowledgeable and patient. Answered all my questions about meal planning."
      },
      {
        id: 3,
        user: "Pedro S.",
        rating: 4,
        date: "2 weeks ago",
        comment: "Great session, learned a lot about sports nutrition. Would recommend!"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">20minCoach</span>
          </Link>
          <Link to="/search">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={coach.image} alt={coach.name} />
                  <AvatarFallback className="text-2xl">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h1 className="text-3xl font-bold">{coach.name}</h1>
                      {coach.available && (
                        <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                          Available Now
                        </Badge>
                      )}
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {coach.specialty}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{coach.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-secondary text-secondary" />
                      <span className="text-xl font-bold">{coach.rating}</span>
                      <span className="text-muted-foreground">({coach.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{coach.stats.totalSessions} sessions</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {coach.languages.map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* About */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
            </Card>

            {/* Expertise */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {coach.expertise.map((area) => (
                  <Badge key={area} variant="secondary" className="px-3 py-1">
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h2>
              <ul className="space-y-2">
                {coach.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Recent Reviews
              </h2>
              <div className="space-y-4">
                {coach.recentReviews.map((review) => (
                  <div key={review.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.user}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b">
                  <div className="text-4xl font-bold text-primary mb-2">{coach.rate}</div>
                  <p className="text-sm text-muted-foreground">per 20-minute session</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Response Time</span>
                    <span className="font-medium">{coach.stats.responseTime}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Completion Rate</span>
                      <span className="font-medium">{coach.stats.completionRate}%</span>
                    </div>
                    <Progress value={coach.stats.completionRate} className="h-2" />
                  </div>
                </div>

                {coach.available ? (
                  <Button className="w-full gap-2" size="lg">
                    <Video className="h-4 w-4" />
                    Connect Now (20 min)
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" variant="secondary">
                    Request Session
                  </Button>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  By connecting, you agree to our terms and conditions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
