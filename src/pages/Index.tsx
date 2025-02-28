
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';
import BlogSection from '@/components/BlogSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

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
      className="relative min-h-screen"
    >
      <div className="overflow-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <WhyChooseUs />
          <CaseStudies />
          <BlogSection />
          <ContactForm />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
