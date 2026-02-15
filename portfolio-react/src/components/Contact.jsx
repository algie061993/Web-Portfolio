import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
  {
    Icon: FiMail,
    label: "Email",
    value: "Algie0506@gmail.com",
    href: "mailto:Algie0506@gmail.com",
  },
  {
    Icon: FiPhone,
    label: "Phone",
    value: "+63 976 474 8467",
    href: "tel:+639764748467",
  },
];

const socialLinks = [
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/algie.marcaida.3/",
    label: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/algiemarcaida/",
    label: "Instagram",
  },
  {
    Icon: FaDiscord,
    href: "https://discord.com/users/1255089513697509396",
    label: "Discord",
  },
  { Icon: FaGithub, href: "https://github.com/algie061993", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/algie-marcaida-3b40a015b/",
    label: "LinkedIn",
  },
];

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/ to get your service ID, template ID, and public key
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-dark-card/30" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p
            className={`mt-4 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Feel free to reach out! Whether you have questions, feedback, or
            just want to connect.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl ${
              darkMode
                ? "bg-dark-card border border-dark-border"
                : "bg-white shadow-lg"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
                    darkMode
                      ? "bg-dark-bg border-dark-border text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                  }`}
                  placeholder="Your message here..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
                }`}
                whileHover={!status ? { scale: 1.02 } : {}}
                whileTap={!status ? { scale: 0.98 } : {}}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <FiCheck size={18} /> Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <FiAlertCircle size={18} /> Failed to send. Try again.
                  </>
                ) : (
                  <>
                    <FiSend size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                      darkMode
                        ? "bg-dark-card border border-dark-border hover:border-primary/50"
                        : "bg-white shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${darkMode ? "bg-primary/10 text-primary-light" : "bg-primary/10 text-primary"}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p
                        className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                      >
                        {label}
                      </p>
                      <p className="font-medium text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl transition-all duration-200 ${
                      darkMode
                        ? "bg-dark-card border border-dark-border hover:border-primary/50 text-gray-400 hover:text-primary-light"
                        : "bg-white shadow-sm hover:shadow-md text-gray-600 hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map or decorative element */}
            <div
              className={`p-6 rounded-2xl text-center ${
                darkMode
                  ? "bg-dark-card border border-dark-border"
                  : "bg-white shadow-sm"
              }`}
            >
              <div className="text-4xl mb-3">📍</div>
              <p className="font-bold">Philippines</p>
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Open to remote opportunities worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
