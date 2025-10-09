import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { CheckCircle2 } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'Enterprise Endpoint & Patch Automation with Intune and MECM',
    description: 'Comprehensive endpoint management solution using Microsoft technologies',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',

    highlights: [
      'Hybrid Intune-MECM co-management using Autopilot and Azure AD join',
      'Automated Win32 app packaging and deployment',
      'ADR patching with PowerShell automation',
      '98% endpoint compliance across 3000+ devices',
    ],
    technologies: ['Microsoft Intune', 'MECM/SCCM', 'Azure AD', 'PowerShell', 'Autopilot'],
  },
  {
    title: 'Enterprise SD-WAN & Network Automation Lab',
    description: 'Simulated multi-branch network with advanced SD-WAN capabilities',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'GNS3 multi-branch simulation with Cisco routers and firewalls',
      'SD-WAN implementation with vManage and policy templates',
      'SLA-based routing for optimal performance',
      'Automation with Python/Ansible for network provisioning',
      'QoS configuration for VoIP traffic optimization',
    ],
    technologies: ['Cisco SD-WAN', 'GNS3', 'Python', 'Ansible', 'QoS', 'vManage'],
  },
  {
    title: 'Cloud-Native Secure Infrastructure',
    description: 'Hybrid cloud infrastructure with comprehensive security',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Hybrid AWS VPC + Azure VNet with VPNs and Transit Gateway',
      'BGP routing for seamless cloud connectivity',
      'Security groups, NSGs, Azure Firewall, and WAF implementation',
      'Certificate lifecycle management',
      'CloudWatch, Azure Monitor, and SolarWinds integration',
      '30% reduction in network outages',
    ],
    technologies: ['AWS', 'Azure', 'VPN', 'Transit Gateway', 'Firewall', 'Monitoring'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-17 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-effect rounded-lg overflow-hidden h-[500px] flex flex-col hover:glow-green transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  {/* 🖼 Project Image */}
                  <div className="w-full h-40 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 📄 Content */}
                  <div className="p-6 flex flex-col flex-1 overflow-hidden">
                    <div className="overflow-y-auto custom-scrollbar">
                      <h3 className="text-xl font-bold text-silver mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-electric-green font-semibold mb-2 text-sm">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-muted-foreground text-sm"
                            >
                              <CheckCircle2
                                className="text-electric-green mt-0.5 flex-shrink-0"
                                size={14}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-secondary text-silver text-xs rounded-full border border-violet/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
