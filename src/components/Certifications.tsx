import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    icon: '☁️',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    icon: '🔒',
  },
  {
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    icon: '🌐',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    icon: '📡',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-15 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
            <span className="text-gradient">Certifications</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-lg p-6 hover:glow-green transition-all cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="text-electric-green mt-1 flex-shrink-0" size={20} />
                      <h3 className="text-lg font-bold text-silver">{cert.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                  <Award className="text-violet" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
