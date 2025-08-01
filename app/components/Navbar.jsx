"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/Fortune.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={Logo}
              alt="Fortune"
              width={120}
              height={50}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/myWork">Work</NavLink>
            <NavLink href="/contact">
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-blue-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </NavLink>

            <Link
              href="/mycv.pdf"
              download="Fortune_CV.pdf"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
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
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-1.5" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src={Logo}
                  alt="Fortune"
                  width={100}
                  height={40}
                  priority
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 space-y-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/myWork" onClick={() => setIsOpen(false)}>
                Work
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>

              <div className="pt-4 mt-8 border-t border-gray-100">
                <Link
                  href="/mycv.pdf"
                  download="Fortune_CV.pdf"
                  className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </Link>
              </div>
            </nav>

            <div className="mt-auto pt-8 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Fortune. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children }) => (
  <Link href={href} passHref>
    <div className="relative px-4 py-2 group">
      <span className="relative z-10 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
        {children}
      </span>
      <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
    </div>
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, onClick, children }) => (
  <Link href={href} passHref>
    <div
      onClick={onClick}
      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
    >
      {children}
    </div>
  </Link>
);

export default Navbar;
