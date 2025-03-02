
import { motion } from 'framer-motion';

interface BigHeadingProps {
  text: string;
}

const BigHeading = ({ text }: BigHeadingProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
        
        {/* Neural Network Animation Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWdzMG1zaGdxZTRna2U3Z3JjNnk3OWtvbWxnemtueno0ODJydHUwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif" 
            alt="Neural Network Background" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-white leading-tight"
        >
          <span className="text-gradient-blue-purple">{text}</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default BigHeading;
