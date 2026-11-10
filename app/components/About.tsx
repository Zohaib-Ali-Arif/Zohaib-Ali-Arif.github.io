'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="binary-bg" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary-dark dark:text-text-primary">
              Who am I?
            </h3>
            <p className="text-text-secondary-dark dark:text-text-secondary mb-6">
              I am a passionate Embedded Systems Engineer with expertise in developing
              firmware and hardware solutions. With a strong foundation in electronics
              and software development, I create efficient and reliable systems that
              power modern technology.
            </p>
            <p className="text-text-secondary-dark dark:text-text-secondary">
              My journey in embedded systems began with a deep curiosity about how
              hardware and software work together. This led me to specialize in
              microcontroller programming, real-time systems, and hardware design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-light-dark dark:bg-dark-lighter p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="font-bold mb-2 text-text-primary-dark dark:text-text-primary">
                Education
              </h4>
              <p className="text-text-secondary-dark dark:text-text-secondary">
                B.S. in Electrical Engineering
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-light-dark dark:bg-dark-lighter p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-bold mb-2 text-text-primary-dark dark:text-text-primary">
                Experience
              </h4>
              <p className="text-text-secondary-dark dark:text-text-secondary">
                5+ Years in Embedded Systems
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-light-dark dark:bg-dark-lighter p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="font-bold mb-2 text-text-primary-dark dark:text-text-primary">
                Location
              </h4>
              <p className="text-text-secondary-dark dark:text-text-secondary">
                Your City, Country
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-light-dark dark:bg-dark-lighter p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold mb-2 text-text-primary-dark dark:text-text-primary">
                Specialization
              </h4>
              <p className="text-text-secondary-dark dark:text-text-secondary">
                Embedded Systems & Firmware
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 