import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, Search as SearchIcon, Star, MapPin, Clock, Mic } from "lucide-react";

// Mock data for coaches
const mockCoaches = [
  {
    id: 1,
    name: "Dr. Maria Silva",
    specialty: "Health & Fitness",
    rating: 4.9,
    reviews: 127,
    location: "São Paulo, Brasil",
    available: true,
    rate: "$15/session",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    bio: "Certified nutritionist specializing in wellness coaching"
  },
  {
    id: 2,
    name: "Carlos Mendez",
    specialty: "Auto Mechanics",
    rating: 4.8,
    reviews: 89,
    location: "Bogotá, Colombia",
    available: true,
    rate: "$12/session",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    bio: "20+ years experience in automotive diagnostics"
  },
  {
    id: 3,
    name: "Ana Rodriguez",
    specialty: "Psychology",
    rating: 5.0,
    reviews: 203,
    location: "Medellín, Colombia",
    available: false,
    rate: "$18/session",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    bio: "Licensed therapist focusing on stress management"
  },
  {
    id: 4,
    name: "João Santos",
    specialty: "Programming",
    rating: 4.7,
    reviews: 156,
    location: "Rio de Janeiro, Brasil",
    available: true,
    rate: "$20/session",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    bio: "Full-stack developer with 10 years experience"
  }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    setIsListening(!isListening);
    // Voice search implementation would go here
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
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Coach</h1>
              <p className="text-muted-foreground">
                Describe what you need help with, or search by specialty
              </p>
            </div>

            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="e.g., 'My car makes a strange noise' or 'Python programming help'"
                className="pl-12 pr-12 h-14 text-lg rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                size="icon"
                variant="ghost"
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${isListening ? 'text-destructive' : ''}`}
                onClick={handleVoiceSearch}
              >
                <Mic className="h-5 w-5" />
              </Button>
            </div>

            {isListening && (
              <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                Listening...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Available Coaches</h2>
          <p className="text-muted-foreground">{mockCoaches.length} coaches found</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoaches.map((coach) => (
            <Card key={coach.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6 space-y-4">
                {/* Coach Header */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={coach.image} alt={coach.name} />
                    <AvatarFallback>{coach.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{coach.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {coach.specialty}
                    </Badge>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {coach.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-medium">{coach.rating}</span>
                    <span className="text-muted-foreground">({coach.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{coach.location}</span>
                  </div>
                </div>

                {/* Availability & Action */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${coach.available ? 'bg-green-500' : 'bg-muted'}`} />
                    <span className="text-sm font-medium">
                      {coach.available ? 'Available now' : 'Offline'}
                    </span>
                  </div>
                  <span className="text-sm font-semibold">{coach.rate}</span>
                </div>

                <Link to={`/coach/${coach.id}`}>
                  <Button 
                    className="w-full gap-2" 
                    disabled={!coach.available}
                  >
                    <Clock className="h-4 w-4" />
                    {coach.available ? 'Connect Now' : 'View Profile'}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
