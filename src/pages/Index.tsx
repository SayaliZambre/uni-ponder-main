import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, FileText, Globe, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document-Based Answers",
      description: "Get answers sourced exclusively from official study guides and verified documents",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced AI processes your questions and finds the most relevant information instantly",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Country-Specific Guidance",
      description: "Access tailored information for multiple countries including USA, UK, Canada, Australia",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat History",
      description: "Keep track of all your conversations and revisit answers anytime you need them",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Study Abroad Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Your Trusted Guide to Studying Abroad
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Get accurate, document-based answers about visa requirements, universities, costs, and everything you need to know about studying in your dream destination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/auth')}
              className="group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose StudyAI?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-medium transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center text-white shadow-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-hero text-white border-0 shadow-glow">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join thousands of students who trust StudyAI for accurate, reliable information about studying abroad.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Create Free Account
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
