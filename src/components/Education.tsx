import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-lg p-8 hover:glow-green transition-all"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-electric-green" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-silver mb-2">
                    Master of Science in Cybersecurity and Information Assurance
                  </h3>
                  <p className="text-electric-green font-semibold mb-3">
                    University of Central Missouri
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-violet" />
                      <span>Warrensburg, MO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-violet" />
                      <span>Aug 2023 – May 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
