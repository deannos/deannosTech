import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { SERVICES } from "../../constants/navigation";

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = service.icon as unknown as LucideIcon;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <div className="mb-4">
        <IconComponent className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <a
        href={service.path}
        className="text-blue-600 flex items-center hover:text-blue-700"
      >
        Learn more
      </a>
    </motion.div>
  );
};

export default ServiceCard;
