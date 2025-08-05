import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Building2, Users, TrendingUp, Clock, Quote, CheckCircle, Target, Lightbulb } from "lucide-react";

const CaseStudyDetails = () => {
  const { id } = useParams();

  // Mock case study data - in a real app this would come from an API
  const caseStudy = {
    id: 1,
    title: "TechStart Scales from 10 to 100 Employees with SafariDesk",
    subtitle: "How a fast-growing startup used SafariDesk to maintain productivity and team coordination during rapid scaling",
    company: {
      name: "TechStart Inc.",
      industry: "Technology",
      size: "100+ employees",
      website: "techstart.com",
      logo: "/api/placeholder/80/80"
    },
    challenge: {
      title: "The Challenge: Managing Rapid Growth",
      description: "TechStart was experiencing explosive growth, scaling from 10 to 100 employees in just 18 months. With this rapid expansion came significant challenges in project coordination, team communication, and maintaining the startup culture that made them successful.",
      painPoints: [
        "Lack of visibility across multiple concurrent projects",
        "Communication silos between rapidly growing teams",
        "Difficulty tracking project progress and deadlines",
        "No standardized workflow processes",
        "Teams working in different time zones and locations"
      ]
    },
    solution: {
      title: "The Solution: Implementing SafariDesk",
      description: "TechStart chose SafariDesk as their central project management platform to address their scaling challenges. The implementation was rolled out in phases across different teams and departments.",
      implementation: [
        {
          phase: "Phase 1",
          title: "Core Team Setup",
          description: "Started with the engineering team to establish workflows and best practices",
          duration: "2 weeks"
        },
        {
          phase: "Phase 2", 
          title: "Department Expansion",
          description: "Rolled out to marketing, sales, and customer success teams",
          duration: "4 weeks"
        },
        {
          phase: "Phase 3",
          title: "Full Organization",
          description: "Company-wide adoption with custom integrations and automations",
          duration: "6 weeks"
        }
      ],
      features: [
        "Project templates for consistent workflows",
        "Real-time collaboration and communication",
        "Advanced reporting and analytics",
        "Integration with existing tools (Slack, GitHub, Google Workspace)",
        "Custom automation rules",
        "Time tracking and resource management"
      ]
    },
    results: {
      title: "The Results: Measurable Impact",
      description: "Within 6 months of implementing SafariDesk, TechStart saw significant improvements across all key metrics.",
      metrics: [
        {
          metric: "Team Productivity",
          before: "Baseline",
          after: "+250%",
          description: "Measured by tasks completed per sprint and project delivery times"
        },
        {
          metric: "Time to Market",
          before: "12 weeks average",
          after: "7 weeks average",
          description: "40% reduction in feature development and release cycles"
        },
        {
          metric: "Team Satisfaction",
          before: "72%",
          after: "95%",
          description: "Improved through better communication and reduced stress"
        },
        {
          metric: "Project Visibility",
          before: "30%",
          after: "100%",
          description: "Complete transparency across all projects and teams"
        }
      ]
    },
    testimonial: {
      quote: "SafariDesk didn't just help us manage our growth - it enabled it. We went from chaotic scaling to structured, sustainable expansion. Our team satisfaction scores hit an all-time high, and we're delivering features 40% faster than before.",
      author: {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        company: "TechStart Inc.",
        avatar: "/api/placeholder/60/60"
      }
    },
    keyLearnings: [
      "Start with a pilot team to establish best practices before company-wide rollout",
      "Invest time in proper project templates to ensure consistency across teams",
      "Regular training sessions are crucial for successful adoption",
      "Integration with existing tools reduces friction and improves adoption rates",
      "Custom automation rules save significant time for repetitive tasks"
    ],
    nextSteps: {
      title: "What's Next for TechStart",
      description: "Building on their success with SafariDesk, TechStart is now exploring advanced features like AI-powered project insights and predictive analytics to further optimize their workflows.",
      future: [
        "Implementing AI-powered project insights",
        "Advanced resource planning and allocation",
        "Cross-team collaboration optimization",
        "Customer project visibility portal"
      ]
    }
  };

  const relatedCaseStudies = [
    {
      id: 2,
      title: "Marketing Agency Improves Client Delivery by 40%",
      company: "Creative Solutions",
      industry: "Marketing",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Remote-First Company Achieves 95% Team Satisfaction",
      company: "DistributedCorp",
      industry: "Software",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/case-study">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">{caseStudy.company.industry}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{caseStudy.subtitle}</p>
          </div>

          {/* Company Info */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-muted rounded-lg"></div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{caseStudy.company.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span>{caseStudy.company.industry}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{caseStudy.company.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground">Website:</span>
                      <span className="text-primary">{caseStudy.company.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Results</h2>
            <p className="text-muted-foreground">The measurable impact SafariDesk had on TechStart's operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.metrics.map((result, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{result.after}</div>
                  <div className="font-semibold mb-2">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {/* Challenge Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold">{caseStudy.challenge.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{caseStudy.challenge.description}</p>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Pain Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {caseStudy.challenge.painPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Solution Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">{caseStudy.solution.title}</h2>
              </div>
              <p className="text-muted-foreground mb-8">{caseStudy.solution.description}</p>
              
              {/* Implementation Timeline */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Implementation Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {caseStudy.solution.implementation.map((phase, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold">{phase.phase}: {phase.title}</h3>
                            <Badge variant="outline">{phase.duration}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features Used */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SafariDesk Features Implemented</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Results Section */}
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold">{caseStudy.results.title}</h2>
              </div>
              <p className="text-muted-foreground mb-8">{caseStudy.results.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.metrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold">{metric.metric}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{metric.after}</div>
                          <div className="text-sm text-muted-foreground">from {metric.before}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  <blockquote className="text-lg font-medium mb-6 italic">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>
                        {caseStudy.testimonial.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{caseStudy.testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {caseStudy.testimonial.author.role}, {caseStudy.testimonial.author.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Key Learnings */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Learnings</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {caseStudy.keyLearnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-yellow-600 text-sm font-semibold">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Next Steps */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{caseStudy.nextSteps.title}</h2>
              <p className="text-muted-foreground mb-6">{caseStudy.nextSteps.description}</p>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseStudy.nextSteps.future.map((step, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((related) => (
              <Card key={related.id} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{related.industry}</Badge>
                  <h3 className="font-semibold mb-2">{related.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{related.company}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/case-study/${related.id}`}>Read Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
              <p className="text-muted-foreground mb-6">
                See how SafariDesk can help your team scale efficiently and achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">Schedule Demo</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetails;
