import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaybhayeshambho@gmail.com',
      href: 'mailto:jaybhayeshambho@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97308-27236',
      href: 'tel:+919730827236',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shambhogit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shambho-jaybhaye-51b6b5232/', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and
              create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, creative projects,
                  or just having a chat about technology and innovation.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-lg smooth-transition hover:bg-gradient-primary/10 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg group-hover:scale-110 smooth-transition">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-lg font-medium text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-display font-bold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-12 h-12 glass-card rounded-lg hover:bg-gradient-primary hover:text-white smooth-transition"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-muted/50 border-muted focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted/50 border-muted focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary smooth-transition"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default Contact;