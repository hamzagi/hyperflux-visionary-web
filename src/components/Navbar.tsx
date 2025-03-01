
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass-morphism shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-neon-blue rounded-full opacity-70 blur-sm animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <Brain size={20} className="text-white" />
              </div>
            </div>
            <span className="text-xl font-semibold tracking-tight text-white">
              HYPER<span className="text-neon-blue">THOUGHT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              Home
            </Link>
            <Link to="/how-it-works" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              How It Works
            </Link>
            <Link to="/why-us" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              Why Choose Us
            </Link>
            <Link to="/case-studies" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              Case Studies
            </Link>
            <Link to="/blog" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              Blog
            </Link>
            <Link to="/contact" className="text-sm text-white/90 hover:text-white transition-colors link-underline">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button 
              className="btn-primary"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <Link 
            to="/"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/how-it-works"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </Link>
          <Link 
            to="/why-us"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            Why Choose Us
          </Link>
          <Link 
            to="/case-studies"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link 
            to="/blog"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/contact"
            className="block text-white py-2 hover:text-neon-blue transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Button 
            className="w-full btn-primary mt-4"
            onClick={closeMenu}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
