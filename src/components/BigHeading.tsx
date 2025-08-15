
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
const anime = require('animejs');

interface BigHeadingProps {
  text: string;
}

const BigHeading = ({ text }: BigHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  // Split text into individual characters for letter animation
  const characters = Array.from(text);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && headingRef.current) {
            // Wave animation for characters
            anime({
              targets: charsRef.current,
              translateY: [30, 0],
              opacity: [0, 1],
              scale: [0.3, 1],
              duration: 600,
              delay: anime.stagger(40),
              easing: 'easeOutBack'
            });

            // Background glow animation
            anime({
              targets: headingRef.current,
              textShadow: [
                '0 0 0px rgba(30, 174, 219, 0)',
                '0 0 20px rgba(30, 174, 219, 0.8)',
                '0 0 40px rgba(157, 80, 255, 0.6)',
                '0 0 20px rgba(30, 174, 219, 0.8)'
              ],
              duration: 2000,
              delay: 800,
              easing: 'easeInOutQuad'
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-white leading-tight perspective-[800px] px-4 md:px-0"
          style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
        >
          <span className="text-gradient-blue-purple inline-block">
            {characters.map((char, index) => (
              <span
                key={`${char}-${index}`}
                ref={(el) => { if (el) charsRef.current[index] = el; }}
                className="inline-block transform cursor-pointer"
                style={{ 
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  anime({
                    targets: e.currentTarget,
                    scale: 1.2,
                    rotateY: 15,
                    duration: 300,
                    easing: 'easeOutBack'
                  });
                }}
                onMouseLeave={(e) => {
                  anime({
                    targets: e.currentTarget,
                    scale: 1,
                    rotateY: 0,
                    duration: 300,
                    easing: 'easeOutBack'
                  });
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h2>
      </div>
    </section>
  );
};

export default BigHeading;
