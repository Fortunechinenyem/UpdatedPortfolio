import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import Logo from "../public/image/3059.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <DefaultLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative  flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 -z-10"></div>

          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>

          <div className="md:w-1/2 space-y-6 relative z-10 px-6 md:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hello, I'm{" "}
              <span className="relative inline-block">
                <span className="text-blue-600 dark:text-blue-400">
                  Fortune
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            >
              Software Developer & Technical Support Specialist
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-lg"
            >
              Crafting seamless digital experiences with code and creativity.
              Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <Link
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center group"
              >
                Contact Me
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
              <Link
                href="#work"
                className="px-8 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-300 group flex items-center hover:shadow-md"
              >
                View Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center relative z-10 px-6 md:px-0"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <Image
                src={Logo}
                alt="Fortune"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/10"></div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-600/30 transition-all duration-500 rounded-2xl"></div>
            </div>
          </motion.div>

          <style jsx global>{`
            @keyframes float {
              0% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(5deg);
              }
              100% {
                transform: translateY(0px) rotate(0deg);
              }
            }
            @keyframes float-slow {
              0% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-10px) translateX(10px);
              }
              100% {
                transform: translateY(0px) translateX(0px);
              }
            }
            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
            .animate-float-slow {
              animation: float-slow 12s ease-in-out infinite;
            }
          `}</style>
        </section>

        <section
          id="about"
          className="relative py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl px-8 md:px-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full filter blur-xl"></div>

          <div className="max-w-4xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
              <span className="relative z-10">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform origin-left scale-x-100"></span>
              </span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-400/30 rounded-full"></span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 relative z-10">
              <p className="leading-relaxed">
                I have a passion for crafting elegant and efficient solutions to
                intricate challenges. With proficiency in various cutting-edge
                technologies, I transform creative concepts into reality.
              </p>
              <p className="leading-relaxed">
                My professional journey includes roles as a Center Operations
                Officer in the Automotive Service industry and as a Customer
                Experience Management Professional in the Fintech sector.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl  hover:shadow-lg group"
              >
                Learn More About Me
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section id="work" className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My{" "}
              <span className="text-blue-600 relative">
                Work
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              I've worked on a range of projects across industries like fintech,
              edtech, autotech, and more.
            </p>
            <Link
              href="/myWork"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-xl group"
            >
              View Selected Projects
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-xl opacity-20 animate-float animation-delay-2000"></div>
        </section>

        {/* Skills Section - Enhanced with animated cards */}
        <section className="relative py-20 bg-gradient-to-l from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl px-8 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full filter blur-xl"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              My{" "}
              <span className="text-blue-600 relative">
                Skills
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600/10 rounded-full filter blur-xl"></div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Soft Skills
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Problem Solving",
                    "Communication",
                    "Collaboration",
                    "Adaptability",
                    "Innovation",
                    "Time Management",
                    "Attention to Detail",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 group-hover:animate-pulse"></span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/10 rounded-full filter blur-xl"></div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Technical Skills
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "HTML/CSS",
                    "MongoDB",
                    "Firebase",
                    "Version Control (Git)",
                    "API Integration",
                    "Testing and Debugging",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 group-hover:animate-pulse"></span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-600/5 rounded-full filter blur-xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600/5 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get My{" "}
              <span className="text-blue-600 relative">
                CV
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Interested in my full professional background? Download my CV.
            </p>
            <a
              href="/mycv.pdf"
              download="Fortune_CV.pdf"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-xl group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </span>
            </a>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
