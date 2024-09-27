import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mockImg from "@/public/skeleton.png";
import historiographyImg from "@/public/historiography.png";
import mediumImg from "@/public/medium.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Java",
  "JavaScript",
  "TypeScript",
  "Git",
  "Docker",
  "Django",
  "FastAPI",
  "Streamlit",
  "Scikit-learn",
  "Tensorflow",
  "MLFlow",
  "Transformers",
  "Langchain",
  "LanceDB",
  "Argilla",
  "Spark",
] as const;

export const projectsData = [
  {
    title: "🔮 medium",
    description:
      "Chat with your SQL databases and discover world of new insights. Natural language to SQL translation.",
    tags: ["Python", "Streamlit", "NLP", "NL2SQL"],
    imageUrl: mediumImg,
    projectUrl: "https://github.com/etterathe/medium",
  },
  {
    title: "📜 historiography",
    description:
      "Discover web browsing habits on your own hyperlink graph. Web extension visualizing web history along with website community detection.",
    tags: ["JavaScript", "Graph", "Label Propagation Algorithm"],
    imageUrl: historiographyImg,
    projectUrl: "https://github.com/etterathe/historiography",
  },
  // Work In Progress
  // {
  //   title: "✉️ shomei",
  //   description:
  //     "Extract personal data from your mails. Email segmentation powered by named entity recognition.",
  //   tags: ["React", "Next.js", "Tailwind", "Named Entity Recognition"],
  //   imageUrl: mockImg,
  // },
] as const;
