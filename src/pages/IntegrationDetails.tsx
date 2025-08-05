import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Star, ExternalLink, Check, Play, Download, Settings, Users, Zap, Shield } from "lucide-react";

const IntegrationDetails = () => {
  const { id } = useParams();

  // Mock integration data - in a real app this would come from an API
  const integration = {
    id: 1,
    name: "Slack",
    description: "Get real-time notifications and manage tasks directly from Slack channels",
    longDescription: "The SafariDesk Slack integration brings project management directly into your team's communication hub. Receive instant notifications about task updates, create new tasks from Slack messages, and keep your entire team aligned without switching between apps.",
    category: "Communication",
    rating: 4.9,
    reviews: 2150,
    installs: "50K+",
    logo: "/api/placeholder/80/80",
    screenshots: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    features: [
      "Real-time task notifications in Slack channels",
      "Create tasks directly from Slack messages",
      "View project status and updates",
      "Assign tasks to team members via Slack",
      "Get daily standup summaries",
      "Custom notification preferences"
    ],
    benefits: [
      "Reduce context switching between apps",
      "Keep your team informed in real-time",
      "Faster task creation and updates",
      "Better team collaboration",
      "Centralized project communication"
    ],
    requirements: [
      "Slack workspace with admin permissions",
      "SafariDesk Pro plan or higher",
      "Internet connection for real-time sync"
    ],
    pricing: "Free with SafariDesk Pro",
    support: "24/7 Email & Chat Support",
    developer: "SafariDesk Inc.",
    lastUpdated: "December 10, 2024",
    version: "2.1.4"
  };

  const setupSteps = [
    {
      step: 1,
      title: "Install from Slack App Directory",
      description: "Go to your Slack workspace settings and search for 'SafariDesk' in the App Directory."
    },
    {
      step: 2,
      title: "Authorize SafariDesk Access",
      description: "Click 'Install' and authorize SafariDesk to access your Slack workspace."
    },
    {
      step: 3,
      title: "Connect Your SafariDesk Account",
      description: "Sign in to your SafariDesk account to link it with your Slack workspace."
    },
    {
      step: 4,
      title: "Configure Notifications",
      description: "Choose which projects and channels should receive SafariDesk notifications."
    },
    {
      step: 5,
      title: "Start Collaborating",
      description: "Begin receiving notifications and managing tasks directly from Slack!"
    }
  ];

  const relatedIntegrations = [
    {
      id: 2,
      name: "Microsoft Teams",
      description: "Collaborate with your team and manage projects within Microsoft Teams",
      category: "Communication",
      rating: 4.7
    },
    {
      id: 3,
      name: "Discord",
      description: "Get task updates and manage projects in your Discord server",
      category: "Communication", 
      rating: 4.6
    },
    {
      id: 4,
      name: "Zapier",
      description: "Automate workflows by connecting SafariDesk with 5000+ apps",
      category: "Automation",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/integration">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Integrations
            </Link>
          </Button>
        </div>
      </section>

      {/* Integration Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 bg-muted rounded-lg"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{integration.name}</h1>
                    <Badge>{integration.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{integration.description}</p>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= Math.floor(integration.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span>{integration.rating}</span>
                      <span className="text-muted-foreground">({integration.reviews} reviews)</span>
                    </div>
                    <div className="text-muted-foreground">{integration.installs} installs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Install Card */}
            <Card className="w-full lg:w-80">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Install Integration
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                  
                  <div className="border-t pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pricing:</span>
                      <span className="font-semibold">{integration.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Support:</span>
                      <span>{integration.support}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Version:</span>
                      <span>{integration.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Updated:</span>
                      <span>{integration.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-8 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {integration.screenshots.map((screenshot, index) => (
              <div key={index} className="h-48 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="setup">Setup Guide</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About this integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{integration.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {integration.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {integration.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="setup" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Setup Guide</CardTitle>
                  <p className="text-muted-foreground">
                    Follow these simple steps to get started with the {integration.name} integration.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {setupSteps.map((step) => (
                      <div key={step.step} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our support team is here to help you get set up. Contact us if you run into any issues.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Contact Support</Button>
                      <Button size="sm" variant="outline">View Documentation</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integration.features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{feature}</h3>
                          <p className="text-sm text-muted-foreground">
                            Detailed description of this feature and how it benefits your workflow.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-8">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-muted rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold">John Doe</span>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            This integration has been a game-changer for our team. We can now manage all our 
                            projects directly from Slack without switching between apps.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Integrations */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Related Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIntegrations.map((related) => (
              <Card key={related.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-muted rounded-lg"></div>
                    <div>
                      <h3 className="font-semibold">{related.name}</h3>
                      <Badge variant="outline" className="text-xs">{related.category}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{related.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{related.rating}</span>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/integration/${related.id}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationDetails;
