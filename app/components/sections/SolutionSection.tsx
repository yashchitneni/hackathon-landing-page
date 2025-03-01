'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ConversationDemo from '../animations/ConversationDemo';

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const benefits = [
    {
      id: 1,
      title: "Higher Completion Rates",
      description: "Conversational interfaces see up to 4x higher completion rates than traditional forms.",
      icon: "📈",
    },
    {
      id: 2,
      title: "Better Data Quality",
      description: "Natural conversations lead to more accurate and complete information.",
      icon: "✅",
    },
    {
      id: 3,
      title: "Improved User Experience",
      description: "Users prefer the familiar, natural flow of conversation over rigid forms.",
      icon: "😊",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section 
      id="solution" 
      ref={ref}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-primary">Conversation</span> Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Replace rigid forms with natural, flowing conversations that users actually enjoy completing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <ConversationDemo />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {benefits.map((benefit) => (
              <motion.div 
                key={benefit.id}
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="text-3xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 