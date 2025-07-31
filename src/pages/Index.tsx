import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import BlogSection from '@/components/BlogSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import BigHeading from '@/components/BigHeading';
import VideoSection from '@/components/VideoSection';
import CaseStudies from '@/components/CaseStudies';

const HomePage = () => {
  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full"
    >
      <div className="overflow-hidden w-full">
        <Navbar />
        <main className="w-full">
          <HeroSection />
          <VideoSection />
          <BigHeading text="Skip the Grunt Work – Focus on What Matters" />
          <HowItWorks />
          <BigHeading text="From Tedious Tasks to Tremendous Results" />
          <CaseStudies />
          <WhyChooseUs />
          <BigHeading text="Automate the mundane. Accelerate the extraordinary." />
          <BlogSection />
          <BigHeading text="Get a Day's Work Done Before Coffee Cools" />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
