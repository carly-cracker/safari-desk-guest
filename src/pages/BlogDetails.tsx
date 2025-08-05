import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();

  // Mock blog post data - this would come from a CMS or API in a real app
  const blogPost = {
    id: 1,
    title: "10 Project Management Tips for Remote Teams",
    content: `
      <p>Managing remote teams presents unique challenges that require different approaches compared to traditional in-office management. In this comprehensive guide, we'll explore proven strategies that successful remote teams use to stay productive, connected, and aligned.</p>
      
      <h2>1. Establish Clear Communication Protocols</h2>
      <p>Clear communication is the foundation of successful remote team management. Establish when and how team members should communicate for different types of interactions.</p>
      
      <h3>Best Practices:</h3>
      <ul>
        <li>Use async communication for non-urgent matters</li>
        <li>Reserve video calls for important discussions and brainstorming</li>
        <li>Set clear response time expectations</li>
        <li>Create dedicated channels for different types of communication</li>
      </ul>
      
      <h2>2. Implement Regular Check-ins</h2>
      <p>Regular check-ins help maintain team cohesion and ensure everyone stays aligned with project goals. These don't have to be lengthy meetings, but they should be consistent.</p>
      
      <h2>3. Use the Right Tools</h2>
      <p>Having the right project management tools can make or break your remote team's success. Look for platforms that offer:</p>
      <ul>
        <li>Real-time collaboration features</li>
        <li>Clear task assignment and tracking</li>
        <li>Integration with other tools your team uses</li>
        <li>Mobile accessibility for on-the-go updates</li>
      </ul>
      
      <p>SafariDesk provides all these features and more, making it the perfect solution for remote teams looking to enhance their productivity and collaboration.</p>
      
      <h2>4. Set Clear Expectations and Deadlines</h2>
      <p>Remote work requires more explicit communication about expectations. Be clear about:</p>
      <ul>
        <li>Project deliverables and quality standards</li>
        <li>Deadlines and milestones</li>
        <li>Working hours and availability</li>
        <li>Response times for different types of communication</li>
      </ul>
      
      <h2>5. Foster Team Culture</h2>
      <p>Building team culture remotely requires intentional effort. Create opportunities for informal interactions and team bonding.</p>
    `,
    author: {
      name: "Sarah Johnson",
      role: "Senior Project Manager",
      bio: "Sarah has over 8 years of experience managing remote teams and has helped hundreds of companies optimize their project management processes.",
      avatar: "/api/placeholder/60/60"
    },
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Project Management",
    tags: ["Remote Work", "Team Management", "Productivity", "Communication"],
    image: "/api/placeholder/800/400",
    likes: 142,
    shares: 28
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: "The Future of Team Collaboration Tools",
      excerpt: "Explore the latest trends in team collaboration technology.",
      category: "Technology",
      readTime: "8 min read",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Boosting Productivity with Task Automation",
      excerpt: "Discover how to automate repetitive tasks and free up time.",
      category: "Productivity",
      readTime: "6 min read",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Building Better Team Communication",
      excerpt: "Essential strategies for improving team communication.",
      category: "Team Management",
      readTime: "7 min read",
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
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{blogPost.title}</h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-2" />
                {blogPost.likes} likes
              </div>
            </div>

            {/* Share Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-64 md:h-96 bg-muted rounded-lg mb-12"></div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>{blogPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{blogPost.author.name}</h3>
                  <p className="text-primary mb-2">{blogPost.author.role}</p>
                  <p className="text-sm text-muted-foreground">{blogPost.author.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <Link to={`/blog/${post.id}`} className="text-primary hover:text-primary/80">
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Don't miss our latest insights</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest project management tips and resources delivered to your inbox.
              </p>
              <Button size="lg">Subscribe to Newsletter</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetails;
