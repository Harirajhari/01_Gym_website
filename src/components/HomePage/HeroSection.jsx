import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight } from 'lucide-react';
import GetStartedForm from './GetStartedForm'; // Import the form component

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative min-h-[500px] md:min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/fitness-hero.jpg"
        alt="Fitness Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl">
            Build Your Best Body <br className="hidden md:block" />
            with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff4d4d]">
              FitnessPro
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-xl drop-shadow-md">
            Personalized workout and nutrition plans to help you reach your goals.
            Stay strong, stay consistent, and track your progress effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#E50914] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition transform hover:scale-105 flex items-center gap-2"
            >
              <Dumbbell className="w-5 h-5" />
              Get Started
            </button>
            <button className="bg-white text-[#E50914] border border-[#E50914] px-6 py-3 rounded-full font-semibold hover:bg-[#ffe5e5] transition transform hover:scale-105 flex items-center gap-2">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Form Popup */}
      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default HeroSection;