import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'wordpress-lab', label: 'WP Lab' },
  { id: 'experience', label: 'Exp.' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const ScrollPipeline = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Find the currently active section
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if top is within viewport midpoint area
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Pipeline (Left Side) */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center h-[60vh]">
        {/* The Track Line (Background) */}
        <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
        
        {/* Nodes */}
        <div className="flex flex-col justify-between h-full w-full items-start">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="relative group flex items-center justify-start gap-3 pl-px"
              whileHover={{ x: 2 }}
            >
              {/* Dot */}
              <motion.div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative z-10 ${
                  activeSection === section.id 
                    ? 'bg-blue-500 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-125' 
                    : 'bg-bg-secondary border-white/20 group-hover:border-white/50'
                }`}
              />

              {/* Label (Pops out Above/On Top) */}
              <div 
                className={`text-xs font-mono font-medium tracking-wide uppercase transition-all duration-300 absolute -top-6 left-1/2 -translate-x-1/2 bg-bg-card border border-white/10 px-2 py-0.5 rounded backdrop-blur-md whitespace-nowrap z-20 ${
                  activeSection === section.id 
                    ? 'opacity-100 translate-y-0 text-blue-400' 
                    : 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 text-gray-500'
                }`}
              >
                {section.label}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollPipeline;
