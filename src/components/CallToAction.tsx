
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(20,_20,_40,_0.8)_0%,_transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
              <Zap size={24} className="text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Ready to Supercharge Your Business with Custom AI Solutions?
          </h2>
          
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts today and discover how we can help transform your business operations with cutting-edge artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="btn-primary text-base px-8 py-3"
              onClick={() => window.open('https://calendly.com/hyperthoughtai', '_blank')}
            >
              Book Your Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button className="btn-secondary text-base px-8 py-3">
              Learn More About Our Process
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
