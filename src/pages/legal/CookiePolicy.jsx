import React from "react";
import { motion } from "framer-motion";
import { Cookie, Settings, Shield, Eye, RefreshCw, Trash2 } from "lucide-react";

const CookiePolicy = () => {
  const sections = [
    {
      icon: Cookie,
      title: "What Are Cookies",
      content: [
        "Cookies are small text files stored on your device",
        "They help us provide and improve our services",
        "They enable certain features and functionality",
        "They help us understand how you use our website",
      ],
    },
    {
      icon: Settings,
      title: "Types of Cookies We Use",
      content: [
        "Essential cookies for basic functionality",
        "Analytics cookies to understand usage",
        "Preference cookies to remember your settings",
        "Marketing cookies for targeted advertising",
      ],
    },
    {
      icon: Shield,
      title: "How We Use Cookies",
      content: [
        "To maintain and improve our services",
        "To analyze website traffic and usage",
        "To personalize your experience",
        "To remember your preferences",
      ],
    },
    {
      icon: Eye,
      title: "Third-Party Cookies",
      content: [
        "We use trusted third-party services",
        "These services may set their own cookies",
        "We carefully select our partners",
        "You can control third-party cookies",
      ],
    },
    {
      icon: RefreshCw,
      title: "Cookie Duration",
      content: [
        "Session cookies (temporary)",
        "Persistent cookies (remain until expiry)",
        "First-party cookies (set by us)",
        "Third-party cookies (set by partners)",
      ],
    },
    {
      icon: Trash2,
      title: "Managing Cookies",
      content: [
        "You can control cookies through browser settings",
        "You can delete cookies at any time",
        "Some features may not work without cookies",
        "You can opt-out of non-essential cookies",
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
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              This Cookie Policy explains how DeannosTech uses cookies and
              similar technologies to recognize you when you visit our website.
              It explains what these technologies are and why we use them, as
              well as your rights to control our use of them.
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
                If you have any questions about our Cookie Policy, please
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

export default CookiePolicy;
