
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const CallToAction = () => {
  const btnHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const zapVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted">
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-6"
            initial="initial"
            animate="animate"
            variants={zapVariants}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center">
              <Zap size={20} className="text-primary sm:size-24" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ 
                textShadow: "0 0 0px rgba(30, 174, 219, 0)" 
              }}
              animate={{
                textShadow: [
                  "0 0 5px rgba(30, 174, 219, 0.5)",
                  "0 0 20px rgba(30, 174, 219, 0.8)",
                  "0 0 5px rgba(30, 174, 219, 0.5)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Ready to Supercharge Your Business 
            </motion.span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            with Custom AI Solutions?
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-sm md:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Schedule a consultation with our AI experts today and discover how we can help transform your business operations with cutting-edge artificial intelligence.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              variants={btnHoverVariants}
              initial="initial"
              whileHover="hover"
              className="w-full sm:w-auto"
            >
              <Button 
                className="btn-primary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 relative overflow-hidden group w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/hyperthoughtai', '_blank')}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1 }}
                ></motion.span>
                Book Your Free Consultation
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              variants={btnHoverVariants}
              initial="initial"
              whileHover="hover"
              className="w-full sm:w-auto"
            >
              <Button className="btn-secondary text-sm md:text-base px-6 md:px-8 py-2 md:py-3 relative overflow-hidden group w-full sm:w-auto">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1 }}
                ></motion.span>
                Learn More About Our Process
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
