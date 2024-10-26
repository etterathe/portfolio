"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, motion } from "framer-motion";
import Skill from "./skill";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <p className="mb-8">
        I develop my projects in different technologies, here are some:
      </p>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-between gap-4"
      >
        {skillsData.map((cardItem) => (
          <Skill key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </section>
  );
}
