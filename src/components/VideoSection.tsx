
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const VideoSection = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/hyperthoughtai', '_blank');
  };

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-xl overflow-hidden glass-card"
        >
          <video 
            controls
            width="100%" 
            height="100%" 
            className="w-full h-full object-cover"
          >
            <source src="/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleBookCall}
            className="btn-primary flex items-center gap-2"
          >
            <Calendar size={16} />
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
