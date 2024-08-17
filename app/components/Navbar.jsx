"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/fortune.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image src={Logo} alt="logo" width={110} height={80} priority />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 ml-auto">
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>

            <Link href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link href="/myWork" className="text-gray-800 hover:text-blue-500">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  style={{ display: isOpen ? "none" : "block" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  style={{ display: isOpen ? "block" : "none" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 bg-black bg-opacity-50 z-50`}
      >
        <div className="absolute inset-x-0 top-0 p-4 transition transform origin-top-right">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="">
                    <Image
                      src={Logo}
                      alt="logo"
                      width={110}
                      height={80}
                      priority
                    />
                  </Link>
                </div>

                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-blue-500 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
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
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/"
                    className="text-gray-800 hover:bg-gray-100 p-3 rounded-md text-base font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="text-gray-800 hover:bg-gray-100 p-3 rounded-md text-base font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/myWork"
                    className="text-gray-800 hover:bg-gray-100 p-3 rounded-md text-base font-medium"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-800 hover:bg-gray-100 p-3 rounded-md text-base font-medium"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
