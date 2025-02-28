
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    "Get a day's work done before your coffee cools.",
    "Your AI-powered future starts now.",
    "Custom AI solutions for real-world problems."
  ];
  
  // Switch taglines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float animate-delay-300"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100" stroke="rgba(79, 172, 254, 0.2)" strokeWidth="0.1" />
          <path d="M100,0 L0,100" stroke="rgba(157, 80, 255, 0.2)" strokeWidth="0.1" />
          <path d="M50,0 L50,100" stroke="rgba(79, 172, 254, 0.2)" strokeWidth="0.1" />
          <path d="M0,50 L100,50" stroke="rgba(157, 80, 255, 0.2)" strokeWidth="0.1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-neon-blue">
              <BrainCircuit size={14} className="mr-2" />
              Next-Gen AI Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight mb-6"
          >
            Revolutionize Your Business with{' '}
            <span className="relative inline-block">
              <span className="text-gradient-blue-purple">AI-Powered</span>
              <div className="absolute -inset-1 bg-blue-purple-gradient opacity-20 blur-lg rounded-lg -z-10"></div>
            </span>{' '}
            Solutions
          </motion.h1>
          
          <motion.div
            key={taglineIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-10 h-16 flex items-center justify-center"
          >
            {taglines[taglineIndex]}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="btn-primary text-base px-8 py-6">
              Book Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button className="btn-outline text-base px-8 py-6">
              Explore Solutions
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 md:mt-20"
          >
            <p className="text-white/60 text-sm mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 100 30" className="h-full w-auto fill-current text-white">
                  <rect x="5" y="5" width="20" height="20" rx="5" />
                  <circle cx="70" cy="15" r="10" />
                </svg>
              </div>
              <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 100 30" className="h-full w-auto fill-current text-white">
                  <polygon points="15,5 30,25 0,25" />
                  <rect x="50" y="5" width="40" height="20" rx="10" />
                </svg>
              </div>
              <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 100 30" className="h-full w-auto fill-current text-white">
                  <circle cx="15" cy="15" r="10" />
                  <rect x="35" y="5" width="20" height="20" />
                  <circle cx="75" cy="15" r="10" />
                </svg>
              </div>
              <div className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 100 30" className="h-full w-auto fill-current text-white">
                  <rect x="5" y="5" width="40" height="20" rx="10" />
                  <circle cx="75" cy="15" r="10" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
        <span className="text-white/40 text-xs mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
