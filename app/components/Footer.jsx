"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsEnvelope,
  BsPhone,
  BsGeoAlt,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative z-10 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-500/20 pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-600 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-8 h-8 border border-amber-500 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 border border-cyan-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-4 group mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="text-xl font-black text-white relative z-10">
                    F
                  </span>
                </div>
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-black bg-white bg-clip-text text-transparent">
                  Fortune
                </span>
                <div className="text-xs text-blue-300 font-medium tracking-wider mt-1">
                  Software Developer
                </div>
              </div>
            </Link>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-6">
              Creating exceptional digital experiences with modern technologies.
              Let's build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <BsEnvelope className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href="mailto:fortunechinenyem@gmail.com"
                  className="text-blue-200/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  fortunechinenyem@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <BsPhone className="h-4 w-4 text-blue-400" />
                </div>
                <a
                  href="tel:+2348067585444"
                  className="text-blue-200/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  +234 806 758 5444
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <BsGeoAlt className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-blue-200/80 text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-500"></div>
            </h4>
            <div className="space-y-3">
              <Link
                href="/"
                className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                Home
                <span className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                About Me
                <span className="ml-2 text-amber-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
              <Link
                href="/myWork"
                className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                My Work
                <span className="ml-2 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                Contact
                <span className="ml-2 text-green-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Tech Stack Column - Enhanced */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Tech Stack
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </h4>
            <div className="space-y-3">
              {[
                "React & Next.js",
                "TypeScript",
                "Node.js & Express",
                "MongoDB",
                "Firebase",
                "Tailwind CSS",
                "REST APIs",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group flex items-center text-blue-200/80 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Let's Connect
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
            </h4>
            <div className="space-y-4">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10 hover:border-blue-400/20 transition-all duration-300 group">
                <div className="text-blue-400 font-bold text-sm">
                  Available For
                </div>
                <div className="text-white text-lg font-black">
                  New Projects
                </div>
                <div className="text-blue-300 text-xs">
                  Freelance & Full-time
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10 hover:border-amber-500/20 transition-all duration-300 group">
                <div className="text-amber-400 font-bold text-sm">
                  Response Time
                </div>
                <div className="text-white text-lg font-black">24 Hours</div>
                <div className="text-amber-300 text-xs">Usually faster</div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                {[
                  {
                    icon: <BsGithub className="h-5 w-5" />,
                    href: "https://github.com/Fortunechinenyem",
                    color: "text-gray-400 hover:text-white",
                  },
                  {
                    icon: <BsLinkedin className="h-5 w-5" />,
                    href: "https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/",
                    color: "text-blue-400 hover:text-blue-300",
                  },
                  {
                    icon: <BsTwitter className="h-5 w-5" />,
                    href: "https://x.com/FortuneChineny1",
                    color: "text-cyan-400 hover:text-cyan-300",
                  },
                  {
                    icon: <BsInstagram className="h-5 w-5" />,
                    href: "https://www.instagram.com/iyaintech?igsh=bXc2a3pnMm55ZWl3",
                    color: "text-pink-400 hover:text-pink-300",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-blue-200/60 text-sm font-medium">
                © {currentYear} Fortune. Crafting digital excellence with
                passion and precision.
              </p>
              <p className="text-blue-200/40 text-xs mt-1">
                Built by IyaInTech
              </p>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-blue-500/10">
            <p className="text-blue-200/40 text-xs italic font-light">
              "The only way to do great work is to love what you do." — Steve
              Jobs
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 via-blue-500 to-transparent opacity-30"></div>
    </footer>
  );
}

export default Footer;
