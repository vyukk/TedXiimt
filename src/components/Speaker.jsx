import React from 'react';
import { motion } from 'framer-motion';

const Speaker = ({ image, name, title, description }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 max-w-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-xl mb-4 border border-white/10"
      />
      <h3 className="text-xl font-semibold text-red-500">{name}</h3>
      <p className="text-sm text-gray-300 italic mb-2">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Speaker;
