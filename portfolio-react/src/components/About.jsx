import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiGitBranch,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";

const skills = [
  { name: "HTML/CSS", icon: FiLayout, level: 90 },
  { name: "JavaScript", icon: FiCode, level: 85 },
  { name: "React.js", icon: FiCode, level: 80 },
  { name: "Node.js", icon: FiServer, level: 75 },
  { name: "MongoDB", icon: FiDatabase, level: 70 },
  { name: "Express.js", icon: FiServer, level: 75 },
  { name: "Git & GitHub", icon: FiGitBranch, level: 80 },
  { name: "RESTful APIs", icon: FiServer, level: 75 },
  { name: "Responsive Design", icon: FiSmartphone, level: 85 },
];

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Bestlink College of the Philippines",
    year: "2021 - 2025",
  },
  {
    degree: "Computer Programming",
    school: "International Institute of Hospitality College",
    year: "2012 - 2014",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SectionTitle({ children, darkMode }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="gradient-text">{children}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
    </div>
  );
}

function SkillBar({ name, Icon, level, darkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className={`p-4 rounded-xl transition-all duration-300 ${
        darkMode
          ? "bg-dark-card hover:bg-dark-card/80"
          : "bg-white hover:bg-gray-50 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`p-2 rounded-lg ${darkMode ? "bg-primary/10 text-primary-light" : "bg-primary/10 text-primary"}`}
        >
          <Icon size={18} />
        </div>
        <span className="font-medium text-sm">{name}</span>
        <span
          className={`ml-auto text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          {level}%
        </span>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${darkMode ? "bg-dark-border" : "bg-gray-200"}`}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function About({ darkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionTitle darkMode={darkMode}>About Me</SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Bio & Education */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Hi, I&apos;m Algie Marcaida — a fresh IT graduate and aspiring
                web developer with a passion for building innovative and
                practical solutions. I have hands-on experience with HTML, CSS,
                JavaScript, and the MERN stack.
              </p>
              <p
                className={`text-lg leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                I enjoy working on projects that involve different languages and
                frameworks, and I&apos;m enthusiastic about both front-end and
                back-end development. In my free time, I love exploring new
                technologies and contributing to open-source projects.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">🎓</span> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`p-5 rounded-xl border-l-4 border-primary ${
                      darkMode ? "bg-dark-card" : "bg-white shadow-sm"
                    }`}
                  >
                    <h4 className="font-bold text-sm">{edu.degree}</h4>
                    <p
                      className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {edu.school}
                    </p>
                    <p className="text-xs text-primary mt-1">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">💻</span> Skills
            </h3>
            <div className="grid gap-3">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  Icon={skill.icon}
                  level={skill.level}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
