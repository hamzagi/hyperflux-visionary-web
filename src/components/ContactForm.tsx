
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Send, 
  Calendar, 
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you shortly.",
        duration: 5000,
      });
      
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-white/70">
            Contact us today to schedule a consultation and discover how our custom AI solutions can address your unique challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm text-white/80">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-white/80">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="company" className="block text-sm text-white/80">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formState.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm text-white/80">
                  Tell Us About Your Project
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your challenges and goals..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="btn-primary flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
                <Button 
                  type="button" 
                  className="btn-outline flex-1"
                  onClick={() => window.open('https://calendly.com/hyperthoughtai', '_blank')}
                >
                  <Calendar size={16} className="mr-2" />
                  Book Consultation
                </Button>
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-medium text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Office Location</h4>
                    <p className="text-white/70 text-sm">123 Innovation Street, Tech City, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail size={18} className="text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Email Address</h4>
                    <a href="mailto:contact@hyperthoughtai.com" className="text-white/70 text-sm hover:text-neon-blue transition-colors">
                      contact@hyperthoughtai.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">Phone Number</h4>
                    <a href="tel:+15551234567" className="text-white/70 text-sm hover:text-neon-purple transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
