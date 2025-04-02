import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertCircle,
  Shield,
  Clock,
  RefreshCw,
} from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By accessing our services, you agree to be bound by these Terms of Service",
        "If you disagree with any part of the terms, you may not access our services",
        "These terms apply to all users and others who access or use our services",
      ],
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content and materials available on our services are protected by intellectual property rights",
        "You may not use our content without our express written permission",
        "Unauthorized use may result in legal action",
      ],
    },
    {
      icon: AlertCircle,
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account",
        "You must provide accurate and complete information",
        "You agree not to use our services for any illegal purposes",
      ],
    },
    {
      icon: Shield,
      title: "Service Modifications",
      content: [
        "We reserve the right to modify or discontinue our services at any time",
        "We may update these terms from time to time",
        "Continued use of our services after changes constitutes acceptance",
      ],
    },
    {
      icon: Clock,
      title: "Termination",
      content: [
        "We may terminate or suspend your account immediately",
        "Upon termination, your right to use our services will cease",
        "All provisions of the terms shall survive termination",
      ],
    },
    {
      icon: RefreshCw,
      title: "Updates and Changes",
      content: [
        "We may update our services from time to time",
        "We will notify you of any material changes",
        "Your continued use constitutes acceptance of changes",
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to DeannosTech. By accessing our services, you agree to be
              bound by these Terms of Service. Please read these terms carefully
              before using our services.
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
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:legal@deannostech.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  legal@deannostech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
