
import { motion } from 'framer-motion';

interface BigHeadingProps {
  text: string;
}

const BigHeading = ({ text }: BigHeadingProps) => {
  // Split text into individual characters for letter animation
  const characters = Array.from(text);
  
  // Character animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-white leading-tight perspective-[800px]"
        >
          <motion.span 
            className="text-gradient-blue-purple inline-block"
            initial={{ rotateX: 90 }}
            whileInView={{ rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 
            }}
            viewport={{ once: true }}
          >
            {characters.map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block transform hover:scale-110 hover:text-neon-purple transition-all duration-300"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};

export default BigHeading;
