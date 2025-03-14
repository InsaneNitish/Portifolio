import { personalInfo, services } from '@shared/data';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">
              <span className="text-accent">N</span>itish<span className="text-secondary">T</span>hakur
            </h3>
            <p className="text-white/70 mb-4">
              A passionate full stack developer specializing in creating engaging web experiences.
            </p>
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Nitish Thakur. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-accent transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to receive updates on my latest projects and tech articles.</p>
            <form className="flex" onSubmit={(e) => {
              e.preventDefault();
              alert('Subscription feature coming soon!');
            }}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none flex-1 text-primary"
              />
              <button type="submit" className="bg-accent px-4 py-2 rounded-r-md hover:bg-accent/90 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            Designed & Developed with <i className="fas fa-heart text-accent"></i> by Nitish Thakur
          </p>
          <div className="flex space-x-4">
            <a href={personalInfo.socialLinks.github} className="text-white/60 hover:text-accent transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href={personalInfo.socialLinks.linkedin} className="text-white/60 hover:text-accent transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={personalInfo.socialLinks.twitter} className="text-white/60 hover:text-accent transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/" className="text-white/60 hover:text-accent transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
