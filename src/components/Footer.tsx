import { Leaf, Twitter, Linkedin, Youtube, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API Docs", "Changelog"],
    Solutions: ["Small Farms", "Enterprise", "Greenhouses", "Vineyards", "Orchards"],
    Resources: ["Blog", "Case Studies", "Webinars", "Help Center", "Community"],
    Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white/80 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgriVision</span>
            </a>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              AI and IoT-driven precision agriculture for sustainable, 
              high-yield farming operations worldwide.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span className="text-sm">+1 217-979-5689</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span className="text-sm">info.shubhjain@illinois.edu</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span className="text-sm">Urbana-Champaign, IL</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/infoshubhjain/cozad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links - Simplified */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a></li>
                <li><a href="#technology" className="text-sm text-white/60 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#benefits" className="text-sm text-white/60 hover:text-white transition-colors">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Flat */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 AgriVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
