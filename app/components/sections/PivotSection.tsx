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

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative py-20"
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
      
      <div className="w-full max-w-4xl h-[400px] relative">
        <FormToConversation progress={progress} />
      </div>
    </section>
  );
} 