import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Cpu, Cloud } from "lucide-react";

const DataCentre = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "High-Performance Infrastructure",
      description:
        "State-of-the-art servers and storage solutions for optimal performance.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Advanced Security",
      description:
        "Multi-layered security protocols to protect your valuable data.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "Scalable Architecture",
      description:
        "Flexible infrastructure that grows with your business needs.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud service providers.",
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
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Data Centre"
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
              Data Centre Solutions
            </h1>
            <p className="text-xl max-w-3xl">
              Next-generation data center infrastructure designed for the modern
              enterprise. Secure, scalable, and efficient solutions to power
              your digital transformation.
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-lg p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how our data centre solutions can help your business
              thrive.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              Contact Our Experts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCentre;
