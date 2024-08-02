import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mockImg from "@/public/skeleton.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const skillsData = [
  "Python",
  "SQL",
  "Go",
  "Java",
  "JavaScript",
  "TypeScript",
  "Git",
  "Docker",
  "MLFlow",
  "Langchain",
  "Weaviate",
  "Argilla",
  "Spark",
  "Kafka",
] as const;


export const projectsData = [
  {
    title: "Project 1",
    description:
      "Very funny minimalistic and eccentric placeholder for project description. It was written with being deleted later in mind. Doesn't matter tho.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: mockImg,
  },
  {
    title: "Project 2",
    description:
      "A new revolution in minimalistic and eccentric placeholders for project descriptions. It was written with being deleted later in mind. Doesn't matter tho.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: mockImg,
  },
  {
    title: "Project 3",
    description:
      "A public responsive and minimalistic placeholder for project description. It was written with being deleted later in mind. Doesn't matter tho.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: mockImg,
  },
] as const;