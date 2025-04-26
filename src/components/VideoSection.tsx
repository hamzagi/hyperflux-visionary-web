
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VideoSection = () => {
  const handleExploreClick = () => {
    // TODO: Add navigation or link to AI Knowledge Hub
    window.open('/ai-knowledge-hub', '_blank');
  };

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto aspect-video bg-black/20 rounded-xl overflow-hidden glass-card mb-6"
        >
          {/* Video placeholder - Add your video element here */}
          <div className="w-full h-full flex items-center justify-center text-white/60">
            Video Content Here
          </div>
        </motion.div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleExploreClick}
            className="px-6 py-3 text-base group"
          >
            Explore AI Knowledge Hub
            <ArrowRight 
              className="ml-2 transition-transform group-hover:translate-x-1" 
              size={20} 
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
