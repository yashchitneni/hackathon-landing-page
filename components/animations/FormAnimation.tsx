'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FormAnimation() {
  const [formState, setFormState] = useState({
    height: 100,
    fields: 1,
    error: false,
    shake: false,
    submitted: false,
  });

  // Simulate form growing over time
  useEffect(() => {
    const growInterval = setInterval(() => {
      if (formState.fields < 5) {
        setFormState(prev => ({
          ...prev,
          height: prev.height + 70,
          fields: prev.fields + 1,
        }));
      } else if (!formState.error) {
        setFormState(prev => ({
          ...prev,
          error: true,
        }));
        
        // Trigger shake animation after error
        setTimeout(() => {
          setFormState(prev => ({ ...prev, shake: true }));
          
          // Reset shake
          setTimeout(() => {
            setFormState(prev => ({ ...prev, shake: false }));
          }, 1000);
        }, 1500);
      }
    }, 2000);

    return () => clearInterval(growInterval);
  }, [formState.fields, formState.error]);

  // Form field variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  // Error message variants
  const errorVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    },
  };

  // Shake animation
  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-xl p-6 w-full"
      style={{ height: formState.height }}
      animate={formState.shake ? "shake" : undefined}
      variants={shakeVariants}
    >
      <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
      
      {/* Name field - always visible */}
      <motion.div 
        className="mb-4"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={formVariants}
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="John Doe"
        />
      </motion.div>
      
      {/* Email field */}
      {formState.fields >= 2 && (
        <motion.div 
          className="mb-4"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={formVariants}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="john@example.com"
          />
        </motion.div>
      )}
      
      {/* Phone field */}
      {formState.fields >= 3 && (
        <motion.div 
          className="mb-4"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={formVariants}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input 
            type="tel" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="(555) 123-4567"
          />
        </motion.div>
      )}
      
      {/* Address field */}
      {formState.fields >= 4 && (
        <motion.div 
          className="mb-4"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={formVariants}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="123 Main St"
          />
        </motion.div>
      )}
      
      {/* Credit Card field - problematic field */}
      {formState.fields >= 5 && (
        <motion.div 
          className="mb-4"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={formVariants}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Credit Card Number
          </label>
          <input 
            type="text" 
            className={`w-full p-2 border ${formState.error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="XXXX XXXX XXXX XXXX"
          />
          
          {/* Error message */}
          {formState.error && (
            <motion.p 
              className="text-red-500 text-sm mt-1"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              Invalid credit card format. Please try again.
            </motion.p>
          )}
        </motion.div>
      )}
      
      {/* Submit button */}
      <motion.button
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Submit
      </motion.button>
    </motion.div>
  );
} 