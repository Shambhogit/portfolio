import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shakti Electortech Website",
      description:
        "Full-stack MERN application with advanced features including admin dashboard, product listing, etc.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: "/images/shakti.png",
      github: "https://github.com/Shambhogit/Shakti-Electrotec-website",
      featured: true,
    },
    {
      id: 2,
      title: "Course Selling platform for Students",
      description:
        "A modern course-selling platform empowering students to access, purchase, and learn from top-quality educational content anytime, anywhere.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Javascript",
        "Tailwind",
        "MongoDB",
      ],
      image: "/images/course.png",
      github: "https://github.com/Shambhogit/COURSE-SELLING-APP",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Forecast",
      description:
        "Real-time weather forecasting platform providing accurate predictions, live updates, and interactive climate data visualization.",
      tech: ["Tailwind", "React.js", "WeatherAPI"],
      image: "/images/forcast.png",
      github: "https://github.com/Shambhogit/WeatherApp",
      featured: false,
    },
    {
      id: 4,
      title: "Expense Tracker (API's only)",
      description:
        "API-based expense tracking system to manage budgets, monitor spending, and generate detailed financial reports.",

      tech: ["Node.js", "Express", "API", "MongoDB"],
      image: "/images/api.png",
      github: "https://github.com/Shambhogit/Expense-Tracker-API",
      featured: false,
    },
    {
      id: 5,
      title: "Task Management (API's only)",
      description:
        "API service for creating, updating, and tracking tasks with support for deadlines, priorities, and user assignments.",

      tech: ["Node.js", "Express", "MongoDB"],
      image: "/images/api.png",
      github: "https://github.com/Shambhogit/Task-Tracker-API",
      featured: false,
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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my best work, ranging from full-stack web
              applications to engineering solutions and creative experiments.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-card p-2 rounded-2xl smooth-transition hover:pulse-glow ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-card rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.div
                    whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-display font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-card hover:bg-gradient-primary hover:text-white"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-bold text-center mb-12 text-foreground">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card p-6 rounded-xl smooth-transition hover:pulse-glow group"
                >
                  <div className="aspect-video bg-gradient-card rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                    />
                  </div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-card hover:bg-gradient-primary hover:text-white"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default Projects;
