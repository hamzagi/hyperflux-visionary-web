import { motion } from 'framer-motion';

const CaseStudies = () => {
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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results from our AI implementations across different industries.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl group cursor-pointer relative overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: study.color }}
              >
                {study.title}
              </h3>
              <div className="text-3xl font-bold text-white mb-4">
                {study.description}
              </div>
              <p className="text-white/70">
                {study.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;