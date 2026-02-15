import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";

const projects = [
  {
    title: "Freight Management System Logistics 1",
    description:
      "Effortlessly manage your freight operations with our refined Freight Management System. Whether you're handling shipments, tracking deliveries, fuel, or vehicle parts stock, our platform ensures efficiency and cost-effectiveness.",
    image: "/images/thumbnails/capstone-thumbnail.jpg",
    github: "https://github.com/algie061993",
    video: "https://youtu.be/4mfk5RTE6zI",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    type: "Capstone Project",
  },
  {
    title: "Hinge Prompt Answer Generator",
    description:
      "Discover the Hinge Prompt Answer Generator, template-based and AI-powered, designed to craft engaging answers for your Hinge profile. With a user-friendly interface, it offers a variety of templates and AI-generated suggestions to help you create captivating responses that stand out and spark meaningful connections.",
    image: "/images/thumbnails/Hinge-Prompt-Answer-Generator.jpg",
    github: "https://github.com/algie061993/Pa-Hinge-Prompt-Generator-with-AI",
    video: "https://www.youtube.com/watch?v=YSUwF4HfF7M",
    tags: ["React", "Node.js", "Express", "AI", "OpenAI API"],
    type: "Personal Project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects({ darkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-dark-card/30" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p
            className={`mt-4 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Here are some of the projects I have worked on
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "bg-dark-card border border-dark-border hover:border-primary/50"
                  : "bg-white border border-gray-200 hover:border-primary/50 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FiPlay size={18} />
                    </a>
                  </div>
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p
                  className={`text-sm mb-4 line-clamp-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? "bg-primary/10 text-primary-light"
                          : "bg-primary/10 text-primary-dark"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-primary-light"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    <FiGithub size={16} /> Source Code
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? "text-gray-400 hover:text-accent"
                        : "text-gray-600 hover:text-accent"
                    }`}
                  >
                    <FiExternalLink size={16} /> Demo Video
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* More Projects Coming Soon Card */}
          <motion.div
            variants={cardVariants}
            className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-8 min-h-[300px] ${
              darkMode
                ? "border-dark-border text-gray-500"
                : "border-gray-300 text-gray-400"
            }`}
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-2">More Coming Soon</h3>
            <p className="text-sm text-center">
              I&apos;m always working on new projects. Stay tuned!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
