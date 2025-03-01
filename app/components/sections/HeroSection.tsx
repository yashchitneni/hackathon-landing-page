'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FormAnimation from '../animations/FormAnimation';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative py-20"
    >
      <motion.div 
        className="text-center max-w-4xl px-4"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Forms are <span className="text-error">broken</span>.<br />
          <span className="text-primary">Conversations</span> are better.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the frustration of traditional forms and discover a better way to collect information.
        </motion.p>
        
        <div className="relative h-[400px] w-full max-w-2xl mx-auto">
          <FormAnimation />
        </div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#pain-points" className="btn btn-primary">
            See the Problem
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 