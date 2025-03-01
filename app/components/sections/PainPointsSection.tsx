'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VignetteCard from '../ui/VignetteCard';

export default function PainPointsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const painPoints = [
    {
      id: 1,
      title: "Abandonment",
      description: "58% of users abandon forms after seeing how long they are. That's lost revenue and missed opportunities.",
      icon: "🏃‍♂️",
    },
    {
      id: 2,
      title: "Confusion",
      description: "Users get stuck on complex fields, leading to incorrect data or frustration-driven abandonment.",
      icon: "🤔",
    },
    {
      id: 3,
      title: "Errors",
      description: "Validation errors are the #1 reason users give up on forms, especially on mobile devices.",
      icon: "❌",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section 
      id="pain-points" 
      ref={ref}
      className="bg-gray-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Form <span className="text-error">Problem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional forms create friction in the user experience, leading to frustration and abandonment.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {painPoints.map((point) => (
            <VignetteCard 
              key={point.id}
              title={point.title}
              description={point.description}
              icon={point.icon}
              index={point.id - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 