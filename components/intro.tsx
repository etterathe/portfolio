"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <h1 className='mb-5 mt-3 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
            <span className='font-semibold text-4xl text-slate-900'> <motion.span 
            initial={{opacity: 0, scale: 0}}
            animate={{opacity:1, scale:1}}
            transition={{
                type:"spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7
            }}>👋</motion.span> Hi, I'm Wiktor.
            <span className=' block text-slate-600 font-normal text-2xl'>AI/ML Engineer based in Poland.</span>
            </span>
        </h1>
        <p className='mb-10 mt-3 px-4 text-slate-750 text-[1rem] md:text-xl'>I translate business needs into aesthetic and intuitive data products. Currently, I am helping with the implementation and integration of machine learning models into ERP systems.</p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium'
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        delay: 0.1,
                    }}>
            <Link href="mailto:w.rapacz@protonmail.com" className='group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-slate-950 active:scale-105 transition'>Contact me <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition'/></Link>
            <a className='bg-white p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10' href='https://linkedin.com' target='_blank'> <BsLinkedin /></a>
            <a className='bg-white p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10' href='https://github.com' target='_blank'> <BsGithub /></a>
        </motion.div>
    </section>
  )
}
