"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const PersonalityShowcase = () => {
  const [activeItem, setActiveItem] = useState(null);

  const funFacts = [
    {
      emoji: "🎸",
      title: "Music Lover",
      fact: "I play acoustic guitar and find it helps me think through complex coding problems.",
      dance: {
        rotate: [0, 15, -15, 0],
        y: [0, -10, 0],
        transition: { duration: 0.8, repeat: Infinity },
      },
    },
    {
      emoji: "🌍",
      title: "Travel Enthusiast",
      fact: "I believe traveling expands the mind just like learning new programming languages.",
      dance: {
        rotate: [0, 0, 360],
        scale: [1, 1.2, 1],
        transition: { duration: 4, repeat: Infinity, ease: "linear" },
      },
    },
    {
      emoji: "💃",
      title: "Dancing",
      fact: "I love to dance, there's something it just does especially when the bugs do their thing.",
      dance: {
        y: [0, -15, 0, -15, 0],
        transition: { duration: 2, repeat: Infinity },
      },
    },
    {
      emoji: "📚",
      title: "Continuous Learner",
      fact: "I dedicate time each week to learn new technologies and development methodologies.",
      dance: {
        x: [0, 10, -10, 0],
        transition: { duration: 3, repeat: Infinity },
      },
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-600 dark:text-blue-400">Fun</span> Fortune
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {funFacts.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              <div
                className={`p-6 rounded-xl text-center transition-all duration-300 ${
                  activeItem === index
                    ? "bg-blue-100 dark:bg-blue-900/50 shadow-lg"
                    : "bg-white dark:bg-gray-700 shadow-md"
                }`}
              >
                <motion.div animate={item.dance} className="text-4xl mb-3">
                  {item.emoji}
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                {activeItem === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {item.fact}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive coding fact */}
        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() =>
              alert(
                "Debugging is like being a detective in a crime movie where you're also the murderer! 🔍"
              )
            }
          >
            <p className="text-gray-700 dark:text-gray-300">
              How I describe debugging to non-programmers:
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
              (Click for my analogy)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalityShowcase;
