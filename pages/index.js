import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import Logo from "../public/image/hero.jpg";

export default function Home() {
  return (
    <DefaultLayout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hello, I'm <span className="text-blue-600">Fortune</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Software Developer & Technical Support Specialist
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
              Crafting seamless digital experiences with code and creativity.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </Link>
              <Link
                href="#work"
                className="px-8 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-300"
              >
                View Work
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <Image
                src={Logo}
                alt="Fortune"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/10"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl px-8 md:px-12"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
              <span className="relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I have a passion for crafting elegant and efficient solutions to
                intricate challenges. With proficiency in various cutting-edge
                technologies, I transform creative concepts into reality.
              </p>
              <p>
                My professional journey includes roles as a Center Operations
                Officer in the Automotive Service industry and as a Customer
                Experience Management Professional in the Fintech sector.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              I've worked on a range of projects across industries like fintech,
              edtech, autotech, and more.
            </p>
            <Link
              href="/myWork"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Selected Projects
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gradient-to-l from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Soft Skills Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
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
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Skills Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
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
                    "Version Control (Git)",
                    "API Integration",
                    "Testing and Debugging",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section id="contact" className="py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get My <span className="text-blue-600">CV</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Interested in my full professional background? Download my CV.
            </p>
            <a
              href="/mycv.pdf"
              download="Fortune_CV.pdf"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
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
            </a>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
