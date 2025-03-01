'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProductShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const features = [
    {
      id: 1,
      title: "Natural Language Processing",
      description: "Our AI understands context and intent, creating a natural conversation flow.",
      icon: "🧠",
    },
    {
      id: 2,
      title: "Adaptive Questioning",
      description: "Questions adapt based on previous answers, eliminating irrelevant fields.",
      icon: "🔄",
    },
    {
      id: 3,
      title: "Multi-Platform Support",
      description: "Works seamlessly across web, mobile, and messaging platforms.",
      icon: "📱",
    },
    {
      id: 4,
      title: "Easy Integration",
      description: "Simple API integration with your existing systems and databases.",
      icon: "🔌",
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
      id="product" 
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
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our conversational interface platform comes with everything you need to transform your data collection.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mr-4 bg-primary bg-opacity-10 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#cta" className="btn btn-secondary">
            See It In Action
          </a>
        </motion.div>
      </div>
    </section>
  );
} 