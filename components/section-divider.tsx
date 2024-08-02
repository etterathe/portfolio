"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center space-y-2 my-24 hidden sm:flex'
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay: 0.125}}
    >
      {[0, 1, 2].map((index) => (
        <div 
          key={index} 
          className='bg-gray-300 h-2 w-2 rounded-full'
        />
      ))}
    </motion.div>
  )
}