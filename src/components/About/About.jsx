import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          {/* Quote/Philosophy */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-snug mb-12">
            I believe in a{' '}
            <span className="text-accent">user-centered design</span> approach, 
            ensuring that every project I work on is tailored to meet the 
            specific needs of its users.
          </h2>
          
          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <span className="text-accent text-sm uppercase tracking-widest font-semibold mb-4 block">
                This is me.
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hi, I&apos;m Javed.
              </h3>
            </div>
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I&apos;m a frontend web developer dedicated to turning ideas into creative solutions. 
                I specialize in creating seamless and intuitive user experiences.
              </p>
              <p>
                My approach focuses on creating scalable, high-performing solutions tailored to 
                both user needs and business objectives. By prioritizing performance, accessibility, 
                and responsiveness, I strive to deliver experiences that not only engage users but 
                also drive tangible results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
