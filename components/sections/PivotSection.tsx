'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FormToConversation from '../animations/FormToConversation';

export default function PivotSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.8, 1, 1, 0.8]);
  const progress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  // Transform values for the split view
  const leftPanelX = useTransform(progress, [0, 1], ['0%', '-10%']);
  const rightPanelX = useTransform(progress, [0, 1], ['0%', '10%']);
  const splitOpacity = useTransform(progress, [0.7, 1], [0, 1]);

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative py-20"
      id="pivot"
    >
      <motion.div 
        className="text-center max-w-4xl px-4 mb-12"
        style={{ opacity, scale }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What if we <span className="text-primary">reimagined</span> forms?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Instead of rigid forms, what if we used natural conversations to collect information?
        </motion.p>
      </motion.div>
      
      <div className="w-full max-w-5xl h-[500px] relative">
        {/* Main transformation animation */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: useTransform(progress, [0, 0.7], [1, 0]) }}
        >
          <FormToConversation progress={progress} />
        </motion.div>
        
        {/* Split view that appears after the transformation */}
        <motion.div 
          className="absolute inset-0 flex"
          style={{ opacity: splitOpacity }}
        >
          {/* Form Builder Side */}
          <motion.div 
            className="w-1/2 p-4"
            style={{ x: leftPanelX }}
          >
            <div className="bg-white rounded-lg shadow-xl p-4 h-full overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Form Builder</h3>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Admin View</span>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question #1
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  defaultValue="Where are you looking to buy/rent/sell in Austin?"
                />
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Expected Response
                  </label>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Short Answer</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <div className="text-sm font-medium mb-1">Good Examples:</div>
                  <div className="text-xs text-gray-600 mb-2">
                    <div>"Hyde Park"</div>
                    <div>"East Austin"</div>
                    <div>"Downtown"</div>
                  </div>
                  
                  <div className="text-sm font-medium mb-1">Bad Examples:</div>
                  <div className="text-xs text-gray-600">
                    <div>"I'm hungry"</div>
                    <div>"I don't want to buy"</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <button className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
                  Previous
                </button>
                <button className="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-indigo-700">
                  Next Question
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* User Experience Side */}
          <motion.div 
            className="w-1/2 p-4"
            style={{ x: rightPanelX }}
          >
            <div className="bg-white rounded-lg shadow-xl p-4 h-full overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Conversation</h3>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">User View</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 h-[350px]">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800 text-sm">Hey there! Thanks for visiting us at RealEstate. In order to help you, we have a few questions to ask and would love to hear your thoughts!</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800 text-sm">Where are you looking to buy/rent/sell in Austin?</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hyde Park</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800 text-sm">Great choice! Hyde Park is a beautiful neighborhood. What's your budget range?</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex items-center">
                  <input 
                    type="text" 
                    className="flex-1 p-2 text-sm border border-gray-300 rounded-l-md focus:outline-none"
                    placeholder="Type your message..."
                  />
                  <button className="bg-primary text-white p-2 rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-12 text-center"
        style={{ opacity: splitOpacity }}
      >
        <p className="text-lg text-gray-600 mb-4">
          Create once, deploy everywhere - from web to voice assistants
        </p>
        <a href="#solution" className="btn btn-primary">
          See How It Works
        </a>
      </motion.div>
    </section>
  );
} 