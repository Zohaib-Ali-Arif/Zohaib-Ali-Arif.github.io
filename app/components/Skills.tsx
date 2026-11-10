'use client'

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'Hardware' | 'Software' | 'Tools';
}

const skills: Skill[] = [
  // Hardware Skills
  { name: 'Microcontrollers', level: 90, category: 'Hardware' },
  { name: 'PCB Design', level: 85, category: 'Hardware' },
  { name: 'Circuit Design', level: 88, category: 'Hardware' },
  { name: 'Digital Electronics', level: 92, category: 'Hardware' },
  { name: 'Analog Electronics', level: 85, category: 'Hardware' },
  
  // Software Skills
  { name: 'C/C++', level: 95, category: 'Software' },
  { name: 'RTOS', level: 88, category: 'Software' },
  { name: 'Python', level: 85, category: 'Software' },
  { name: 'Assembly', level: 80, category: 'Software' },
  { name: 'Embedded Linux', level: 82, category: 'Software' },
  
  // Tools
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'Altium Designer', level: 85, category: 'Tools' },
  { name: 'Oscilloscope', level: 92, category: 'Tools' },
  { name: 'Logic Analyzer', level: 88, category: 'Tools' },
  { name: 'Debug Tools', level: 90, category: 'Tools' },
];

const Skills = () => {
  const categories = ['Hardware', 'Software', 'Tools'];
  
  return (
    <section id="skills" className="section relative">
      <div className="circuit-bg" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">What I bring to the table</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-light-dark dark:bg-dark-lighter p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-text-primary-dark dark:text-text-primary">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-text-secondary-dark dark:text-text-secondary">
                          {skill.name}
                        </span>
                        <span className="text-text-secondary-dark dark:text-text-secondary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="skill-progress-bar"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 