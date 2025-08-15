
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            // Icon pulse animation
            if (iconRef.current) {
              anime({
                targets: iconRef.current,
                scale: [0, 1.2, 1],
                rotate: [0, 360],
                duration: 1000,
                easing: 'easeOutBack'
              });

              // Continuous pulse for icon
              anime({
                targets: iconRef.current,
                scale: [1, 1.1, 1],
                duration: 2000,
                loop: true,
                easing: 'easeInOutQuad',
                delay: 1000
              });
            }

            // Title typing effect
            if (titleRef.current) {
              const titleText = titleRef.current.textContent || '';
              titleRef.current.textContent = '';
              
              anime({
                targets: titleRef.current,
                opacity: [0, 1],
                duration: 500,
                delay: 300,
                complete: () => {
                  let i = 0;
                  const typeInterval = setInterval(() => {
                    if (titleRef.current && i < titleText.length) {
                      titleRef.current.textContent += titleText[i];
                      i++;
                    } else {
                      clearInterval(typeInterval);
                      
                      // Glow effect after typing
                      anime({
                        targets: titleRef.current,
                        textShadow: [
                          '0 0 5px rgba(30, 174, 219, 0.5)',
                          '0 0 20px rgba(30, 174, 219, 0.8)',
                          '0 0 5px rgba(30, 174, 219, 0.5)'
                        ],
                        duration: 2000,
                        loop: true,
                        direction: 'alternate',
                        easing: 'easeInOutQuad'
                      });
                    }
                  }, 50);
                }
              });
            }

            // Buttons entrance with bounce
            if (buttonsRef.current) {
              anime({
                targets: buttonsRef.current.children,
                translateY: [50, 0],
                opacity: [0, 1],
                scale: [0.5, 1],
                duration: 600,
                delay: anime.stagger(200, { start: 1500 }),
                easing: 'easeOutBounce'
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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(20,_20,_40,_0.8)_0%,_transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <div 
            ref={iconRef}
            className="inline-flex items-center justify-center mb-6"
            style={{ opacity: 0 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center">
              <Zap size={20} className="text-primary sm:size-24" />
            </div>
          </div>
          
          <h2 
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight"
            style={{ opacity: 0 }}
          >
            Ready to Supercharge Your Business with Custom AI Solutions?
          </h2>
          
          <motion.p 
            className="text-white/70 text-sm md:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
            viewport={{ once: true }}
          >
            Schedule a consultation with our AI experts today and discover how we can help transform your business operations with cutting-edge artificial intelligence.
          </motion.p>
          
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              className="btn-primary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 relative overflow-hidden group w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/hyperthoughtai', '_blank')}
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1.05,
                  duration: 200,
                  easing: 'easeOutQuad'
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1,
                  duration: 200,
                  easing: 'easeOutQuad'
                });
              }}
              style={{ opacity: 0 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              Book Your Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <Button 
              className="btn-secondary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 relative overflow-hidden group w-full sm:w-auto"
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1.05,
                  duration: 200,
                  easing: 'easeOutQuad'
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1,
                  duration: 200,
                  easing: 'easeOutQuad'
                });
              }}
              style={{ opacity: 0 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
