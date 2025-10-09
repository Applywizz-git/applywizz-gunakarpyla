import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative border-t border-electric-green/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} Gunakar Pyla. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/gunakar1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gunakar@careerattainment.com"
              className="text-muted-foreground hover:text-electric-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ScrollLink to="hero" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-primary/10 rounded-full hover:glow-green transition-all cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp className="text-electric-green" size={20} />
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
