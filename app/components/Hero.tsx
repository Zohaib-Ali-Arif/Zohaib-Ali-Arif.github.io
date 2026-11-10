'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="circuit-bg" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              <TypeAnimation
                sequence={[
                  'Embedded Systems Engineer',
                  1000,
                  'Firmware Developer',
                  1000,
                  'Hardware Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-text-secondary-dark dark:text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
              I specialize in developing embedded systems, firmware, and hardware solutions.
              Passionate about creating efficient and reliable electronic systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#about" className="btn btn-primary">
              Learn More
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark dark:text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark dark:text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary-dark dark:text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="floating-icon top-1/4 left-1/4">⚡</div>
            <div className="floating-icon top-1/3 right-1/4">🔧</div>
            <div className="floating-icon bottom-1/4 left-1/3">💻</div>
            <div className="floating-icon bottom-1/3 right-1/3">🔌</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
