'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FormAnimation from '../../app/components/animations/FormAnimation';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'builder' | 'user'>('user');
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative py-20"
    >
      <motion.div 
        className="text-center max-w-5xl px-4"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Forms are <span className="text-error">broken</span>.<br />
          <span className="text-primary">Conversations</span> are better.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the frustration of traditional forms and discover a better way to collect information.
        </motion.p>
        
        <motion.div 
          className="flex justify-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => setActiveTab('user')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === 'user' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            User Experience
          </button>
          <button 
            onClick={() => setActiveTab('builder')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === 'builder' 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Form Builder
          </button>
        </motion.div>
        
        <div className="relative h-[450px] w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'user' ? (
              <motion.div
                key="user-experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <FormAnimation />
              </motion.div>
            ) : (
              <motion.div
                key="builder-experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-lg shadow-xl p-6 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Form Builder</h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Form Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Real Estate Contact Form"
                    defaultValue="Real Estate Contact Form"
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Dynamic Variables
                    </label>
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">
                      + Add New
                    </button>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      name
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      location
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      property_type
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Opening Phrase
                  </label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={2}
                    defaultValue="Hey {name}! Thanks for visiting us at RealEstate. In order to help you, we have a few questions to ask and would love to hear your thoughts!"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Questions (3)</span>
                  <button className="bg-primary text-white text-sm px-3 py-1 rounded hover:bg-indigo-700">
                    + Add Question
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#pain-points" className="btn btn-primary">
            See the Problem
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 