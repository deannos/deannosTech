import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Share2, Database, Trash2 } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Business information (company name, industry)",
        "Usage data and analytics",
        "Communication preferences",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information",
      ],
    },
    {
      icon: Eye,
      title: "Data Protection",
      content: [
        "We implement appropriate security measures",
        "Your data is encrypted during transmission",
        "Regular security assessments are conducted",
        "Access to personal data is strictly controlled",
      ],
    },
    {
      icon: Share2,
      title: "Data Sharing",
      content: [
        "We do not sell your personal information",
        "Data is shared only with trusted partners",
        "Third-party services are carefully vetted",
        "You have control over data sharing preferences",
      ],
    },
    {
      icon: Database,
      title: "Data Storage",
      content: [
        "Data is stored in secure cloud environments",
        "Regular backups are performed",
        "Data retention policies are clearly defined",
        "Cross-border data transfers are protected",
      ],
    },
    {
      icon: Trash2,
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate data",
        "Request data deletion",
        "Object to data processing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              At DeannosTech, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our services.
            </p>

            <div className="grid gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-100 pb-8 last:border-0"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <ul className="space-y-2">
                        {section.content.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-600"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:privacy@deannostech.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  privacy@deannostech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
