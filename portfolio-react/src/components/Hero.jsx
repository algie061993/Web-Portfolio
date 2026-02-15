import { useMemo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const socialLinks = [
  { Icon: FiGithub, href: "https://github.com/algie061993", label: "GitHub" },
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/algie-marcaida-3b40a015b/",
    label: "LinkedIn",
  },
  { Icon: FiMail, href: "mailto:Algie0506@gmail.com", label: "Email" },
];

export default function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${(i * 5 + 2.5) % 100}%`,
        top: `${(i * 7 + 3) % 100}%`,
        duration: 3 + (i % 5),
        delay: (i % 4) * 0.5,
      })),
    [],
  );

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 animate-pulse" />
              <img
                src="/images/profile-picture.jpg"
                alt="Algie Marcaida"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white"
          >
            Hi, I&apos;m <span className="gradient-text">Algie Marcaida</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            A passionate{" "}
            <span className="text-accent font-semibold">Web Developer</span>{" "}
            building dynamic and responsive web applications with the MERN
            stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border-2 border-primary/50 text-white rounded-full font-medium hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <FiArrowDown size={28} />
        </motion.button>
      </div>
    </section>
  );
}
