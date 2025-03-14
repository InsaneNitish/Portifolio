import { motion } from 'framer-motion';
import { personalInfo, education, experience } from '@shared/data';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3" 
                alt="Nitish Thakur working" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-white" 
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-secondary"></div>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <p className="text-lg mb-6 text-white/90">
              I'm a B.Sc (Hons) Computer Science student at <span className="text-accent">Keshav Mahavidyalaya, University of Delhi</span>,
              graduating in 2025. With a strong foundation in both frontend and backend technologies, I specialize in building 
              modern web applications using the MERN stack.
            </p>
            
            <p className="text-lg mb-6 text-white/90">
              I've worked as a Web Developer intern at <span className="text-accent">Dry-Code</span>, where I developed multiple 
              projects including a Weather Web App and Portfolio Website. Additionally, I've built several personal projects 
              including:
            </p>
            
            <ul className="list-disc pl-6 mb-8 text-white/90">
              <li className="mb-2">
                <span className="text-accent font-medium">Indian Heritage Explorer (SanskritiSync)</span> - A React app showcasing Indian heritage sites
              </li>
              <li className="mb-2">
                <span className="text-accent font-medium">Asteroid Data API</span> - Built with Node.js and Express.js for real-time asteroid data
              </li>
              <li>
                <span className="text-accent font-medium">Tic-Tac-Toe Game</span> - Created with React.js featuring interactive gameplay
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4 text-secondary">Education</h3>
              {education.slice(0, 2).map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-white/70">{edu.year}</p>
                  </div>
                  <p className="text-white/80">{edu.institution}</p>
                  <p className="text-sm text-accent">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
