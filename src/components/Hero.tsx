'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const handleEnterSite = () => {
    router.push('/main');
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-5xl font-bold mb-4">Hello, I&apos;m Evan</h2>
        <p className="text-xl mb-8">A developer studying in Sydney, learning AI, and passionate about all new things and tech products.</p>
        
        <motion.button
          onClick={handleEnterSite}
          className="bg-teal-400 hover:bg-teal-300 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter Site
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;