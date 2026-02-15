import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Certificates", href: "certificates" },
  { name: "Contact", href: "contact" },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-dark-bg/90 backdrop-blur-lg shadow-lg shadow-primary/5"
            : "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<Algie />"}
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </button>
            ))}
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                darkMode
                  ? "text-yellow-400 hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg cursor-pointer ${
                darkMode ? "text-yellow-400" : "text-gray-600"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg cursor-pointer ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              darkMode
                ? "bg-dark-bg/95 backdrop-blur-lg"
                : "bg-white/95 backdrop-blur-lg"
            }`}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    darkMode
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
