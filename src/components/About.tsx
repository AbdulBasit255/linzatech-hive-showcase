import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">LinzaTechHive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building tomorrow's technology solutions today
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            LinzaTechHive is a cutting-edge technology company dedicated to transforming businesses 
            through innovative digital solutions. With a team of expert developers, designers, and 
            strategists, we deliver excellence in every project we undertake.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our passion for technology and commitment to client success drives us to stay at the 
            forefront of industry trends, ensuring your business always has a competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-effect">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth and success in the digital age.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-effect">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in transformative technology solutions, recognized for innovation and excellence.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-effect">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovation, integrity, and client success are at the core of everything we do at LinzaTechHive.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
