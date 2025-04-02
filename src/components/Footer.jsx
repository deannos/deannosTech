import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Code2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SOLUTIONS } from "../constants/navigation";
import { useScrollToTop } from "../hooks/useScrollToTop";

const FooterSection = ({ title, children, className = "" }) => (
  <div className={`space-y-6 ${className}`}>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({ to, children, className = "" }) => {
  const handleNavigation = useScrollToTop();

  return (
    <motion.button
      onClick={() => handleNavigation(to)}
      className={`group flex items-center text-gray-400 hover:text-white transition-all duration-300 ${className}`}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      {children}
    </motion.button>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 group"
    aria-label={label}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
      <Icon className="h-5 w-5" />
    </div>
  </motion.a>
);

const ContactItem = ({ icon: Icon, text, link }) => (
  <motion.li
    className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <span className="mt-1">
      <Icon className="h-5 w-5" />
    </span>
    {link ? (
      <a
        href={link}
        className="hover:text-blue-400 transition-colors duration-300"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </motion.li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleNavigation = useScrollToTop();

  const footerLinks = {
    company: [
      { title: "About Us", path: "/about" },
      { title: "Careers", path: "/careers" },
      { title: "Insights", path: "/insights" },
      { title: "Contact", path: "/contact" },
    ],
    solutions: [
      { title: "Data Centre", path: "/solutions/datacentre" },
      { title: "Networking", path: "/solutions/networking" },
      { title: "AI/ML", path: "/solutions/ai-ml" },
    ],
    support: [
      { title: "Get Started", path: "/get-started" },
      { title: "Privacy Policy", path: "/privacy-policy" },
      { title: "Terms of Service", path: "/terms-of-service" },
      { title: "Cookie Policy", path: "/cookie-policy" },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "contact@deannostech.com",
      link: "mailto:contact@deannostech.com",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      text: "123 Tech Street, San Francisco, CA 94105",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <FooterSection title="About DeannosTech" className="lg:col-span-2">
            <motion.button
              onClick={() => handleNavigation("/")}
              className="flex items-center group mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                DeannosTech
              </span>
            </motion.button>
            <p className="text-gray-400 leading-relaxed text-lg">
              Leading the digital transformation journey for enterprises
              worldwide with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </FooterSection>

          {/* Solutions */}
          <FooterSection title="Solutions">
            <ul className="space-y-3">
              {SOLUTIONS.map((solution) => (
                <li key={solution.path}>
                  <FooterLink to={solution.path}>{solution.title}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactItem
                  key={index}
                  {...info}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </ul>
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DeannosTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (text) => (
                  <motion.button
                    key={text}
                    onClick={() =>
                      handleNavigation(
                        `/${text.toLowerCase().replace(/\s+/g, "-")}`
                      )
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {text}
                  </motion.button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
