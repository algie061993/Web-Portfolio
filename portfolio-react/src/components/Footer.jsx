import { FiHeart } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/algie061993", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/algie-marcaida-3b40a015b/",
    label: "LinkedIn",
  },
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
];

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 px-4 border-t ${darkMode ? "border-dark-border bg-dark-bg" : "border-gray-200 bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-bold gradient-text">{"<Algie />"}</div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? "text-gray-400 hover:text-primary-light hover:bg-white/5"
                    : "text-gray-500 hover:text-primary hover:bg-gray-100"
                }`}
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className={`text-sm flex items-center gap-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
          >
            © {currentYear} Algie Marcaida. Made with{" "}
            <FiHeart className="text-red-500" size={14} /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
