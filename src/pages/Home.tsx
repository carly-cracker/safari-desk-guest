import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const integrationLogos= [
  "https://i.pinimg.com/1200x/73/0b/95/730b955fb6084375384a1d43c5eb2469.jpg", 
  "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", 
  "https://cdn-icons-png.flaticon.com/512/906/906309.png",
  "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  "https://cdn-icons-png.flaticon.com/512/888/888846.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
]

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 animate-fade-in-up">
            Get Started
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            Your go-to productivity powerhouse for remote team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Streamline your workflow, manage projects, and empower your team with 
            SafariDesk the all-in-one task management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Button size="lg" asChild>
              <Link to="/signup">Start free</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* What makes us unique */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What makes us unique</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Team collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time collaboration features to keep your team in sync and productive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Seamless integrations</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with your favorite tools and streamline your workflow effortlessly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-2">25%</h3>
              <p className="text-sm">
                Increase in team productivity when switching to SafariDesk - get started today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your essential productivity toolkit */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your essential productivity toolkit</h2>
            <p className="text-muted-foreground">Everything you need to manage tasks and boost team collaboration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-purple-100">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Keep your team connected and aligned from</h3>
                <Button size="sm" className="mt-4">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-yellow-100">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Manage deadlines with visual calendar integration and timeline</h3>
                <Button size="sm" className="mt-4">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-green-100">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Task management for maximum efficiency</h3>
                <Button size="sm" className="mt-4">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete view of your team's progress */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-yellow-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Complete view of your team's progress</h2>
            <p className="text-muted-foreground mb-6">A personalized workspace</p>
            <p className="text-sm text-muted-foreground mb-8">
              Get a bird's eye view of all your projects, track progress, and make data-driven decisions 
              with comprehensive analytics and reporting tools.
            </p>
          </div>
        </div>
      </section>

      {/* What our users say */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What our users say</h2>
            <p className="text-muted-foreground">
              See what people are saying about SafariDesk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 bg-slate-900 text-white">
                <CardContent className="p-0">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "SafariDesk has transformed how our team collaborates and 
                    manages projects. It's intuitive and very flexible."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-sm">Sarah Johnson</p>
                      <p className="text-xs text-gray-400">Project Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by leading companies */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by leading companies</h2>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-lg font-semibold">Webflow</span>
            <span className="text-lg font-semibold">Dropbox</span>
            <span className="text-lg font-semibold">Notion</span>
            <span className="text-lg font-semibold">Zapier</span>
          </div>
        </div>
      </section>

      {/* SafariDesk Integrations */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">SafariDesk Integrations</h2>
          <p className="text-muted-foreground mb-8">Connect to Your Favorite Tools</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
            Seamlessly integrate SafariDesk with the tools your team already uses. 
            From communication platforms to file storage solutions, we've got you covered.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Integration logo ${index + 1}`}
                  className="w-6 h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Get quick answers to the most common questions about SafariDesk
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">What is SafariDesk?</h3>
                <p className="text-sm text-muted-foreground">
                  SafariDesk is a task management platform designed for startups 
                  and growing teams to help you manage tasks efficiently.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Can I integrate SafariDesk with other tools?</h3>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Is SafariDesk mobile-friendly?</h3>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">What kind of support does SafariDesk offer?</h3>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Can I try SafariDesk for free?</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-yellow-200 rounded-lg p-12 text-center">
            <Badge variant="secondary" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4">
              Supercharge your team's productivity today!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              SafariDesk is the ultimate task management solution designed 
              for startups and fast-growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book a demo</Button>
              <Button size="lg" variant="outline">Start your free trial</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;