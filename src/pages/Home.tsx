import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useInView,motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import React ,{ useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const companyLogos = [
  {
    name: "Webflow",
    logo: "https://i.pinimg.com/1200x/a8/85/26/a885267a0e9f0cc602aafb85069fe763.jpg",
  },
  {
    name: "Dropbox",
    logo: "https://cdn.worldvectorlogo.com/logos/dropbox-3.svg",
  },
  {
    name: "Notion",
    logo: "https://i.pinimg.com/1200x/7e/29/aa/7e29aa431b6dd2f3c1502b85d3ddc28e.jpg",
  },
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg",
  },
];

const faqs: FAQ[] = [
    {
      question: "Why SafariDesk?",
      answer:
        "Because every business deserves powerful, professional support tools without the painful price tag. SafariDesk is built for teams who want transparency, control, and flexibility, offering open-source and SaaS versions.",
    },
    {
      question: "Who’s behind SafariDesk?",
      answer:
        "We’re a small, focused team that believes in practical software, community-driven growth, and giving businesses real choices. You’re not buying from a giant—you’re partnering with a team that listens and moves fast.",
    },
    {
      question: "How does your pricing compare to other Helpdesk Solutions?",
      answer:
        "We’re up to 70% more affordable while offering transparent, flat-rate pricing with no surprise fees. You get all the core helpdesk features plus open-source flexibility, without the enterprise bloat or pricing traps.",
    },
    {
      question: "What makes SafariDesk different from any other Help Desk solution?",
      answer: `• We’re flat-priced, not per-seat gouging.
• We’re open source at heart, giving you control.
• We’re more affordable for all teams.
• And we don’t believe in “enterprise features” as paywalls, you get power without the pain.`,
    },
    {
      question: "Do you offer a free trial for the SaaS platform?",
      answer:
        "Yes! Every new SaaS signup gets a 14-day free trial with full access to all features in your selected plan. No credit card is required to get started.",
    },
    {
      question: "Is the Open Source version limited or “crippled”?",
      answer:
        "No way. We don’t believe in bait-and-switch open source. The self-hosted version is fully capable. We monetize via support licences and hosted convenience, not by locking down essential features.",
    },
    {
      question: "Is support included with the Open Source version?",
      answer:
        "The Community plan is free and comes with access to our documentation and community forums. For email/chat/phone support and SLAs, we offer annual support licenses starting at just $499/year.",
    },
    {
      question: "Do I have to pay extra for integrations and API access?",
      answer:
        "Not at all. Our Growth plan and above include full API access and standard integrations (e.g., Slack, Zapier, email, etc.). Custom integrations can be added via our Enterprise Add-on packages.",
    },
    {
      question: "What payment options do you support?",
      answer:
        "We accept all major credit cards for monthly and annual billing. For enterprise customers, we also offer invoicing and ACH transfers.",
    },
    {
      question: "Can I cancel or change my plan at any time?",
      answer:
        "Yes. You can upgrade or downgrade your plan at any time. If you’re on an annual plan, we’ll prorate changes fairly. Cancel anytime, no contracts or long-term commitments required.",
    },
  ];

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4  text-center bg-gradient-to-b from-background to-muted/20"
      style={{ marginTop: "80px" }} >
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 animate-fade-in-up">
            Get Started with  <span className="text-green-600 font-bold">  SafariDesk</span>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            Your complete customer support helpdesk solution
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Streamline your workflow, manage projects, and empower your team with  
            <span className="text-green-600 font-bold border-b-2 border-green-500 pb-1"> SafariDesk</span> the all-in-one task management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Button size="lg" asChild>
              <Link to="/signup">Start free</Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
          <div>
              <h4 className="mt-10 font-roboto font-bold text-purple-900">Let us walk you through.</h4>
            </div>
          <div className="mt-12 flex justify-center animate-fade-in-up delay-400">
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dir0qfbpu&public_id=intro-video_ny0gzx&profile=cld-default"
              width="640"
              height="360" 
              style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us unique */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div>
            <h4 className="text-center text-orange-400 text-2xl font-bold mb-4 font-pacifico">Why Choose Us!</h4>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 animate-bounce-in">What makes SafariDesk unique</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card className="p-6 animate-fade-in-up delay-100">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Team collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time collaboration features to keep your team in sync and productive.
                </p>
                <img src="https://i.pinimg.com/1200x/6c/24/f4/6c24f4c7a181d856854a05da1fddefd0.jpg" alt="team colab" />
              </CardContent>
            </Card>
            
            <Card className="p-6 animate-fade-in-up delay-300">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Seamless integrations</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with your favorite tools and streamline your workflow effortlessly.
                </p>
                <img src="https://i.pinimg.com/736x/b7/87/2b/b7872bc1dd099010e6f385aac74a822c.jpg" alt="integrations" />
              </CardContent>
            </Card>
          </div>
          <Card className="w-full flex flex-col md:flex-row items-center md:items-stretch p-6 animate-fade-in-up delay-300">
            <CardContent className="w-full md:w-1/2 flex flex-col justify-center md:pr-6">
              <h3 className="font-semibold mb-2 text-xl">SLA Management</h3>
              <p className="text-muted-foreground text-sm">
                Set and monitor service level agreements with automated escalations,
                compliance tracking and performance metrics to ensure timely resolutions.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Define and customize SLA rules based on priority levels</li>
                <li>Track compliance metrics and response times in real-time</li>
                <li>Get automated escalations for overdue tasks</li>
                <li>Analyze performance with detailed SLA reports</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </CardContent>
            <div className="w-full md:w-1/2">
              <img
                src="https://i.pinimg.com/1200x/a5/02/ee/a502ee949d7cf4d2efaae84189e38232.jpg"
                alt="integrations"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Card>

          <div>
            <StatsSection/>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div>
            <h4 className="text-center text-orange-400 text-2xl font-bold mb-4 font-pacifico">Features !</h4>
          </div>
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold mb-4">Powerful Features To boost your work flow!</h2>
            <p className="text-muted-foreground">These include asset management, customer portal task management, CSAT surveys, role-based access, status page, third party intergrations, SSO, multi lingual suport and many more</p>
          </div>
          <div className="bg-cream-100 py-10">
          <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-purple-100 animate-bounce-in">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Smart Ticketing System</h3>
                <p>Centralize all customer communications from multiple channels into organized, trackable tickets with intelligent routing and prioritization.</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Automatic ticket creation from email, chat, phone, social media.</li>
                  <li>Smart routing based on content, priority, and agent expertise.</li>
                  <li>Custom ticket fields and forms for different departments.</li>
                  <li>Ticket merging and splitting for complex issues.</li>
                </ul>
                <Button size="sm" className="mt-4"><Link to='/features'>Learn more</Link></Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-yellow-100 animate-bounce-in delay-100">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">SLA Mnanagement</h3>
                <p>
                  Set and monitor service level agreements with automated escalations, compliance tracking, and performance metrics to ensure timely resolutions.</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Multi-tier SLA policies for different customer segments.</li>
                  <li>Automated SLA breach notifications and escalations.</li>
                  <li>Business hours and holiday calendar integration.</li>
                  <li>SLA pause during customer response periods.</li>
                </ul>
                <Button size="sm" className="mt-4"><Link to='/features'>Learn more</Link></Button>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-green-100 animate-bounce-in delay-200">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Knowledge Management</h3>
                <p>
                  Build comprehensive knowledge bases with AI-powered article suggestions, self-service portals, and searchable documentation for faster resolutions.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Rich text editor with multimedia support.</li>
                  <li>AI-powered article recommendations.</li>
                  <li>Customer self-service portal.</li>
                  <li>Article approval workflows.</li>
                </ul>
                <Button size="sm" className="mt-4"><Link to='/features'>Learn more</Link></Button>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Complete view of your team's progress */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div>
            <h4 className="text-center text-orange-400 text-2xl font-bold mb-4 font-pacifico">Analytics !</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-green-50 rounded-lg p-8">
            
            {/* Left Side - Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Advanced analytics tools to keep you in control & customizable
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Go beyond raw numbers with a fully customizable analytics dashboard 
                that puts you in control. Effortlessly track agent performance, ticket trends 
                and customer satisfaction to drive impactful improvements and tell support success stories.
              </p>
            </div>
            
            {/* Right Side - Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="https://res-console.cloudinary.com/dir0qfbpu/thumbnails/v1/image/upload/v1754487834/YW5hbHl0aWNkYXNoX29nbmZkaA==/drilldown"
                alt="Analytics Dashboard"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>


      {/* What our users say */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
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

          <div className="flex justify-center items-center space-x-12">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-20 h-20 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SafariDesk Integrations */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <div>
            <h4 className="text-center text-orange-400 text-2xl font-bold mb-4 font-pacifico">Intergratios !</h4>
          </div>
          <h2 className="text-3xl font-bold mb-4">SafariDesk Integrations</h2>
          <p className="text-muted-foreground mb-8">Connect to Your Favorite Tools</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
            Seamlessly integrate SafariDesk with the tools your team already uses. 
            From communication platforms to file storage solutions, we've got you covered.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12 animate-bounce">
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
      <div className="container mx-auto max-w-2xl">
        <div>
            <h4 className="text-center text-orange-400 text-2xl font-bold mb-4 font-pacifico">FAQs !</h4>
          </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">
            Get quick answers to the most common questions about SafariDesk
          </p>
        </div>

        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-gray-700">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                </span>
                <span className="text-xl font-bold text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {!showAll && faqs.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-yellow-200 rounded-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="bg-white text-black px-4 py-1">
              Get Started
            </Badge>
            <h2 className="text-4xl font-bold leading-tight">
              Supercharge your team's productivity today!
            </h2>
            <p className="text-gray-700 text-lg max-w-md">
              SafariDesk is the ultimate task management solution designed for
              startups and fast-growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900" >
              <Link to="/signup">Book a demo</Link>
                
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white" >
                <Link to="/signup">Start free trial</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col gap-4 items-end"
          >
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-md p-4 w-60">
              <p className="text-sm text-gray-500">Task Prioritization</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">84.89%</p>
              <div className="flex items-center mt-3">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                />
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-md p-4 w-72">
              <h4 className="font-semibold text-gray-800 mb-2">Team Members</h4>
              <div className="flex justify-between">
                <p className="text-gray-600">15 Tasks</p>
                <p className="text-gray-800 font-bold">84%</p>
              </div>
            </div>

            {/* Floating Label */}
            <motion.span
              className="absolute -top-4 -right-10 bg-black text-white px-4 py-1 rounded-full text-xs"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Task Prioritization →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default Home;

