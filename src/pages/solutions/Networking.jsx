import React from "react";
import { motion } from "framer-motion";
import { Network, Lock, Zap, Settings } from "lucide-react";

const Networking = () => {
  const features = [
    {
      icon: <Network className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Networking",
      description: "Robust and scalable network infrastructure solutions.",
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Network Security",
      description: "Advanced security measures to protect your network.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "High Performance",
      description: "Low-latency, high-bandwidth network solutions.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Network Management",
      description: "Comprehensive tools for network monitoring and control.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-blue-900 text-white"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Networking"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Networking Solutions
            </h1>
            <p className="text-xl max-w-3xl">
              Advanced networking solutions that connect your business to
              success. Secure, reliable, and high-performance network
              infrastructure.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Networking Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive networking solutions tailored to your business needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Networks
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Software-Defined Networking (SDN)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Network Virtualization
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Cloud Networking
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Security Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Next-Gen Firewalls
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Zero Trust Security
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  Threat Detection & Response
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Networking;
