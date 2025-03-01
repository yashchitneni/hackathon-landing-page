'use client';

import ScrollBasedFormAnimation from '../animations/ScrollBasedFormAnimation';

export default function ScrollFormDemoSection() {
  return (
    <section className="bg-gray-100" id="scroll-form-demo">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Scroll to <span className="text-primary">Control</span> the Form
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scroll down to see how the form grows and eventually fails. You control the pace!
          </p>
        </div>
        
        <ScrollBasedFormAnimation />
      </div>
    </section>
  );
} 