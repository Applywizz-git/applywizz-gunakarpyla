import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const stats = [
  { number: 10, suffix: '+', label: 'Projects Completed' },
  { number: 3, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Uptime Improvements' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" data-aos="fade-up">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass-effect rounded-lg p-8 mb-12" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enterprise Network Engineer with 3+ years of experience designing, deploying, and securing LAN/WAN, wireless, and cloud networks. Skilled in Cisco, Juniper, and Palo Alto networking, with expertise in routing (OSPF, EIGRP, BGP), switching (VLAN, STP, EtherChannel), firewalls, VPNs, and cloud connectivity (AWS Direct Connect, VPC peering). Proven track record of improving network performance, uptime, and security compliance for enterprise-scale environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="glass-effect rounded-lg p-6 text-center glow-green"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {isInView && (
                    <>
                      <CountUp end={stat.number} duration={2.5} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
