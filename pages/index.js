import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import Logo from "../public/image/3059.jpg";
import { motion } from "framer-motion";
import PersonalityShowcase from "@/app/components/PersonalityShowcase";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsVisible(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(canvasWidth, canvasHeight, type) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.type = type;

        if (type === "sparkle") {
          this.size = Math.random() * 2 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.8;
          this.speedY = (Math.random() - 0.5) * 0.8;
          this.alpha = Math.random() * 0.8 + 0.2;
          this.color = `hsla(${Math.random() * 60 + 200}, 100%, 70%, ${
            this.alpha
          })`;
        } else if (type === "glow") {
          this.size = Math.random() * 100 + 50;
          this.speedX = (Math.random() - 0.5) * 0.1;
          this.speedY = (Math.random() - 0.5) * 0.1;
          this.alpha = Math.random() * 0.05 + 0.02;
          this.color = `hsla(${Math.random() * 30 + 220}, 60%, 50%, ${
            this.alpha
          })`;
        } else {
          this.size = Math.random() * 3 + 1;
          this.speedX = (Math.random() - 0.5) * 0.3;
          this.speedY = (Math.random() - 0.5) * 0.3;
          this.alpha = Math.random() * 0.3 + 0.1;
          this.color = `hsla(${Math.random() * 40 + 200}, 80%, 60%, ${
            this.alpha
          })`;
        }
      }

      update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth + 100) this.x = -100;
        if (this.x < -100) this.x = canvasWidth + 100;
        if (this.y > canvasHeight + 100) this.y = -100;
        if (this.y < -100) this.y = canvasHeight + 100;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        if (this.type === "sparkle") {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size * 3
          );
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === "glow") {
          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size
          );
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles = [];

    for (let i = 0; i < 40; i++) {
      particles.push(new Particle(canvas.width, canvas.height, "sparkle"));
    }
    for (let i = 0; i < 8; i++) {
      particles.push(new Particle(canvas.width, canvas.height, "glow"));
    }
    for (let i = 0; i < 25; i++) {
      particles.push(new Particle(canvas.width, canvas.height, "trail"));
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.95)");
      gradient.addColorStop(1, "rgba(30, 41, 59, 0.98)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        <main className="relative z-10">
          {/* Hero Section - Premium Dark Theme */}
          <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-blue-400 text-sm font-medium">
                        Available for new projects
                      </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                      Hello, I'm{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Fortune
                      </span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl text-gray-300 font-light leading-relaxed">
                      Software Developer
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                      Crafting exceptional digital experiences with modern
                      technologies. Transforming ideas into scalable,
                      user-centric solutions that make an impact.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/contact"
                      className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center">
                        Get In Touch
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </span>
                    </Link>

                    <Link
                      href="/myWork"
                      className="group relative border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                    >
                      View My Work
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-3 gap-8 pt-8"
                  >
                    {[
                      { number: "3+", label: "Years Experience" },
                      { number: "10+", label: "Projects Completed" },
                      { number: "100%", label: "Client Satisfaction" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="text-2xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative">
                    {/* Main Image Container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src={Logo}
                        alt="Professional portrait of Fortune - Software Developer"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/20"></div>
                    </div>
                    {/* 
                    Profile Card - Smaller and more compact
                    <div className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-lg rounded-lg shadow-xl p-4 max-w-[180px] border border-blue-500/30 sm:hidden">
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-white mb-1">
                          Fortune Aribido
                        </h3>
                        <p className="text-blue-400 text-xs font-medium mb-2">
                          Software Developer
                        </p>
                        <div className="w-8 h-px bg-blue-400/50 mx-auto mb-2"></div>
                        <p className="text-xs text-gray-300 leading-tight">
                          "Building elegant digital solutions"
                        </p>
                      </div>
                    </div> */}

                    {/* Floating elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full opacity-40"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full opacity-30"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section - Premium Cards */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  About <span className="text-blue-400">Me</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Passionate developer with expertise in creating innovative
                  digital solutions that solve real-world problems and deliver
                  exceptional user experiences.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Background
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    With experience across fintech, automotive, and tech
                    industries, I bring a unique perspective to software
                    development. My journey includes roles in operations
                    management and customer experience, giving me deep insight
                    into user needs and business requirements.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-purple-400"
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
                    <h3 className="text-2xl font-bold text-white">Approach</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    I believe in clean, maintainable code and user-centered
                    design. Every project is an opportunity to create something
                    meaningful that not only meets technical specifications but
                    also delivers exceptional value to end-users and businesses
                    alike.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mt-12"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl group"
                >
                  Learn More About Me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Skills Section - Enhanced */}
          <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                  My <span className="text-blue-400">Skills</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                  A comprehensive toolkit for building modern, scalable web
                  applications
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Technical Skills */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-slate-900/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-400"
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
                    Technical Stack
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "JavaScript/TypeScript",
                      "React/Next.js",
                      "Node.js/Express",
                      "Firebase",
                      "MongoDB",

                      "HTML/CSS/Tailwind",
                      "REST APIs",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base break-words">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-slate-900/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-purple-400"
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
                    Professional Skills
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      "Problem Solving",
                      "Communication",
                      "Team Collaboration",
                      "Project Management",
                      "Agile Methodology",
                      "Client Relations",
                      "Technical Leadership",
                      "Continuous Learning",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base break-words">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 sm:mt-12 lg:hidden"
              >
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <p className="text-gray-300 text-sm sm:text-base">
                    Continuously learning and adapting to new technologies and
                    methodologies
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Work Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  My <span className="text-blue-400">Work</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Explore my portfolio of projects across various industries and
                  technologies
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <Link
                  href="/myWork"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl group"
                >
                  View All Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl sm:text-5xl font-black text-white">
                  Let's Build Something{" "}
                  <span className="text-blue-400">Amazing</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss how we can
                  work together to create exceptional digital experiences that
                  drive results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
                  >
                    Start a Project
                  </Link>
                  <a
                    href="/mycv.pdf"
                    download="Fortune_CV.pdf"
                    className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    Download CV
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Personality Showcase */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <PersonalityShowcase />
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
