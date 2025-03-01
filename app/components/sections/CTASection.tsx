'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section 
      id="cta" 
      ref={ref}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-16 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to transform your data collection?
              </h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Join thousands of companies that have switched from forms to conversations and seen their completion rates soar.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#" 
                  className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-transparent text-white border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What our customers say
                </h3>
                <blockquote className="text-gray-600 italic mb-4">
                  "We saw our form completion rates jump from 23% to 82% after switching to the conversation interface. The ROI was immediate."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Product Manager, Acme Inc.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 