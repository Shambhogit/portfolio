import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 glass-card rounded-full hover:bg-gradient-primary hover:text-white smooth-transition"
          >
            <ArrowUp size={20} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-display font-bold gradient-text mb-2">
              Shambho Jaybhaye
            </h3>
            <p className="text-muted-foreground">
              Engineer & MERN Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React, TypeScript & Three.js</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>&copy; 2025 Shambho Jaybhaye. All rights reserved.</p>
          </motion.div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;