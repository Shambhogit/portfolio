import { motion } from "framer-motion";
import { FaJava, FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

import { IconButton } from "./ui/icon-button";

const Skills = () => {
  const iconButtonProps = [
    { name: "CPP", color: "#00599C", icon: <SiCplusplus /> },
    { name: "Java", color: "#007396", icon: <FaJava /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
    { name: "Python", color: "#3776AB", icon: <SiPython /> },
    { name: "React", color: "#61DAFB", icon: <SiReact /> },
    { name: "Node.js", color: "#339933", icon: <SiNodedotjs /> },
    { name: "MongoDB", color: "#47A248", icon: <SiMongodb /> },
    { name: "MySql", color: "#4479A1", icon: <SiMysql /> },
    { name: "Sql", color: "#336791", icon: <SiPostgresql /> },
    { name: "Express", color: "#000000", icon: <SiExpress /> },
    { name: "Tailwind", color: "#38B2AC", icon: <SiTailwindcss /> },
    { name: "Git", color: "#F05032", icon: <SiGit /> },
    { name: "Docker", color: "#2496ED", icon: <SiDocker /> },
    { name: "AWS", color: "#FF9900", icon: <FaAws /> },
    { name: "Firebase", color: "#FFCA28", icon: <SiFirebase /> },
    { name: "Postman", color: "#FF6C37", icon: <SiPostman /> },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "vite", level: 90 },
        { name: "Javascript", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Motion", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "MySql", level: 80 },
        { name: "RestAPI", level: 75 },
      ],
    },
    {
      title: "Engineering & Tools",
      skills: [
        { name: "Postman", level: 85 },
        { name: "ChatGPT", level: 80 },
        { name: "AWS", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
      ],
    },
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
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
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
              Skills & Expertise
            </h2>
            <p className="responsive-text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning modern web development,
              engineering principles, and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-3d glass-card p-8"
              >
                <h3 className="responsive-text-xl font-display font-bold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="responsive-text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="responsive-text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-2 bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="responsive-text-2xl font-display font-bold text-center mb-8 text-foreground">
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {iconButtonProps.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  <IconButton
                    label={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                  ></IconButton>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default Skills;
