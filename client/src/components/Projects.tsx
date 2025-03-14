import { motion } from 'framer-motion';
import { projects } from '@shared/data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12"></div>
          <p className="text-lg text-primary/80 max-w-2xl">
            Here are some of my recent projects that showcase my skills and expertise in web development. 
            Each project represents different challenges and learning opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card animate-on-scroll bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500" 
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h4 className="text-white font-medium text-lg">{project.technologies.join(', ')}</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-primary/80 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.liveLink} className="text-secondary hover:text-accent transition-colors" title="View Project" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubLink} className="text-secondary hover:text-accent transition-colors" title="View Code" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <span className={`px-3 py-1 ${project.featured ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'} text-xs rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href="https://github.com/InsaneNitish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors shadow-lg hover:shadow-xl"
          >
            <span>See More Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
