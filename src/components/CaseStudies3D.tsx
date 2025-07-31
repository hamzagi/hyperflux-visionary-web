import { motion } from 'framer-motion';
import { Scene3D } from './3d/Scene3D';
import { Interactive3DCard } from './3d/Interactive3DCard';

const CaseStudies3D = () => {
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full">
        <Scene3D cameraPosition={[0, 0, 8]}>
          {caseStudies.map((study, index) => (
            <Interactive3DCard
              key={index}
              title={study.title}
              description={study.description}
              position={[(index - 1) * 4, 0, -2]}
              color={study.color}
              onHover={() => console.log(`Hovered: ${study.title}`)}
              onClick={() => console.log(`Clicked: ${study.title}`)}
            />
          ))}
        </Scene3D>
      </div>
      
      {/* 2D Overlay Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories in{' '}
            <span className="text-gradient-blue-purple">3D</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our interactive case studies. Hover and click on the 3D cards above to see detailed results.
          </p>
        </motion.div>
        
        {/* Traditional cards for fallback/mobile */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl group cursor-pointer relative overflow-hidden"
              style={{ 
                transform: 'perspective(800px) rotateY(0deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(-5deg) translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${study.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) translateY(0px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 
                className="text-2xl font-bold mb-4 relative z-10"
                style={{ color: study.color }}
              >
                {study.title}
              </h3>
              <div className="text-3xl font-bold text-white mb-4 relative z-10">
                {study.description}
              </div>
              <p className="text-white/70 relative z-10">
                {study.details}
              </p>
              
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(45deg, ${study.color}, transparent)`,
                  borderRadius: '0 0 0 50px'
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies3D;