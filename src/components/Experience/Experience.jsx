import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jan 2023 - Present',
    description: 'Building custom web solutions for clients worldwide.',
  },
  {
    company: 'Tech Startup',
    role: 'Frontend Developer',
    period: 'Jun 2021 - Dec 2022',
    description: 'Developed responsive web applications using React and Tailwind CSS.',
  },
  {
    company: 'Digital Agency',
    role: 'Junior Developer',
    period: 'Jan 2020 - May 2021',
    description: 'Started my journey building WordPress sites and learning modern frameworks.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full -translate-x-1/2 hidden md:block shadow-lg shadow-accent/50" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="p-6 rounded-xl border border-border bg-bg-secondary hover:border-accent/50 transition-colors">
                    <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <div className="text-text-secondary mb-3">{exp.role}</div>
                    <p className="text-text-muted text-sm">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
