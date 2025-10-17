// import { motion } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { ArrowDown, Download } from 'lucide-react';
// import { Button } from './ui/button';
// import { Link as ScrollLink } from 'react-scroll';
// import profileImage from '@/assets/profile.jpg';

// const Hero = () => {
//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-secondary opacity-50" />
//       <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8 flex justify-center"
//           >
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-electric-green to-violet rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-glow-pulse" />
//               <img
//                 src={profileImage}
//                 alt="Gunakar Pyla"
//                 className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-electric-green/50 shadow-2xl"
//               />
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-silver">
//               Gunakar Pyla
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-4">
//               Enterprise Network Engineer
//             </p>
//             <p className="text-lg text-muted-foreground mb-8">
//               Overland Park, KS
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 min-h-[120px]">
//               <TypeAnimation
//                 sequence={[
//                   'Building Scalable Network Infrastructure with Cisco',
//                   2000,
//                   'Building Scalable Network Infrastructure with Juniper',
//                   2000,
//                   'Building Scalable Network Infrastructure with Cloud Networking',
//                   2000,
//                   'Building Scalable Network Infrastructure with Automation',
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 className="text-gradient"
//                 repeat={Infinity}
//               />
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Designing, deploying, and securing enterprise LAN/WAN, wireless, and cloud networks to improve performance, uptime, and compliance.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-wrap gap-4 justify-center mb-12"
//           >
//             <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green">
//                 View Projects
//               </Button>
//             </ScrollLink>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-electric-green text-electric-green hover:bg-electric-green hover:text-charcoal"
//               asChild
//             >
//               <a href="/assets/resume.pdf" download>
//                 <Download className="mr-2 h-5 w-5" />
//                 Download Resume
//               </a>
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex gap-6 justify-center text-sm text-muted-foreground"
//           >
//             <a href="mailto:gunakar@careerattainment.com" className="hover:text-electric-green transition-colors">
//               gunakar@careerattainment.com
//             </a>
//             <span>|</span>
//             <a href="tel:+19132388606" className="hover:text-electric-green transition-colors">
//               +1 (913) 238-8606
//             </a>
//             <span>|</span>
//             <a
//               href="https://www.linkedin.com/in/gunakar1234/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-electric-green transition-colors"
//             >
//               LinkedIn
//             </a>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="cursor-pointer"
//             >
//               <ArrowDown className="text-electric-green" size={32} />
//             </motion.div>
//           </ScrollLink>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-secondary opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-silver">
            Gunakar Pyla
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Enterprise Network Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Overland Park, KS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 min-h-[120px]">
            <TypeAnimation
              sequence={[
                'Building Scalable Network Infrastructure with Cisco',
                2000,
                'Building Scalable Network Infrastructure with Juniper',
                2000,
                'Building Scalable Network Infrastructure with Cloud Networking',
                2000,
                'Building Scalable Network Infrastructure with Automation',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gradient"
              repeat={Infinity}
            />
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Designing, deploying, and securing enterprise LAN/WAN, wireless, and cloud networks to improve performance, uptime, and compliance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-green"
              >
                View Projects
              </Button>
            </ScrollLink>
            <Button
              size="lg"
              variant="outline"
              className="border-electric-green text-electric-green hover:bg-electric-green hover:text-charcoal"
              asChild
            >
              <a href="/assets/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
            <a
              href="mailto:gunakar@careerattainment.com"
              className="hover:text-electric-green transition-colors"
            >
              gunakar@careerattainment.com
            </a>
            <span>|</span>
            <a
              href="tel:+19132388606"
              className="hover:text-electric-green transition-colors"
            >
              +1 (913) 238-8606
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/gunakar1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ArrowDown className="text-electric-green" size={32} />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
