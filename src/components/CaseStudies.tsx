
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: "Business Analyst Agent",
    client: "Enterprise Solutions Corp",
    description: "Created an AI agent that understands and generates BRD and SRS from meeting transcripts. Fine-tuned using the company's previous documentation for consistent output.",
    results: ["70% reduction in documentation time", "92% accuracy in requirement identification", "Improved stakeholder alignment by 45%"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Survey XML Generator",
    client: "Market Research Firm",
    description: "Developed an advanced artificial intelligence application that generates entire surveys XML code with just the questionnaire text as input.",
    results: ["90% reduction in survey creation time", "98% accuracy in XML generation", "Eliminated manual coding errors"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Custom Validation Code AI Agent",
    client: "Enterprise Survey Platform",
    description: "Created an AI agent that writes validation code for surveys using a company-specific custom programming language, ensuring data integrity.",
    results: ["75% faster validation implementation", "40% reduction in QA time", "100% compliance with company standards"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Data Analysis AI Agent",
    client: "Business Intelligence Provider",
    description: "Built an AI agent to analyze complex datasets, identify patterns, and generate actionable insights automatically.",
    results: ["3x faster data processing", "65% more accurate insights", "Identified 28% more revenue opportunities"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Computer Vision for Quality Control",
    client: "Automotive Parts Manufacturer",
    description: "Created a computer vision system that identifies defects with 99.7% accuracy, improving quality control efficiency by 65% while reducing human error.",
    results: ["99.7% defect detection accuracy", "65% improvement in efficiency", "Defect rate reduced by 85%"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Personalized Learning Algorithm",
    client: "EdTech Platform",
    description: "Built an adaptive learning system that personalizes educational content based on student performance, increasing course completion rates by 47%.",
    results: ["47% increase in course completions", "28% improvement in test scores", "User engagement up by 52%"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Cold Calling AI Agent",
    client: "SaaS Sales Company",
    description: "Developed an AI agent that automatically calls prospects based on website inquiries, qualifying leads and scheduling demos with sales representatives.",
    results: ["65% increase in qualified leads", "42% reduction in sales cycle", "3x more demos scheduled per day"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="case-studies">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 inline-block mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            How We've Helped Businesses Thrive with AI
          </h2>
          <p className="text-white/70">
            Discover how our custom AI solutions have transformed operations, increased efficiency, and driven growth for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: caseStudy.id * 0.1 }}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg italic mb-8">And many many more...</p>
        </div>

        <motion.div 
          className="mt-24 glass-card rounded-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
              Our AI Agents Are In Human, But Better
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h4 className="text-neon-blue font-medium text-lg mb-2">No Rest Required</h4>
                <p className="text-white/70">Our AI agents work 24/7/365 without breaks, vacations, or sick days. Always available when you need them.</p>
              </div>
              <div className="p-4">
                <h4 className="text-neon-blue font-medium text-lg mb-2">Consistent Excellence</h4>
                <p className="text-white/70">Unlike humans, our AI maintains peak performance all day, every day, delivering consistent quality without fatigue.</p>
              </div>
              <div className="p-4">
                <h4 className="text-neon-blue font-medium text-lg mb-2">Infinitely Scalable</h4>
                <p className="text-white/70">Handle one request or one million with the same efficiency. Scale instantly as your business grows.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  caseStudy: {
    id: number;
    title: string;
    client: string;
    description: string;
    results: string[];
    image: string;
  };
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden h-full transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-white mb-2">
          {caseStudy.title}
        </h3>
        <p className="text-neon-blue text-sm mb-3">
          {caseStudy.client}
        </p>
        <p className="text-white/70 text-sm mb-4">
          {caseStudy.description}
        </p>
        
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-white text-sm font-medium mb-2">Key Results:</h4>
          <ul className="space-y-2">
            {caseStudy.results.map((result, index) => (
              <li key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-2"></div>
                <span className="text-white/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
