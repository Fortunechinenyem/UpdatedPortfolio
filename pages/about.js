"use client";
import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaHeart,
  FaGuitar,
  FaLightbulb,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";
import { FiAward, FiUsers } from "react-icons/fi";
import AboutHero from "../public/image/hero.jpg";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <DefaultLayout>
      <div className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium">
                About Fortune
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              The Mind{" "}
              <span className="bg-blue-500 bg-clip-text text-transparent">
                Behind
              </span>{" "}
              The Code
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Combining technical expertise with human-centered design to create
              meaningful digital experiences that make a difference
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-black text-white">
                  Hello, I'm <span className="text-blue-400">Fortune</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a user-centric software developer passionate about
                  leveraging technology to create logical and innovative
                  solutions to complex problems. My technical skills span across
                  JavaScript, React.js, Next.js, and modern web development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond coding, I pride myself on soft skills like empathy and
                  emotional intelligence, which allow me to understand and meet
                  client needs effectively. I believe that great software isn't
                  just about clean code,it's about creating experiences that
                  truly serve people.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <FaCode className="text-2xl" />,
                      title: "Projects",
                      value: "10+",
                      color: "text-blue-400",
                    },
                    {
                      icon: <FiAward className="text-2xl" />,
                      title: "Experience",
                      value: "3+ Years",
                      color: "text-purple-400",
                    },
                    {
                      icon: <FiUsers className="text-2xl" />,
                      title: "Clients",
                      value: "5+",
                      color: "text-green-400",
                    },
                    {
                      icon: <FaHeart className="text-2xl" />,
                      title: "Passion",
                      value: "100%",
                      color: "text-red-400",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="bg-slate-700/30 p-4 rounded-xl text-center border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group"
                    >
                      <div
                        className={`${item.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                      ></div>
                      <h3 className="font-bold text-xl text-white mb-1">
                        {item.value}
                      </h3>
                      <p className="text-gray-400 text-xs font-medium">
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={AboutHero}
                    alt="Fortune Aribido - Professional Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/20"></div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={AboutHero}
                    alt="Fortune Aribido - Professional Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/20"></div>

                  <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-lg rounded-lg shadow-lg p-4 border border-blue-500/30">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-white">
                        Fortune Aribido
                      </p>
                      <p className="text-xs text-blue-400">
                        Software Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              My <span className="text-blue-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From automotive operations to software development, my path has
              been defined by continuous learning, adaptation, and dedication
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20"></div>

            {[
              {
                year: "2019",
                title: "Automotive Operations",
                description:
                  "Began my career as a Center Operations Officer, developing problem-solving and leadership skills in a fast-paced environment.",
              },
              {
                year: "2020",
                title: "Career Break - Parenting",
                description:
                  "Took time to focus on family and motherhood, developing valuable skills in time management, patience, and multitasking that enhance my professional capabilities.",
                highlight: "break",
              },
              {
                year: "2021",
                title: "Fintech Experience",
                description:
                  "Transitioned to Fintech as a Customer Experience Professional, gaining deep insights into user needs and digital product requirements.",
              },
              {
                year: "2022",
                title: "Coding Journey Begins",
                description:
                  "Started at a bootcamp for 10 weeks with the basics, went on to teach myself programming with focus on JavaScript and modern web development, building foundational technical skills.",
              },
              {
                year: "2023 - 2024",
                title: "Software Developer & Technical Support Specialist",
                description:
                  "Working across multiple industries including e-commerce, edutech, health tech, and fintech, delivering scalable digital solutions.",
              },
              {
                year: "Currently",
                title: "Freelance Developer - Open to Opportunities",
                description:
                  "Available for full-time, contract, or freelance roles. Bringing strong technical skills, diverse industry experience, and fresh perspective to development teams.",
                highlight: "current",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-16 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-5/12 px-4 mb-4 md:mb-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 backdrop-blur-lg rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      item.highlight === "break"
                        ? "bg-yellow-500/10 border-yellow-500/30"
                        : item.highlight === "current"
                        ? "bg-green-500/10 border-green-500/30"
                        : "bg-slate-800/50 border-slate-700"
                    } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    {item.highlight === "break" && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-3">
                        Career Break
                      </div>
                    )}
                    {item.highlight === "current" && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-3">
                        Available for Opportunities
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className="md:w-2/12 flex justify-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center rounded-full text-white font-bold shadow-lg border-4 border-slate-900 ${
                      item.year === "Currently"
                        ? "w-20 h-20 text-sm" // Larger size and smaller text for "Currently"
                        : item.year === "2023 - 2024"
                        ? "w-20 h-20 text-xs" // Larger size and even smaller text for "2023 - 2024"
                        : "w-16 h-16 text-base" // Standard size for other years
                    } ${
                      item.highlight === "break"
                        ? "bg-yellow-500/60"
                        : item.highlight === "current"
                        ? "bg-emerald-600 animate-pulse"
                        : "bg-blue-600 "
                    }`}
                  >
                    {item.year}
                  </motion.div>
                </div>

                <div className="md:w-5/12 px-4"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-300">
                Open to full-time, contract, and freelance opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              My <span className="text-blue-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The principles that guide my work, interactions, and approach to
              every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-4xl" />,
                title: "Innovation",
                description:
                  "Constantly seeking better ways to solve problems through creative thinking and cutting-edge technologies.",
                gradient: "from-blue-500/20 to-blue-600/20",
                border: "border-blue-500/30",
              },
              {
                icon: <FaBullseye className="text-4xl" />,
                title: "Excellence",
                description:
                  "Committed to delivering high-quality work that not only meets but exceeds expectations and standards.",
                gradient: "from-purple-500/20 to-purple-600/20",
                border: "border-purple-500/30",
              },
              {
                icon: <FaHandshake className="text-4xl" />,
                title: "Integrity",
                description:
                  "Honest, ethical work that I can stand behind with pride, building trust through transparency.",
                gradient: "from-green-500/20 to-green-600/20",
                border: "border-green-500/30",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${value.gradient} backdrop-blur-lg rounded-2xl p-8 border ${value.border} shadow-xl hover:shadow-2xl text-center transition-all duration-300 group`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block mb-6 text-blue-400"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond The Code */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Beyond The <span className="text-blue-400">Code</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not building digital solutions, you can find me
                teaching coding to mothers who want to transition into tech,
                strumming my guitar, or spending quality time with family.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in maintaining a healthy work-life balance (This one
                is a reach right 😆, but I try) and that the best ideas often
                come when we step away from the keyboard and engage with the
                world.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <FaGuitar className="text-4xl" />,
                  title: "Music Lover",
                  description: "Acoustic guitar enthusiast",
                  color: "from-purple-500/20 to-purple-600/20",
                },
                {
                  icon: <FiUsers className="text-4xl" />,
                  title: "Community Teacher",
                  description: "Teaching coding to mothers",
                  color: "from-blue-500/20 to-blue-600/20",
                },
                {
                  icon: <FaHeart className="text-4xl" />,
                  title: "Family Time",
                  description: "Quality moments matter",
                  color: "from-red-500/20 to-red-600/20",
                },
                {
                  icon: <FaCode className="text-4xl" />,
                  title: "Continuous Learning",
                  description: "Always exploring new tech",
                  color: "from-green-500/20 to-green-600/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-lg rounded-2xl p-6 border border-slate-700 shadow-lg hover:shadow-xl text-center transition-all duration-300 group`}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-white mb-3"
                  ></motion.div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
