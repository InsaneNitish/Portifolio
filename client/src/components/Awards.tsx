import { motion } from 'framer-motion';
import { awards } from '@shared/data';

const Awards = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
            Awards & <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12"></div>
          <p className="text-lg text-white/80 max-w-2xl">
            Recognition received for my work and contributions in the field of technology and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-accent/40 transition-colors shadow-lg" 
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-16 h-16 bg-accent/20 flex items-center justify-center rounded-full mb-6">
                <i className={`fas fa-${award.icon} text-2xl text-accent`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{award.title}</h3>
              <p className="text-white/70 mb-4">{award.organization}</p>
              <span className="text-sm text-accent">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
