import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { Scene3D } from './3d/Scene3D';
import { Button3D } from './3d/Button3D';
import { Interactive3DCard } from './3d/Interactive3DCard';

const Hero3D = () => {
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
      {/* 3D Background Scene */}
      <Scene3D showHeroCube={true} cameraPosition={[0, 0, 12]} />
      
      {/* Traditional 2D overlay content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start text-left max-w-2xl lg:mr-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-primary">
                <BrainCircuit size={14} className="mr-2" />
                Next-Gen AI Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight mb-6"
              style={{ perspective: '1000px' }}
            >
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Revolutionize
              </span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Your
              </span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Business
              </span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                with
              </span>{' '}
              <span className="relative inline-block text-primary hover:scale-110 transition-transform duration-300">
                AI-Powered
                <div className="absolute -inset-1 bg-primary opacity-20 blur-lg rounded-lg -z-10"></div>
              </span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Solutions
              </span>
            </motion.h1>
            
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-10 h-16 flex items-center"
            >
              {taglines[taglineIndex]}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                className="btn-primary text-base px-8 py-3 relative overflow-hidden group perspective-400"
                onClick={() => window.open('https://calendly.com/hyperthoughtai', '_blank')}
                style={{ 
                  transform: 'perspective(400px) rotateX(0deg)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(400px) rotateX(-5deg) translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(30, 174, 219, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(400px) rotateX(0deg) translateY(0px)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="relative z-10">Book Consultation</span>
                <ArrowRight size={18} className="ml-2 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                className="btn-secondary text-base px-8 py-3 relative overflow-hidden group perspective-400"
                style={{ 
                  transform: 'perspective(400px) rotateX(0deg)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(400px) rotateX(-5deg) translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(157, 80, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(400px) rotateX(0deg) translateY(0px)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="relative z-10">Explore Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-16"
            >
              <p className="text-white/60 text-sm mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="h-8 w-auto opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    style={{ 
                      transform: 'perspective(400px) rotateY(0deg)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'perspective(400px) rotateY(-10deg) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'perspective(400px) rotateY(0deg) scale(1)';
                    }}
                  >
                    <svg viewBox="0 0 100 30" className="h-full w-auto fill-current text-white">
                      <rect x="5" y="5" width="20" height="20" rx="5" />
                      <circle cx="70" cy="15" r="10" />
                    </svg>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right side - 3D Interactive area (invisible but takes space) */}
          <div className="hidden lg:block w-96 h-96 relative">
            {/* This space is used by the 3D scene */}
          </div>
        </div>
      </div>
      
      {/* Enhanced 3D scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        style={{ 
          transform: 'translateX(-50%) perspective(400px) rotateX(0deg)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) perspective(400px) rotateX(-15deg) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) perspective(400px) rotateX(0deg) scale(1)';
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center glass-morphism">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
        <span className="text-white/40 text-xs mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero3D;