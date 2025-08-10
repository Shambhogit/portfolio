import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Scene3D from "./Scene3D";
import { Button } from "./ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { FloatingDock } from "./ui/floating-dock";

import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socialLinks = [
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/Shambhogit",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/shambho-jaybhaye-51b6b5232/",
  },
  {
    title: "Email",
    icon: <Mail />,
    href: "mailto:jaybhayeshambho@gmail.com",
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/shambho_1001/",
  },
  {
    title: "Codeforces",
    icon: <SiCodeforces />,
    href: "https://codeforces.com/profile/shambho_1001",
  },
];

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-primary rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mt-[10%] px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-3"
        >
          <span className="text-primary text-lg font-medium">Hello, I'm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="responsive-text-6xl font-display font-bold gradient-text"
        >
          Shambho Jaybhaye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="responsive-text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          <ContainerTextFlip></ContainerTextFlip>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="responsive-text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Crafting exceptional digital products by blending creativity,
          cutting-edge technology, and innovative solutions to deliver
          impactful, seamless, and engaging user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center mb-6"
        >
          <FloatingDock items={socialLinks}></FloatingDock>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center mb-16"
        >
          <Button variant="hero" onClick={scrollToProjects}>
            View My Work
          </Button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ y: -5 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ArrowDown size={32} className="text-primary" />
        </motion.button>
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
