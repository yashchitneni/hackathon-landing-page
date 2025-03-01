'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface FormToConversationProps {
  progress: MotionValue<number>;
}

export default function FormToConversation({ progress }: FormToConversationProps) {
  // Transform values based on scroll progress
  const formOpacity = useTransform(progress, [0, 0.4], [1, 0]);
  const formScale = useTransform(progress, [0, 0.4], [1, 0.8]);
  const formY = useTransform(progress, [0, 0.4], [0, -50]);
  
  const conversationOpacity = useTransform(progress, [0.4, 0.8], [0, 1]);
  const conversationScale = useTransform(progress, [0.4, 0.8], [0.8, 1]);
  const conversationY = useTransform(progress, [0.4, 0.8], [50, 0]);

  return (
    <div className="relative w-full h-full">
      {/* Form View */}
      <motion.div 
        className="absolute inset-0 bg-white rounded-lg shadow-xl p-6"
        style={{ 
          opacity: formOpacity,
          scale: formScale,
          y: formY,
        }}
      >
        <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <button className="w-full bg-primary text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </div>
      </motion.div>
      
      {/* Conversation View */}
      <motion.div 
        className="absolute inset-0 bg-white rounded-lg shadow-xl p-6"
        style={{ 
          opacity: conversationOpacity,
          scale: conversationScale,
          y: conversationY,
        }}
      >
        <div className="flex flex-col h-full">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold">Quick Chat</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Hi there! I'd like to get to know you. What's your name?</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                <p>John Doe</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Nice to meet you, John! How can I reach you by email?</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                <p>john@example.com</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Perfect! And what's your phone number?</p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex items-center">
              <input 
                type="text" 
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
                placeholder="Type your message..."
              />
              <button className="bg-primary text-white p-2 rounded-r-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 