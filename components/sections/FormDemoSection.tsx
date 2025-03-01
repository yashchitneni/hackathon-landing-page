'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FormGrowthAnimation from '../animations/FormGrowthAnimation';

export default function FormDemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gray-50"
      id="form-demo"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience the <span className="text-error">Frustration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch as this form grows increasingly complex and eventually fails, just like many real-world forms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <FormGrowthAnimation />
        </motion.div>
      </div>
    </section>
  );
} 