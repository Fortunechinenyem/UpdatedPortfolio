"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const PersonalityShowcase = () => {
  const [activeItem, setActiveItem] = useState(null);

  const funFacts = [
    {
      title: "Music Lover",
      fact: "I play acoustic guitar and find it helps me think through complex coding problems.",
      dance: {
        rotate: [0, 15, -15, 0],
        y: [0, -10, 0],
        transition: { duration: 0.8, repeat: Infinity },
      },
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "hover:border-blue-400/50",
    },
    {
      title: "Travel Enthusiast",
      fact: "I believe traveling expands the mind just like learning new programming languages.",
      dance: {
        rotate: [0, 0, 360],
        scale: [1, 1.2, 1],
        transition: { duration: 4, repeat: Infinity, ease: "linear" },
      },
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-400/50",
    },
    {
      title: "Dancing",
      fact: "I love to dance, there's something it just does especially when the bugs do their thing.",
      dance: {
        y: [0, -15, 0, -15, 0],
        transition: { duration: 2, repeat: Infinity },
      },
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      hoverBorderColor: "hover:border-green-400/50",
    },
    {
      title: "Continuous Learner",
      fact: "I dedicate time each week to learn new technologies and development methodologies.",
      dance: {
        x: [0, 10, -10, 0],
        transition: { duration: 3, repeat: Infinity },
      },
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-500/30",
      hoverBorderColor: "hover:border-amber-400/50",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 backdrop-blur-sm overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/5 rounded-full blur-xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Beyond the <span className="text-blue-400">Code</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get to know the person behind the developer. Here's a glimpse into
            my passions and personality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {funFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer group"
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              <div
                className={`relative p-6 rounded-2xl border backdrop-blur-lg transition-all duration-500 h-full ${
                  activeItem === index
                    ? `bg-gradient-to-br ${item.color} ${item.borderColor} shadow-2xl scale-105`
                    : `bg-slate-800/50 ${item.borderColor} ${item.hoverBorderColor} shadow-lg`
                }`}
              >
                {/* Animated background effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <motion.div
                    animate={item.dance}
                    className="text-5xl mb-4 flex justify-center"
                  >
                    {item.emoji}
                  </motion.div>

                  <h3
                    className={`font-bold text-lg mb-3 text-center transition-colors duration-300 ${
                      activeItem === index ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {activeItem === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-300 text-sm leading-relaxed text-center"
                    >
                      {item.fact}
                    </motion.p>
                  )}

                  {/* Click indicator */}
                  {!activeItem && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center mt-3"
                    >
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600">
                        <span className="text-xs text-gray-400">
                          Click to reveal
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    item.color.split(" ")[0]
                  } blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive coding fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 shadow-2xl cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
            onClick={() =>
              alert(
                "Debugging is like being a detective in a crime movie where you're also the murderer! 🔍"
              )
            }
          >
            <div className="space-y-3">
              <p className="text-gray-300 text-lg font-medium">
                How I describe debugging to non-programmers:
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <span className="font-semibold">Click for my analogy</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Fun quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <p className="text-gray-400 italic text-sm">
              "Code by day, guitar by night. Balance is key to creativity."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalityShowcase;
