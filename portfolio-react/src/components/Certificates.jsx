import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { FiX, FiAward } from "react-icons/fi";

const certificates = [
  {
    title: "JavaScript Essentials 1 Badge",
    description:
      "Completed a course on JavaScript fundamentals, covering basic syntax, data types, and control structures.",
    image: "/images/certificates/JavaScript_Essentials_1_Badge20240626.jpg",
  },
  {
    title: "AI Integration Certificate",
    description:
      "Explored the integration of AI technologies in software development, focusing on innovation and impact in various industries.",
    image: "/images/certificates/ai integration innovation and impact.jpg",
  },
  {
    title: "Information Management in the Digital Age",
    description:
      "Gained insights into managing information effectively in the digital era, including data organization, retrieval, and security.",
    image: "/images/certificates/information management in the digital age.jpg",
  },
  {
    title: "JVD Teachscape",
    description:
      "Participated in a program focused on innovative teaching practices and educational technology in diverse environments.",
    image: "/images/certificates/jvd techscape.jpg",
  },
  {
    title: "Basic Knowledge with the Research Trends",
    description:
      "Developed foundational knowledge in research methodologies and current trends in various fields of study.",
    image: "/images/certificates/basic knowledge with the research trebds.jpg",
  },
  {
    title: "Role in Digital Transformation",
    description:
      "Explored the critical role of digital transformation in modern organizations, focusing on strategies for successful implementation.",
    image:
      "/images/certificates/BITZ 2023 Session 2 Understanding the Innovators Role in Digital Transformation.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Certificates({ darkMode }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p
            className={`mt-4 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Here are some of the certificates I have earned
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(cert)}
              className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-dark-card border border-dark-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  : "bg-white border border-gray-200 hover:border-primary/50 shadow-md hover:shadow-xl"
              }`}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <FiAward className="text-yellow-400" size={20} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 line-clamp-1">
                  {cert.title}
                </h3>
                <p
                  className={`text-xs line-clamp-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-3xl w-full rounded-2xl overflow-hidden ${
                darkMode ? "bg-dark-card" : "bg-white"
              }`}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
              >
                <FiX size={20} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[60vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {selectedCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
