import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '@shared/data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-secondary font-medium mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            Nitish <span className="text-accent">Thakur</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary/80 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-md">
            {personalInfo.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 mt-12">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div 
              className="absolute inset-0 rounded-full bg-secondary/20"
              animate={{ y: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full bg-accent/10"
              animate={{ y: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            />
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={personalInfo.profileImage} 
                alt="Nitish Thakur" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center text-primary/70 hover:text-accent transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
