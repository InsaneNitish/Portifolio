import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (elementPosition < screenPosition) {
          element.classList.add('visible');
        }
      });
      
      // Animate skill bars when in view
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (barPosition < screenPosition) {
          const width = bar.getAttribute('data-width');
          if (width) {
            (bar as HTMLElement).style.width = width;
          }
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    animateOnScroll(); // Call once on initial load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary">
      {!isMobile && <CursorGlow />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
