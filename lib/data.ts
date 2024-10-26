import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mockImg from "@/public/skeleton.png";
import historiographyImg from "@/public/projects/historiography.png";
import mediumImg from "@/public/projects/medium.png";
import pythonLogo from "@/public/skills/python.svg";
import sqlLogo from "@/public/skills/sql.svg";
import scikitlearnLogo from "@/public/skills/scikitlearn.svg";
import tensorflowLogo from "@/public/skills/tensorflow.svg";
import mlflowLogo from "@/public/skills/mlflow.svg";
import transformersLogo from "@/public/skills/transformers.svg";
import gitLogo from "@/public/skills/git.svg";
import dockerLogo from "@/public/skills/docker.svg";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    description: "Programming Language",
    imageUrl: pythonLogo,
    bgColor: "bg-[#3776AB]/20",
  },
  {
    name: "SQL",
    description: "Database Query Language",
    imageUrl: sqlLogo,
    bgColor: "bg-[#00618A]/20",
  },
  {
    name: "TensorFlow",
    description: "Deep Learning Library",
    imageUrl: tensorflowLogo,
    bgColor: "bg-[#FF6F00]/20",
  },
  {
    name: "Scikit-learn",
    description: "Machine Learning Library",
    imageUrl: scikitlearnLogo,
    bgColor: "bg-[#F7931E]/20",
  },
  {
    name: "Git",
    description: "Version Control System",
    imageUrl: gitLogo,
    bgColor: "bg-[#F05032]/20",
  },
  {
    name: "Docker",
    description: "Containerization Platform",
    imageUrl: dockerLogo,
    bgColor: "bg-[#2496ED]/20",
  },
  {
    name: "MLFlow",
    description: "Experiment Tracking Tool",
    imageUrl: mlflowLogo,
    bgColor: "bg-[#E15A42]/20",
  },
  {
    name: "Transformers",
    description: "NLP Library",
    imageUrl: transformersLogo,
    bgColor: "bg-[#FFDA4D]/20",
  },
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
