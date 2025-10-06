"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl"
          : "bg-slate-900/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo - Enhanced for mobile */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group flex-shrink-0"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg sm:shadow-2xl transform group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="text-lg sm:text-xl font-black text-white relative z-10">
                  F
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 blur-lg sm:blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="hidden xs:block">
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
                Fortune
              </span>
              <div className="text-xs text-blue-300 font-medium tracking-wider hidden sm:block">
                Software Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Improved spacing */}
          <div className="hidden lg:flex items-center space-x-0 xl:space-x-1 flex-1 justify-center max-w-2xl">
            <Link
              href="/"
              className="relative px-4 xl:px-5 py-2.5 text-white hover:text-blue-200 transition-all duration-300 font-semibold group text-sm xl:text-base"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transform -translate-x-1/2 group-hover:w-12 transition-all duration-300"></div>
            </Link>

            <Link
              href="/about"
              className="relative px-4 xl:px-5 py-2.5 text-white hover:text-amber-200 transition-all duration-300 font-semibold group text-sm xl:text-base"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 transform -translate-x-1/2 group-hover:w-12 transition-all duration-300"></div>
            </Link>

            <Link
              href="/myWork"
              className="relative px-4 xl:px-5 py-2.5 text-white hover:text-cyan-200 transition-all duration-300 font-semibold group text-sm xl:text-base"
            >
              <span className="relative z-10">Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 group-hover:w-12 transition-all duration-300"></div>
            </Link>

            <Link
              href="/contact"
              className="relative px-4 xl:px-5 py-2.5 text-white hover:text-green-200 transition-all duration-300 font-semibold group text-sm xl:text-base"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-600 transform -translate-x-1/2 group-hover:w-12 transition-all duration-300"></div>
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/mycv.pdf" download="Fortune_CV.pdf">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-6 xl:px-8 py-2.5 rounded-lg text-sm xl:text-base">
                Resume
              </button>
            </Link>
          </div>

          {/* Mobile menu button and CTA */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            {/* Small screen CTA */}
            <Link
              href="/mycv.pdf"
              download="Fortune_CV.pdf"
              className="hidden xs:block sm:hidden"
            >
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg text-xs px-3 py-2 rounded-lg">
                Resume
              </button>
            </Link>

            {/* Medium screen CTA */}
            <Link
              href="/mycv.pdf"
              download="Fortune_CV.pdf"
              className="hidden sm:block"
            >
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg px-4 py-2 rounded-lg">
                Resume
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="mobile-menu-button relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm border border-blue-500/30 rounded-lg sm:rounded-xl hover:border-blue-400/60 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 mt-1 sm:mt-1.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 mt-1 sm:mt-1.5 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
                  }`}
                ></span>
              </div>

              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="mobile-menu-container lg:hidden absolute top-full left-0 right-0 bg-gray-900 backdrop-blur-2xl border-t border-blue-500/20 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {/* Home Link */}
              <Link
                href="/"
                className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/60 rounded-xl sm:rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-bold text-white truncate">
                      Home
                    </div>
                    <div className="text-xs sm:text-sm text-blue-300 truncate">
                      Welcome Page
                    </div>
                  </div>
                </div>
                <div className="text-blue-400 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 ml-2">
                  →
                </div>
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/60 rounded-xl sm:rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-bold text-white truncate">
                      About Me
                    </div>
                    <div className="text-xs sm:text-sm text-amber-300 truncate">
                      My Story & Skills
                    </div>
                  </div>
                </div>
                <div className="text-amber-400 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 ml-2">
                  →
                </div>
              </Link>

              <Link
                href="/myWork"
                className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/60 rounded-xl sm:rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-sm"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-bold text-white truncate">
                      My Work
                    </div>
                    <div className="text-xs sm:text-sm text-cyan-300 truncate">
                      Projects & Portfolio
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 ml-2">
                  →
                </div>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/60 rounded-xl sm:rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-sm rotate-45"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-bold text-white truncate">
                      Contact
                    </div>
                    <div className="text-xs sm:text-sm text-green-300 truncate">
                      Get In Touch
                    </div>
                  </div>
                </div>
                <div className="text-green-400 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 ml-2">
                  →
                </div>
              </Link>

              {/* Action Buttons - Stacked Vertically */}
              <div className="pt-3 sm:pt-4 border-t border-blue-500/30">
                <div className="space-y-3">
                  {" "}
                  {/* Changed to vertical stack */}
                  <Link
                    href="/mycv.pdf"
                    download="Fortune_CV.pdf"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base py-3 rounded-lg">
                      Download Resume
                    </button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base py-3 mt-4 rounded-lg">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
          }}
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
