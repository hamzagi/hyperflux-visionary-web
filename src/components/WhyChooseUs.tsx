import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart, 
  Users, 
  Lock,
  Shield,
  Code,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Zap className="h-10 w-10 p-2 text-neon-blue" />,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest advancements in AI to provide innovative solutions that keep you ahead of the competition."
  },
  {
    icon: <BarChart className="h-10 w-10 p-2 text-neon-purple" />,
    title: "Measurable Results",
    description: "Our AI solutions deliver quantifiable improvements to your business operations and bottom line."
  },
  {
    icon: <Users className="h-10 w-10 p-2 text-neon-teal" />,
    title: "Expert Team",
    description: "Our team of AI specialists brings decades of combined experience in machine learning and data science."
  },
  {
    icon: <Code className="h-10 w-10 p-2 text-neon-blue" />,
    title: "Custom Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is tailor-made for your specific business needs."
  },
  {
    icon: <Shield className="h-10 w-10 p-2 text-neon-purple" />,
    title: "Enterprise Security",
    description: "Your data security is paramount. We implement state-of-the-art security protocols at every level."
  },
  {
    icon: <Lock className="h-10 w-10 p-2 text-neon-teal" />,
    title: "Seamless Integration",
    description: "Our solutions integrate smoothly with your existing systems, minimizing disruption to your operations."
  }
];

const timeMetrics = [
  {
    metric: "78%",
    description: "Reduction in repetitive tasks"
  },
  {
    metric: "15x",
    description: "Faster data processing"
  },
  {
    metric: "60+",
    description: "Hours saved weekly per team"
  },
  {
    metric: "3.5x",
    description: "ROI within first year"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmRuamNnNjRzdmg3ZXpzcmUyeGc1dHl5eTV6cmFqcGRra21qNGIwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" 
            alt="Neural Network Background" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute top-1/4 left-1/3 w-full h-full opacity-30">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGxrYm52bWYwczY0dnhjbDVyc2Jyend2azVtbGxkYnEzZ3VrZmV2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylSajlbPRFxH8Y/giphy.gif" 
            alt="Neural Network Nodes" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
                Our Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Why Leading Companies <br />
                <span className="text-gradient-blue-purple">Choose Us</span>
              </h2>
              <p className="text-white/70 mb-8">
                At HYPER THOUGHT AI, we combine deep technical expertise with a profound understanding of business challenges to create AI solutions that deliver real value. Our approaches are innovative, our execution is flawless, and our support is unmatched.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-3">
                  <div className="text-2xl font-semibold text-white">98%</div>
                  <div className="text-white/60 text-sm">Client satisfaction</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-3">
                  <div className="text-2xl font-semibold text-white">50+</div>
                  <div className="text-white/60 text-sm">AI experts</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-5 py-3">
                  <div className="text-2xl font-semibold text-white">200+</div>
                  <div className="text-white/60 text-sm">Projects delivered</div>
                </div>
              </div>
              
              <Button className="btn-primary">
                Learn More About Our Approach
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/5 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-24 pt-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
              Business Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              <span className="text-gradient-blue-purple">Time is Money</span> - We Save You Both
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Our AI solutions don't just improve efficiency—they transform how your business operates. 
              By automating repetitive tasks and accelerating complex processes, we free your team to focus on 
              what truly matters: innovation, strategy, and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timeMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Clock className="h-10 w-10 text-neon-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-blue-purple mb-2">
                  {item.metric}
                </div>
                <p className="text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
