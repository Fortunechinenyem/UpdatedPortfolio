import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/logss.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Fortune - Software Developer</title>
      </Head>

      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center justify-between py-4 px-6">
          <Link href="/" className="flex title-font font-medium items-center">
            <Image className="" src={Logo} alt="logo" width={110} priority />
          </Link>
          <button
            className="hamburger-menu  md:hidden"
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <nav
            className={`md:flex items-center w-full  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:ml-auto md:space-x-2">
              <Link
                href="/"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                href="/myWork"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                My Work
              </Link>
              <Link
                href="/blog"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Me
              </Link>
            </div>
            {/* <div className="mt-4 md:mt-0">
              <Link
                href="/authentication/register"
                className="text-black-300 bg-[#006950] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login/SignUp
              </Link>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
