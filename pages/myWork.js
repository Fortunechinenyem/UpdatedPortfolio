import React, { useEffect, useState } from "react";
import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

// Project images
import Work1 from "../public/image/for portfolio3.PNG";
import Work2 from "../public/image/nriomap.JPG";
import Work3 from "../public/image/kauto1.JPG";
import Work5 from "../public/image/loveeyp.JPG";
import Work7 from "../public/image/revibep.JPG";
import Work8 from "../public/image/gamingp.JPG";
import Work9 from "../public/image/zenp.JPG";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: "Zendtrax",
      description:
        "Collaborated on this live logistics application providing real-time package tracking and personalized shipping services. Implemented key features including shipment status updates and customer notifications.",
      image: Work9,
      link: "https://www.zendtrax.co/",
      github: null,
      tags: ["Next.js", "Tailwind CSS"],
      role: "Frontend Developer",
      impact:
        "Improved user engagement by 30% through optimized tracking interface",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        ,
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
      ],
    },
    {
      title: "Flincap",
      description:
        "Developed core features for this crypto OTC exchange with automatic fiat payout. Enhanced security protocols and optimized transaction flows for better user experience.",
      image: Work1,
      link: "https://flincap.com/",
      github: null,
      tags: ["Next.js", "MySQL", "Cryptocurrency"],
      role: "Frontend Developer",
      impact:
        "Reduced payout processing time from 30 minutes to under 5 minutes",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      title: "Loveey",
      description:
        "Built this Valentine-themed interactive application with personalized messaging and animation features.",
      image: Work5,
      link: "https://loveey-eight.vercel.app/",
      github: "#",
      tags: ["React", "Firebase", "CSS Animations"],
      role: "Solo Developer",
      impact: "Achieved 10,000+ visits during Valentine season",
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        {
          name: "Framer Motion",
          icon: <span className="text-purple-500">FM</span>,
        },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
    {
      title: "ReVibe",
      description:
        "Developed this e-commerce platform for pre-loved items with integrated payment processing and inventory management.",
      image: Work7,
      link: "https://re-vibe.vercel.app/",
      github: "#",
      tags: ["Next.js", "Stripe", "Firebase"],
      role: "Fullstack Developer",
      impact: "Implemented secure checkout reducing failed transactions by 25%",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
    {
      title: "Gaming Mental Health App",
      description:
        "Created this mental health management app with journaling, mood tracking, and gamified rewards system to encourage user engagement.",
      image: Work8,
      link: "https://gaming-mentalhealth-app.vercel.app/",
      github: "#",
      tags: ["React", "Firebase", "Gamification"],
      role: "Frontend Developer",
      impact: "Increased daily active users by 40% through reward system",
      tech: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Nrioma",
      description:
        "Built this food services platform with menu management, online ordering, and delivery tracking features.",
      image: Work2,
      link: "https://nrioma.vercel.app/",
      github: "#",
      tags: ["Next.js", "Tailwind CSS", "REST API"],
      role: "Fullstack Developer",
      impact: "Reduced order processing time by 35% through optimized workflow",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
    {
      title: "Kruss Automotive",
      description:
        "Developed this automotive service platform with customer booking system and technician dashboards for service management.",
      image: Work3,
      link: "https://kruss-automotive.vercel.app/",
      github: "#",
      tags: ["Next.js", "Tailwind", "Firebase"],
      role: "Fullstack Developer",
      impact:
        "Improved service completion rate by 28% through dashboard features",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
  ];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  const filters = [
    "All",
    "Next.js",
    "React",
    "Node.js",
    "Firebase",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6">
            My Technical Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of my work highlighting technical challenges,
            solutions, and measurable impact.
          </p>
        </motion.section>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {project.role}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Technical Impact:
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                      >
                        {tech.icon}
                        <span className="ml-1">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {/* Project Links */}
                <div className="flex justify-between mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <FiExternalLink className="mr-1" />
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      <FiGithub className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Want to see more of my code?
          </h3>
          <a
            href="https://github.com/Fortunechinenyem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-lg"
          >
            <FiGithub className="mr-2 text-xl" />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default MyWork;
