'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ConversationDemo from '../animations/ConversationDemo';

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'benefits' | 'stats' | 'features'>('benefits');

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

  const stats = [
    {
      id: 1,
      value: "85%",
      label: "Increase in form completion",
      description: "Users are much more likely to complete conversational forms"
    },
    {
      id: 2,
      value: "73%",
      label: "Reduction in form abandonment",
      description: "Fewer users give up halfway through the process"
    },
    {
      id: 3,
      value: "3.2x",
      label: "More data collected per user",
      description: "Conversations naturally extract more detailed information"
    }
  ];

  const features = [
    {
      id: 1,
      title: "Voice & Text Support",
      description: "Engage users through their preferred communication method",
      icon: "🎤"
    },
    {
      id: 2,
      title: "Smart Validation",
      description: "Natural language processing ensures quality responses",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Multi-Platform",
      description: "Deploy on web, mobile, or voice assistants with one configuration",
      icon: "📱"
    }
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

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="solution" 
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gray-50 p-3 border-b border-gray-100 flex items-center">
              <div className="flex space-x-2 mr-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-700">Conversation Interface</div>
            </div>
            <ConversationDemo />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex justify-center space-x-4 mb-6"
            >
              <button 
                onClick={() => setActiveTab('benefits')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'benefits' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Benefits
              </button>
              <button 
                onClick={() => setActiveTab('stats')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'stats' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Stats
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'features' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Features
              </button>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeTab === 'benefits' && (
                <motion.div
                  key="benefits"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  {benefits.map((benefit) => (
                    <motion.div 
                      key={benefit.id}
                      variants={itemVariants}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="text-3xl mr-4 bg-primary bg-opacity-10 p-2 rounded-full">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'stats' && (
                <motion.div
                  key="stats"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {stats.map((stat) => (
                    <motion.div 
                      key={stat.id}
                      variants={itemVariants}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-lg font-medium mb-2">{stat.label}</div>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  {features.map((feature) => (
                    <motion.div 
                      key={feature.id}
                      variants={itemVariants}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="text-3xl mr-4 bg-primary bg-opacity-10 p-2 rounded-full">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Forms vs. Conversations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="inline-block bg-red-100 text-red-800 text-lg font-semibold px-4 py-2 rounded-full">Traditional Forms</span>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-red-500 mr-3">❌</span>
                <p>Rigid structure with no flexibility</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-red-500 mr-3">❌</span>
                <p>High abandonment rates (60-80%)</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-red-500 mr-3">❌</span>
                <p>Confusing validation errors</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-red-500 mr-3">❌</span>
                <p>One-size-fits-all approach</p>
              </div>
              
              <div className="flex items-center p-3">
                <span className="text-red-500 mr-3">❌</span>
                <p>Limited to text input</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-lg font-semibold px-4 py-2 rounded-full">Conversational Forms</span>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-green-500 mr-3">✅</span>
                <p>Natural, adaptive flow</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-green-500 mr-3">✅</span>
                <p>High completion rates (85-95%)</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-green-500 mr-3">✅</span>
                <p>Friendly guidance and correction</p>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-100">
                <span className="text-green-500 mr-3">✅</span>
                <p>Personalized experience</p>
              </div>
              
              <div className="flex items-center p-3">
                <span className="text-green-500 mr-3">✅</span>
                <p>Voice and text support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 