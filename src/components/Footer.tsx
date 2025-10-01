import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">Linza</span>
              <span className="text-gradient">TechHive</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses with innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-smooth border border-border hover:border-primary"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-smooth border border-border hover:border-primary"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-smooth border border-border hover:border-primary"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Mobile Apps</li>
              <li className="text-muted-foreground">Cloud Solutions</li>
              <li className="text-muted-foreground">Cybersecurity</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} LinzaTechHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
