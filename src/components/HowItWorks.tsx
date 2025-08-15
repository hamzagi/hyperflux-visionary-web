
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Lightbulb, Code, CheckCircle } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';

const steps = [
  {
    icon: <Search className="h-6 w-6 sm:h-8 sm:w-8 text-neon-blue" />,
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your business challenges and goals.",
    color: "border-neon-blue"
  },
  {
    icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-neon-purple" />,
    title: "Problem Discovery",
    description: "Our experts analyze your requirements to identify the perfect AI approach for your specific needs.",
    color: "border-neon-purple"
  },
  {
    icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-neon-teal" />,
    title: "AI Solution Development",
    description: "We develop custom AI solutions tailored to your business requirements using cutting-edge technologies.",
    color: "border-neon-teal"
  },
  {
    icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-neon-blue" />,
    title: "Implementation",
    description: "Seamless deployment with comprehensive training and ongoing support to ensure maximum ROI.",
    color: "border-neon-blue"
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            // Header animation
            if (headerRef.current) {
              anime({
                targets: headerRef.current.children,
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(200),
                easing: 'easeOutExpo'
              });
            }

            // Steps animation
            if (stepsRef.current) {
              anime({
                targets: stepsRef.current.children,
                translateY: [50, 0],
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                delay: anime.stagger(150, { start: 400 }),
                easing: 'easeOutBack'
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4" style={{ opacity: 0 }}>
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4" style={{ opacity: 0 }}>
            How We Transform Your Business with AI
          </h2>
          <p className="text-white/70 text-sm md:text-base" style={{ opacity: 0 }}>
            Our streamlined four-step process ensures we deliver innovative, effective AI solutions that address your unique business challenges.
          </p>
        </div>
        
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative glass-card rounded-xl p-4 sm:p-6 group cursor-pointer"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1.05,
                  duration: 300,
                  easing: 'easeOutQuad'
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1,
                  duration: 300,
                  easing: 'easeOutQuad'
                });
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color} opacity-50 group-hover:opacity-100 transition-opacity rounded-t-xl`}></div>
              <div className="mb-4 sm:mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-opacity"></div>
                {step.icon}
              </div>
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="bg-white/10 text-white/70 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-xs font-medium">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white ml-2 sm:ml-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-6 w-6 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
