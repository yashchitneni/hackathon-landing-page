'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollBasedFormAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress to animation stages
  const stage = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, 1, 2, 3, 4]);
  const error = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const shake = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 0]);
  
  // Custom transform for shake effect
  const shakeEffect = useTransform(shake, (value: number) => {
    return value === 0 ? 0 : Math.sin(value * Math.PI * 10) * 10;
  });
  
  // Form fields
  const formFields = [
    { label: "Full Name", placeholder: "John Doe", type: "text" },
    { label: "Email", placeholder: "john@example.com", type: "email" },
    { label: "Phone", placeholder: "(555) 123-4567", type: "tel" },
    { label: "Address", placeholder: "123 Main St", type: "text" },
    { label: "Credit Card", placeholder: "XXXX XXXX XXXX XXXX", type: "text" }
  ];
  
  return (
    <div 
      ref={containerRef}
      className="min-h-[150vh] flex flex-col items-center justify-start pt-20"
    >
      <div className="sticky top-20 w-full max-w-md mx-auto">
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-6 w-full"
          style={{
            height: useTransform(stage, [0, 1, 2, 3, 4], [150, 220, 290, 360, 430])
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
          
          <motion.div 
            className="space-y-4"
            style={{ x: shakeEffect }}
          >
            {formFields.map((field, index) => {
              // Determine if this field should show an error
              const isErrorField = index === 4;
              
              return (
                <motion.div 
                  key={index}
                  className="space-y-1"
                  style={{
                    opacity: useTransform(stage, [index - 0.5, index], [0, 1]),
                    y: useTransform(stage, [index - 0.5, index], [20, 0])
                  }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  {isErrorField ? (
                    <motion.input 
                      type={field.type} 
                      className="w-full p-2 border rounded-md"
                      style={{
                        borderColor: useTransform(error, [0, 1], ['#D1D5DB', '#EF4444'])
                      }}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input 
                      type={field.type} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder={field.placeholder}
                    />
                  )}
                  {isErrorField && (
                    <motion.p 
                      className="text-red-500 text-sm"
                      style={{
                        opacity: error,
                        height: useTransform(error, [0, 1], [0, 'auto'])
                      }}
                    >
                      Invalid format. Please try again.
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
            
            <motion.button
              className="w-full bg-primary text-white py-2 px-4 rounded-md mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 