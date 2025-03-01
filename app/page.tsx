"use client";

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import HeroSection from '../components/sections/HeroSection';
import PainPointsSection from '../components/sections/PainPointsSection';
import PivotSection from '../components/sections/PivotSection';
import SolutionSection from '../components/sections/SolutionSection';
import ProductShowcaseSection from '../components/sections/ProductShowcaseSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <PainPointsSection />
      <PivotSection />
      <SolutionSection />
      <ProductShowcaseSection />
      <CTASection />
    </main>
  );
} 