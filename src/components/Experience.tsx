import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Lumen Technologies',
    role: 'Network Security Engineer',
    period: 'Nov 2024 – Present',
    location: 'USAs',
    achievements: [
      'Cisco ACI multi-site fabric rollout with Nexus/MSO → ↓ latency by 40%',
      'Firewall policy tuning (Palo Alto, Cisco ASA, Firepower) → ↓ security incidents 30%',
      'Intune + Autopilot deployment → onboarding time halved',
      'Patch mgmt compliance (MECM) → 95% adherence across 3000+ endpoints',
      'Citrix ADC GSLB failover → uptime ↑ 25%',
      'PowerShell + Graph API dashboards for compliance',
      'Nessus + ServiceNow CVE auto-prioritization → risk ↓ 40%',
      'ACI micro-segmentation (VRFs, EPG) → PCI scope reduced',
    ],
    side: 'left',
  },
  {
    company: 'HCL Technologies',
    role: 'Network Engineer',
    period: 'Jan 2021 – Jul 2023',
    location: 'Hyderabad, India',
    achievements: [
      'OSPF/EIGRP/BGP routing optimization → convergence ↓ 30%',
      'VLAN/STP deployments → broadcast storms ↓ 25%',
      'EtherChannel Nexus → bandwidth ↑ 60%',
      'Palo Alto tuning → malware incidents ↓ 40%',
      'Juniper SRX VPNs → 99.9% uptime',
      'ACLs/NAT/DMZ zoning → unauthorized access ↓ 45%',
      'QoS configs → VoIP jitter ↓ 35%',
      'Firewall log integrations into Splunk → investigation time ↓ 50%',
    ],
    side: 'right',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" data-aos="fade-up">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-electric-green/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  data-aos={exp.side === 'left' ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 200}
                >
                  <div className="flex-1 w-full">
                    <div className="glass-effect rounded-lg p-6 hover:glow-green transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Briefcase className="text-electric-green" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-silver mb-1">{exp.role}</h3>
                          <p className="text-electric-green font-semibold mb-1">{exp.company}</p>
                          <p className="text-muted-foreground text-sm">
                            {exp.period} | {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <CheckCircle2 className="text-electric-green mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-electric-green rounded-full border-4 border-charcoal glow-green flex-shrink-0" />

                  <div className="flex-1 w-full md:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
