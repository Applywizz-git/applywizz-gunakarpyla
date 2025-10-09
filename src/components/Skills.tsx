import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Code, Database, Network, Wifi, Monitor, DatabaseBackupIcon } from 'lucide-react';
import { SheetOverlay } from './ui/sheet';

const skillCategories = [
  {
    title: 'Networking & Security',
    icon: Network,
    skills: [
      'LAN/WAN',
      'OSI & TCP/IP',
      'VLANs',
      'Subnetting',
      'BGP',
      'OSPF',
      'EIGRP',
      'MPLS',
      'VXLAN',
      'STP',
      'ACLs',
      'IDS/IPS',
      'VPN (SSL/IPSec)',
      'Palo Alto',
      'Check Point',
      'Cisco ASA',
      'Zero Trust Security',
      'SDN',
    ],
  },
  {
    title: 'Automation & Scripting',
    icon: Code,
    skills: ['Python', 'Ansible', 'Bash', 'IaC', 'CI/CD'],
  },
  {
    title: 'Endpoint & Infrastructure',
    icon: Server,
    skills: [
      'Microsoft Intune',
      'MECM/SCCM',
      'GPO',
      'Azure AD',
      'MDM/MAM',
      'Patch Management',
      'Software Deployment',
      'Endpoint Security',
      'Compliance Management',
    ],
  },
  {
    title: 'Cloud & Virtualization',
    icon: Cloud,
    skills: [
      'AWS (VPC, EC2, S3)',
      'Direct Connect',
      'Route 53',
      'Transit Gateway',
      'Load Balancers',
      'Azure Networking',
      'VMware',
      'Hyper-V',
      'Docker',
      'Kubernetes',
      'Hybrid Cloud',
    ],
  },
  {
    title: 'Monitoring & Analysis',
    icon: Shield,
    skills: ['Wireshark', 'SolarWinds', 'Nagios', 'PRTG', 'NetBox', 'Splunk'],
  },
  {
    title: 'Protocols & Services',
    icon: Database,
    skills: ['DNS', 'DHCP', 'HTTPS', 'SMTP', 'FTP', 'SNMP', 'IPsec', 'IPv4/IPv6'],
  },
    {
    title: 'Wireless & WAN Technologies',
    icon: Wifi,
    skills: ['SD-WAN', 'Centralized Controllers',  'WLAN Configuration & Security', ' Wireless Network Architecture',  'Marking & Traffic Shaping'],
  },
     {
    title: 'Documentation & Reporting',
    icon: DatabaseBackupIcon,
    skills: ['SD-WAN', 'Centralized Controllers',  'WLAN Configuration & Security', ' Wireless Network Architecture',  'Marking & Traffic Shaping'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-15 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-lg p-6"
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-electric-green" size={24} />
                  <h3 className="text-xl font-bold text-silver">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 bg-secondary text-silver text-sm rounded-full border border-electric-green/20 hover:border-electric-green hover:glow-green transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 glass-effect rounded-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p className="text-lg text-muted-foreground">
              <span className="text-electric-green font-semibold">Documentation:</span> Network Diagrams, SOPs, Runbooks, Config Docs, Incident Reports, KB maintenance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
