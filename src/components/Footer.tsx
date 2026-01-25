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
    <footer className="bg-foreground text-white/80 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgriVision</span>
            </a>
            <p className="text-white/60 text-sm max-w-xs mb-6">
              AI and IoT-driven precision agriculture for sustainable, 
              high-yield farming operations worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 AgriVision. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
