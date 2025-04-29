import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ title, date, location, description }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:shadow-red-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-red-500">{title}</h3>
      <p className="text-sm text-gray-300 mt-1">{date} • {location}</p>
      <p className="text-gray-400 text-sm mt-3">{description}</p>
    </motion.div>
  );
};

export default EventCard;

