import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! 🎉', {
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="glass-effect rounded-lg p-8">
                <h3 className="text-2xl font-bold text-silver mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:gunakar@careerattainment.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-electric-green transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:glow-green transition-all">
                      <Mail className="text-electric-green" size={20} />
                    </div>
                    <span>gunakar@careerattainment.com</span>
                  </a>
                  <a
                    href="tel:+19132388606"
                    className="flex items-center gap-3 text-muted-foreground hover:text-electric-green transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:glow-green transition-all">
                      <Phone className="text-electric-green" size={20} />
                    </div>
                    <span>+1 (913) 238-8606</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gunakar1234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-electric-green transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:glow-green transition-all">
                      <Linkedin className="text-electric-green" size={20} />
                    </div>
                    <span>linkedin.com/in/gunakar1234</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <form onSubmit={handleSubmit} className="glass-effect rounded-lg p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-silver mb-2 text-sm font-semibold">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-electric-green/20 focus:border-electric-green text-silver"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-silver mb-2 text-sm font-semibold">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-electric-green/20 focus:border-electric-green text-silver"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-silver mb-2 text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary border-electric-green/20 focus:border-electric-green text-silver resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-green"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
