"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ['Data Science', 'Analytics Engineering', 'Machine Learning Engineering']; // Replace with your words

export default function WordCycle() {


  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the duration to control the animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-5 inline-block text-center whitespace-nowrap">
      {words.map((word, index) => (
        <motion.h1
          className={`inline-block opacity-0 transition-opacity duration-1000 ${
            index === currentWordIndex ? 'opacity-100' : 'opacity-0'
          } text-2xl font-bold` } // Adjust text size and style as needed
          key={index}
          initial={{ opacity: 0, position: 'absolute', top: 0, left: 0 }}
          animate={{
            opacity: currentWordIndex === index ? 1 : 0,
          }}
          transition={{
            duration: 1, // Adjust the duration as needed
          }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
};