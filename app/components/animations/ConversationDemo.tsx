'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MessageSender = 'bot' | 'user';

interface Message {
  id: number;
  text: string;
  sender: MessageSender;
  typing?: boolean;
}

interface ConversationMessage {
  text: string;
  sender: MessageSender;
}

export default function ConversationDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'd like to get to know you. What's your name?", sender: 'bot' },
  ]);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const conversation: ConversationMessage[] = [
    { text: "John Doe", sender: 'user' },
    { text: "Nice to meet you, John! How can I reach you by email?", sender: 'bot' },
    { text: "john@example.com", sender: 'user' },
    { text: "Perfect! And what's your phone number?", sender: 'bot' },
    { text: "(555) 123-4567", sender: 'user' },
    { text: "Thanks! One last question - what's your preferred contact method?", sender: 'bot' },
    { text: "Email, please", sender: 'user' },
    { text: "Great! I've got all the information I need. I'll be in touch via email soon!", sender: 'bot' },
  ];
  
  useEffect(() => {
    if (currentStep < conversation.length) {
      const timer = setTimeout(() => {
        // Add typing indicator if it's a bot message
        if (conversation[currentStep].sender === 'bot') {
          setIsTyping(true);
          
          setTimeout(() => {
            setIsTyping(false);
            addMessage(conversation[currentStep]);
            setCurrentStep(prev => prev + 1);
          }, 1500);
        } else {
          addMessage(conversation[currentStep]);
          setCurrentStep(prev => prev + 1);
        }
      }, conversation[currentStep].sender === 'user' ? 1000 : 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  
  const addMessage = (message: ConversationMessage) => {
    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, text: message.text, sender: message.sender }
    ]);
  };
  
  return (
    <div className="flex flex-col h-[500px] p-4">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold">Quick Chat</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div 
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{message.text}</p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <motion.div 
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex items-center">
          <input 
            type="text" 
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Type your message..."
            disabled
          />
          <button className="bg-primary text-white p-2 rounded-r-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 