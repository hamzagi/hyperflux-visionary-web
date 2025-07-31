import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import BlogSection from '@/components/BlogSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import BigHeading from '@/components/BigHeading';
import VideoSection from '@/components/VideoSection';
import CaseStudies3D from '@/components/CaseStudies3D';
import { ParallaxSection } from '@/components/ParallaxSection';

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
      <div className="overflow-hidden w-full" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        <Navbar />
        <main className="w-full">
          <Hero3D />
          
          <ParallaxSection speed={0.3}>
            <VideoSection />
          </ParallaxSection>
          
          <ParallaxSection speed={0.2}>
            <BigHeading text="Skip the Grunt Work – Focus on What Matters" />
          </ParallaxSection>
          
          <ParallaxSection speed={0.4}>
            <HowItWorks />
          </ParallaxSection>
          
          <CaseStudies3D />
          
          <ParallaxSection speed={0.3}>
            <BigHeading text="From Tedious Tasks to Tremendous Results" />
          </ParallaxSection>
          
          <ParallaxSection speed={0.5}>
            <WhyChooseUs />
          </ParallaxSection>
          
          <ParallaxSection speed={0.2}>
            <BigHeading text="Automate the mundane. Accelerate the extraordinary." />
          </ParallaxSection>
          
          <ParallaxSection speed={0.4}>
            <BlogSection />
          </ParallaxSection>
          
          <ParallaxSection speed={0.3}>
            <BigHeading text="Get a Day's Work Done Before Coffee Cools" />
          </ParallaxSection>
          
          <ParallaxSection speed={0.5}>
            <CallToAction />
          </ParallaxSection>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
