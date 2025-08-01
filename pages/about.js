import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
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

import AboutHero from "../public/image/about.jpg";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={AboutHero}
            alt="Fortune at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-end h-full pb-20 px-6 md:px-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The <span className="text-blue-400">Developer</span> Behind The Code
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining technical expertise with human-centered design to create
            meaningful digital experiences
          </p>
        </motion.div>
      </div>

      {/* Introduction */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 md:px-8 py-20"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Hello, I'm Fortune
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a customer-centric software developer passionate about
              leveraging technology to create logical and innovative solutions
              to complex problems. My technical skills span across JavaScript,
              React.js, Next.js, and modern web development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beyond coding, I pride myself on soft skills like empathy and
              emotional intelligence, which allow me to understand and meet
              client needs effectively.
            </p>
          </div>
          <div className="md:w-1/2 bg-white dark:bg-gray-800 p-1 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <FaCode className="text-3xl" />,
                  title: "Projects",
                  value: "10+",
                },
                {
                  icon: <FiAward className="text-3xl" />,
                  title: "Experience",
                  value: "3 Years",
                },
                {
                  icon: <FiUsers className="text-3xl" />,
                  title: "Clients",
                  value: "5+",
                },
                {
                  icon: <FaHeart className="text-3xl" />,
                  title: "Passion",
                  value: "100%",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center"
                >
                  <div className="text-blue-500 mb-2">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* My Story */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="border-l-2 border-blue-400 absolute h-full left-4 md:left-1/2 -ml-0.5"></div>

            {/* Timeline Items */}
            {[
              {
                year: "2019",
                title: "Automotive Operations",
                description:
                  "Began my career as a Center Operations Officer, developing problem-solving and leadership skills.",
              },
              {
                year: "2020",
                title: "Fintech Experience",
                description:
                  "Transitioned to Fintech as a Customer Experience Professional, gaining insights into user needs.",
              },
              {
                year: "2021",
                title: "Coding Journey Begins",
                description:
                  "Started self-teaching programming, focusing on JavaScript and web development.",
              },
              {
                year: "2022-Present",
                title: "Professional Developer",
                description:
                  "Working across multiple industries including e-commerce, health tech, and fintech.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-8 flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center w-full`}
              >
                <div className="md:w-5/12 px-4">
                  <div
                    className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="md:w-2/12 flex justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white z-10">
                    {item.year}
                  </div>
                </div>
                <div className="md:w-5/12 px-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and interactions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-4xl mb-4 text-blue-500" />,
                title: "Innovation",
                description:
                  "Constantly seeking better ways to solve problems through creative thinking.",
              },
              {
                icon: <FaBullseye className="text-4xl mb-4 text-blue-500" />,
                title: "Excellence",
                description:
                  "Committed to delivering high-quality work that exceeds expectations.",
              },
              {
                icon: <FaHandshake className="text-4xl mb-4 text-blue-500" />,
                title: "Integrity",
                description:
                  "Honest, ethical work that I can stand behind with pride.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Beyond The Code
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When I'm not building digital solutions, you can find me
                teaching coding to mothers who want to transition into tech,
                strumming my guitar, or spending quality time with family.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I believe in maintaining a healthy work-life balance and that
                the best ideas often come when we step away from the keyboard.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                {
                  icon: <FaGuitar className="text-4xl" />,
                  title: "Music Lover",
                },
                {
                  icon: <FiUsers className="text-4xl" />,
                  title: "Community Teacher",
                },
                {
                  icon: <FaHeart className="text-4xl" />,
                  title: "Family Time",
                },
                { icon: <FaCode className="text-4xl" />, title: "Coding" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
                >
                  <div className="text-blue-500 mb-2">{item.icon}</div>
                  <h3 className="font-medium">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default About;
