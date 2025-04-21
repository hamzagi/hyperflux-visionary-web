
import { motion } from "framer-motion";
import { Users, MessageCircle, Clock, Calendar } from "lucide-react";

const features = [
  {
    Icon: Users,
    title: "Expert Team",
    description: "Work with passionate problem-solvers and AI specialists who speak your business language.",
  },
  {
    Icon: MessageCircle,
    title: "Personalized Solutions",
    description: "Every automation is tailored to your unique workflows, not one-size-fits-all bots.",
  },
  {
    Icon: Clock,
    title: "Rapid Results",
    description: "Enjoy quick project turnarounds and measurable value from day one.",
  },
  {
    Icon: Calendar,
    title: "Consultation",
    description: "Get strategy sessions and ongoing consultation to maximize your AI investment.",
  },
];

const WhyChooseUs = () => (
  <section className="relative z-20 bg-background/70 py-16 overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-white text-center mb-12"
      >
        Why Choose <span className="text-primary">HyperThought</span>?
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
          >
            <span className="flex items-center justify-center bg-primary/20 text-primary rounded-full w-14 h-14 mb-4">
              <Icon size={28} />
            </span>
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
            <p className="text-white/80">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
