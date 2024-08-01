"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{opacity: 0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-4'>I am an artificial intelligence engineer with a passion for creating innovative machine learning models and contributing to the development of robust MLOps platforms. My focus is now directed on leveraging language models to enhance enterprise systems, driving efficiency and intelligence in business operations.</p>
        <p>Beyond my professional work, I have a deep interest in exploring unconventional ideas in philosophy, music, and art. As a developer, I often collaborate with friends to develop indie games and applications in an open-source environment.</p>
    </motion.section>
  )
}