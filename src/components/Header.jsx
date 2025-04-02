import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  Users,
  BarChart3,
  Rocket,
  Shield,
  Lock,
  Network,
  Cpu,
  Zap,
  Activity,
} from "lucide-react";
import { SOLUTIONS, MAIN_NAV_ITEMS } from "../constants/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleNavigation = useScrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    {
      icon: Shield,
      title: "Data Centre",
      description: "Enterprise-grade data center solutions",
      path: "/solutions/datacentre",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Advanced networking infrastructure",
      path: "/solutions/networking",
    },
    {
      icon: Cpu,
      title: "AI/ML",
      description: "Artificial Intelligence and Machine Learning",
      path: "/solutions/ai-ml",
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("/")}
            className="flex items-center group"
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              DeannosTech
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {MAIN_NAV_ITEMS.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {item.title}
              </motion.button>
            ))}

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button
                whileHover={{ y: -2 }}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4"
                  >
                    {solutions.map((solution) => (
                      <motion.button
                        key={solution.path}
                        whileHover={{ x: 5 }}
                        onClick={() => handleNavigation(solution.path)}
                        className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <solution.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-semibold text-gray-900">
                            {solution.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {solution.description}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/get-started")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {MAIN_NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.path}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleNavigation(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                >
                  {item.title}
                </motion.button>
              ))}

              {/* Mobile Solutions */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Solutions
                </h3>
                <div className="space-y-2">
                  {solutions.map((solution) => (
                    <motion.button
                      key={solution.path}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleNavigation(solution.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <solution.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-medium text-gray-900">
                          {solution.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {solution.description}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleNavigation("/get-started");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
