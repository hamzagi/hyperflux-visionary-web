import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Business Analyst Agent",
    client: "Enterprise Solutions Corp",
    description: "Created an AI agent that understands and generates BRD and SRS from meeting transcripts. Fine-tuned using the company's previous documentation for consistent output.",
    results: ["70% reduction in documentation time", "92% accuracy in requirement identification", "Improved stakeholder alignment by 45%"],
    category: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Survey XML Generator",
    client: "Market Research Firm",
    description: "Developed an advanced artificial intelligence application that generates entire surveys XML code with just the questionnaire text as input.",
    results: ["90% reduction in survey creation time", "98% accuracy in XML generation", "Eliminated manual coding errors"],
    category: "Research",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Custom Validation Code AI Agent",
    client: "Enterprise Survey Platform",
    description: "Created an AI agent that writes validation code for surveys using a company-specific custom programming language, ensuring data integrity.",
    results: ["75% faster validation implementation", "40% reduction in QA time", "100% compliance with company standards"],
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Data Analysis AI Agent",
    client: "Business Intelligence Provider",
    description: "Built an AI agent to analyze complex datasets, identify patterns, and generate actionable insights automatically.",
    results: ["3x faster data processing", "65% more accurate insights", "Identified 28% more revenue opportunities"],
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    client: "Manufacturing Industry Leader",
    description: "Developed a machine learning system that predicts equipment failures before they occur, reducing downtime by 45% and maintenance costs by 30%.",
    results: ["45% reduction in downtime", "30% decrease in maintenance costs", "ROI achieved in 6 months"],
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Computer Vision for Quality Control",
    client: "Automotive Parts Manufacturer",
    description: "Created a computer vision system that identifies defects with 99.7% accuracy, improving quality control efficiency by 65% while reducing human error.",
    results: ["99.7% defect detection accuracy", "65% improvement in efficiency", "Defect rate reduced by 85%"],
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Personalized Learning Algorithm",
    client: "EdTech Platform",
    description: "Built an adaptive learning system that personalizes educational content based on student performance, increasing course completion rates by 47%.",
    results: ["47% increase in course completions", "28% improvement in test scores", "User engagement up by 52%"],
    category: "Education",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (currentIndex < caseStudies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToCard(currentIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToCard(currentIndex - 1);
    }
  };
  
  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

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
        
        <div className="relative">
          <div className="hidden md:flex absolute -left-5 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              className="rounded-full h-12 w-12 p-0 bg-white/5 border border-white/10 backdrop-blur-sm text-white hover:bg-white/10"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory space-x-6 hide-scrollbar pb-8"
          >
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className="min-w-[300px] max-w-[300px] snap-center"
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
          
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.slice(currentIndex, currentIndex + 2).map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
          
          <div className="hidden md:flex absolute -right-5 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              className="rounded-full h-12 w-12 p-0 bg-white/5 border border-white/10 backdrop-blur-sm text-white hover:bg-white/10"
              onClick={nextSlide}
              disabled={currentIndex >= caseStudies.length - 2}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <div className="md:hidden flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-neon-blue' : 'bg-white/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-outline">
            View More Case Studies
          </Button>
        </div>
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
    category: string;
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
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white">
            {caseStudy.category}
          </span>
        </div>
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
        
        <div className="bg-white/5 rounded-lg p-4 mb-4">
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
        
        <Button variant="outline" className="w-full">
          Read Full Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudies;
