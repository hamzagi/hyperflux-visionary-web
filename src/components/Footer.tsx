
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 bg-black/50 backdrop-blur-sm mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-neon-blue rounded-full opacity-70 blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">H</div>
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                HYPER<span className="text-neon-blue">THOUGHT</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm">
              Custom AI solutions for real-world problems. We transform businesses with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter size={16} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={16} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Github size={16} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-2">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Generative AI
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center">
                  <ChevronRight size={14} className="mr-1" />
                  AI Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-neon-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Innovation Street, Tech City, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-neon-blue mr-3 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  +91 9768408413
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-neon-blue mr-3 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  hamza.girach@hyperthoughtai.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} HYPER THOUGHT AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
