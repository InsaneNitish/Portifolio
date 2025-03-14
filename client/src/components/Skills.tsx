import { motion } from 'framer-motion';
import { skills, courses } from '@shared/data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12"></div>
          <p className="text-lg text-primary/80 max-w-2xl">
            I've developed a diverse set of skills throughout my academic and professional journey.
            Here's an overview of my technical expertise and knowledge areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-8 text-primary">Technical Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="skill-bar h-full bg-accent rounded-full" 
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white text-xs rounded-full shadow">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-8 text-primary">Soft Skills & Additional Qualifications</h3>
            
            {/* Soft Skills */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {skills.soft.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/10 text-accent rounded-full mb-4">
                    <i className={`fas fa-${skill.icon} text-2xl`}></i>
                  </div>
                  <h4 className="font-medium text-lg mb-2">{skill.name}</h4>
                  <p className="text-center text-sm text-primary/70">{skill.description}</p>
                </div>
              ))}
            </div>
            
            {/* Courses and Certifications */}
            <h3 className="text-xl font-bold mb-6 text-primary">Courses & Certifications</h3>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-lg">{course.title}</h4>
                    <span className="text-xs text-white bg-accent px-2 py-1 rounded-full">{course.year}</span>
                  </div>
                  {course.instructor && <p className="text-sm text-primary/70 mb-2">by {course.instructor}</p>}
                  <p className="text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
