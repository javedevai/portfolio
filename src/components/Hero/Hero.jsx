import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImage from '../../assets/image.png';

const Hero = () => {
  const stats = [
    { value: '4+', label: 'Years of Experience' },
    { value: '100+', label: 'Completed Projects' },
    { value: '1K+', label: 'Hours Worked' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8"
            >
              <span className="text-accent block">FRONTEND</span>
              <span className="text-white block">DEVELOPER</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Hi! I&apos;m <span className="text-white font-semibold">Javed</span>. A creative Frontend Developer with 4+ years of 
              experience in building high-performance, scalable, and responsive web solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.upwork.com/freelancers/~019ad417726620b494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-bg font-bold text-sm uppercase tracking-widest rounded-full cursor-pointer transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                Hire Me on Upwork
              </a>
              <Link
                to="projects"
                smooth={true}
                className="inline-block px-8 py-4 border border-border text-white font-bold text-sm uppercase tracking-widest rounded-full cursor-pointer transition-all hover:border-accent hover:text-accent"
              >
                View Work
              </Link>
            </motion.div>
          </div>
          
          {/* Right: Profile Image + Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 flex flex-col items-center lg:items-end order-1 lg:order-2"
          >
            {/* Profile Image */}
            <div className="relative mb-10">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/50">
                <img 
                  src={profileImage} 
                  alt="Javed - Frontend Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex flex-row lg:flex-col gap-8 lg:items-end lg:text-right">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center lg:text-right">
                  <div className="text-3xl md:text-4xl font-black text-accent glow-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
