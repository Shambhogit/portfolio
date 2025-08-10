import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '6+' },
    { icon: Cpu, label: 'Technologies Mastered', value: '10+' },
    { icon: Database, label: 'Databases Worked With', value: '3+' },
    { icon: Globe, label: 'No Experience', value: 'Fresher' },
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
    <section id="about" className="py-10 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="responsive-text-6xl font-display font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="responsive-text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap
              between engineering principles and modern web development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="responsive-text-3xl font-display font-bold text-foreground">
                Engineering Student & Developer
              </h3>
              <p className="responsive-text-lg text-muted-foreground leading-relaxed">
                Currently in my final year of Engineering, I've been passionate about
                technology and problem-solving since day one. My journey in web
                development began 3 years ago, and I've since mastered the MERN
                stack while continuously exploring emerging technologies.
              </p>
              <p className="responsive-text-lg text-muted-foreground leading-relaxed">
                I believe in the power of clean code, user-centered design, and
                innovative solutions. Whether it's building scalable web applications
                or solving complex engineering problems, I approach every challenge
                with creativity and precision.
              </p>
              <p className="responsive-text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or mentoring fellow students
                in their programming journey.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-3d glass-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="responsive-text-2xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="responsive-text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;