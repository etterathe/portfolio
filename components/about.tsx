"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I am an artificial intelligence engineer that focus on creating
        practical, domain knowledge driven solutions following best MLOps
        practices. My ambition is to become a T-shaped developer, continuously
        experimenting with new ideas and technologies.
      </p>
      <p>
        Beyond my professional work, I have a deep interest in exploring
        unconventional ideas in philosophy, music, and art. When I'm not
        immersed in them, you can find me curled up with a good book and my cats
        or playing and developing indie games with my friends.
      </p>
    </motion.section>
  );
}
