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

import Work1 from "../public/image/for portfolio3.PNG";
import Work2 from "../public/image/nriomap.JPG";
import Work3 from "../public/image/kauto1.JPG";
import Work5 from "../public/image/loveeyp.JPG";
import Work7 from "../public/image/revibep.JPG";
import Work8 from "../public/image/gamingp.JPG";
import Work9 from "../public/image/nj.JPG";
import Work10 from "../public/image/fj.JPG";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: "Naija Chronicles",
      description:
        "This app was created to celebrate Nigeria's legacy and heritage.",
      image: Work9,
      link: "https://naija-chronicles.vercel.app/",
      github: null,
      tags: ["Next.js", "Tailwind CSS"],
      role: "Software Developer",
      impact:
        "Great reviews and engagement was tracked via the google analytics feature",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
          color: "from-cyan-500/20 to-cyan-600/20",
        },
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
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
        {
          name: "MySQL",
          icon: <FaDatabase className="text-blue-500" />,
          color: "from-blue-500/20 to-blue-600/20",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          color: "from-green-500/20 to-green-600/20",
        },
      ],
    },
    {
      title: "FJ Unique Services",
      description: "A simple food services website for a small business .",
      image: Work10,
      link: "https://fj-unique-services.vercel.app/",
      github: null,
      tags: ["Next.js", "Whatsapp"],
      role: "Web Developer",
      impact: "Improved leads and sales with better user experience",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
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
      impact: "Achieved 100+ visits during Valentine season",
      tech: [
        {
          name: "React",
          icon: <FaReact className="text-cyan-400" />,
          color: "from-cyan-500/20 to-cyan-600/20",
        },
        {
          name: "Framer Motion",
          icon: <span className="text-purple-400 font-bold">FM</span>,
          color: "from-purple-500/20 to-purple-600/20",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "from-orange-500/20 to-orange-600/20",
        },
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
      role: "Software Developer",
      impact: "Implemented secure checkout reducing failed transactions by 25%",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "from-orange-500/20 to-orange-600/20",
        },
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
        {
          name: "React",
          icon: <FaReact className="text-cyan-400" />,
          color: "from-cyan-500/20 to-cyan-600/20",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "from-orange-500/20 to-orange-600/20",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
          color: "from-blue-500/20 to-blue-600/20",
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
      role: "Software Developer",
      impact: "Reduced order processing time by 35% through optimized workflow",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
          color: "from-cyan-500/20 to-cyan-600/20",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "from-orange-500/20 to-orange-600/20",
        },
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
      role: "Software Developer",
      impact:
        "Improved service completion rate by 28% through dashboard features",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          color: "from-gray-800 to-black",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
          color: "from-cyan-500/20 to-cyan-600/20",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-orange-400" />,
          color: "from-orange-500/20 to-orange-600/20",
        },
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
    "Tailwind CSS",
  ];

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              My <span className="text-blue-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A curated collection of my technical work showcasing innovative
              solutions, measurable impact, and cutting-edge technologies.
            </p>
          </motion.section>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                  activeFilter === filter
                    ? "bg-blue-500  text-white shadow-2xl border-blue-500/50"
                    : "bg-slate-800/50 text-gray-300 border-slate-700 hover:border-blue-500/30 hover:text-white"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-slate-700 hover:border-blue-500/50"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Section */}
                  <div className="mb-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Technical Impact:
                    </h4>
                    <p className="text-sm text-gray-300">{project.impact}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center px-3 py-2 rounded-lg bg-gradient-to-br ${tech.color} border border-slate-600 text-xs backdrop-blur-sm`}
                        >
                          <div className="mr-2">{tech.icon}</div>
                          <span className="text-white font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group/link"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </motion.a>

                    {project.github && project.github !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-300 border border-slate-600 hover:border-slate-500 backdrop-blur-sm"
                      >
                        <FiGithub className="mr-2" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to explore more code?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Check out my GitHub for more projects, contributions, and
                open-source work.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Fortunechinenyem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4bg-blue-500hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <FiGithub className="mr-3 text-xl" />
                Visit My GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyWork;
