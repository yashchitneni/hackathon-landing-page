import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FormGrowthAnimation() {
  const [stage, setStage] = useState(0);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Reset function
  const resetAnimation = () => {
    setStage(0);
    setError(false);
    setShake(false);
    setIsPlaying(true);
  };
  
  // Simulate form growth over time
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setTimeout(() => {
      if (stage < 4) {
        setStage(stage + 1);
      } else if (!error) {
        setError(true);
        setTimeout(() => {
          setShake(true);
          setTimeout(() => setShake(false), 500);
          setIsPlaying(false); // Stop after error animation
        }, 1000);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [stage, error, isPlaying]);
  
  // Form fields based on current stage
  const formFields = [
    { label: "Full Name", placeholder: "John Doe", type: "text" },
    { label: "Email", placeholder: "john@example.com", type: "email" },
    { label: "Phone", placeholder: "(555) 123-4567", type: "tel" },
    { label: "Address", placeholder: "123 Main St", type: "text" },
    { label: "Credit Card", placeholder: "XXXX XXXX XXXX XXXX", type: "text", hasError: error }
  ];
  
  return (
    <div className="relative">
      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto"
        animate={{
          height: 150 + (stage * 70),
        }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
        
        <motion.div 
          className="space-y-4"
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {formFields.slice(0, stage + 1).map((field, index) => (
            <motion.div 
              key={index}
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input 
                type={field.type} 
                className={`w-full p-2 border ${field.hasError ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder={field.placeholder}
              />
              {field.hasError && (
                <motion.p 
                  className="text-red-500 text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  Invalid format. Please try again.
                </motion.p>
              )}
            </motion.div>
          ))}
          
          <motion.button
            className="w-full bg-primary text-white py-2 px-4 rounded-md mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </motion.div>
      </motion.div>
      
      {!isPlaying && (
        <motion.div 
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            onClick={resetAnimation}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
} 