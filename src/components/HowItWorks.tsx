
import { motion } from 'framer-motion';
import { ChevronRight, Search, Lightbulb, Code, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8 text-neon-blue" />,
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your business challenges and goals.",
    color: "border-neon-blue"
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-neon-purple" />,
    title: "Problem Discovery",
    description: "Our experts analyze your requirements to identify the perfect AI approach for your specific needs.",
    color: "border-neon-purple"
  },
  {
    icon: <Code className="h-8 w-8 text-neon-teal" />,
    title: "AI Solution Development",
    description: "We develop custom AI solutions tailored to your business requirements using cutting-edge technologies.",
    color: "border-neon-teal"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-neon-blue" />,
    title: "Implementation",
    description: "Seamless deployment with comprehensive training and ongoing support to ensure maximum ROI.",
    color: "border-neon-blue"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            How We Transform Your Business with AI
          </h2>
          <p className="text-white/70">
            Our streamlined four-step process ensures we deliver innovative, effective AI solutions that address your unique business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative glass-card rounded-xl p-6 group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color} opacity-50 group-hover:opacity-100 transition-opacity rounded-t-xl`}></div>
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-radial from-white/10 to-transparent opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-opacity"></div>
                {step.icon}
              </div>
              <div className="flex items-start mb-4">
                <div className="bg-white/10 text-white/70 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium text-white ml-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-6 w-6 text-white/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
