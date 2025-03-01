'use client';

import { motion } from 'framer-motion';

interface VignetteCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function VignetteCard({ title, description, icon, index }: VignetteCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      }
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 