
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as anime from 'animejs';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      title: "FinTech AI",
      description: "50% faster processing",
      details: "Automated financial analysis and risk assessment using advanced machine learning algorithms.",
      color: "#1EAEDB"
    },
    {
      title: "Healthcare ML",
      description: "99% accuracy boost",
      details: "Medical diagnosis assistance with computer vision and natural language processing.",
      color: "#9D50FF"
    },
    {
      title: "E-commerce AI",
      description: "3x conversion rate",
      details: "Personalized recommendation engine and dynamic pricing optimization.",
      color: "#33C3F0"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            // Header animation
            if (headerRef.current) {
              anime({
                targets: headerRef.current.children,
                translateY: [40, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(300),
                easing: 'easeOutExpo'
              });
            }

            // Cards animation with morphing effect
            if (cardsRef.current) {
              anime({
                targets: cardsRef.current.children,
                translateY: [60, 0],
                opacity: [0, 1],
                scale: [0.7, 1],
                rotateX: [30, 0],
                duration: 800,
                delay: anime.stagger(200, { start: 600 }),
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ opacity: 0 }}>
            Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ opacity: 0 }}>
            Real results from our AI implementations across different industries.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl group cursor-pointer relative overflow-hidden transition-transform duration-300"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1.08,
                  rotateY: 5,
                  duration: 400,
                  easing: 'easeOutQuad'
                });

                // Animate the title
                anime({
                  targets: e.currentTarget.querySelector('h3'),
                  scale: 1.1,
                  duration: 300,
                  easing: 'easeOutBack'
                });

                // Animate the description
                anime({
                  targets: e.currentTarget.querySelector('.description'),
                  translateX: [0, 10, 0],
                  duration: 600,
                  easing: 'easeInOutQuad'
                });
              }}
              onMouseLeave={(e) => {
                anime({
                  targets: e.currentTarget,
                  scale: 1,
                  rotateY: 0,
                  duration: 400,
                  easing: 'easeOutQuad'
                });

                anime({
                  targets: e.currentTarget.querySelector('h3'),
                  scale: 1,
                  duration: 300,
                  easing: 'easeOutBack'
                });
              }}
            >
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: study.color }}
              >
                {study.title}
              </h3>
              <div className="description text-3xl font-bold text-white mb-4">
                {study.description}
              </div>
              <p className="text-white/70">
                {study.details}
              </p>
              
              {/* Animated background glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-xl"
                style={{ background: `linear-gradient(45deg, ${study.color}20, transparent)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
