import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/Fortune.svg";
import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsEnvelope,
  BsPhone,
  BsGeoAlt,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-300 rounded-full opacity-5 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group mb-6">
              <div className="bg-blue-500 p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={Logo}
                  alt="Fortune"
                  width={100}
                  priority
                  className="transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mt-1">
                  <BsEnvelope className="h-5 w-5 text-blue-500" />
                </div>
                <a
                  href="mailto:fortunechinenyem@gmail.com"
                  className="text-gray-300 ml-3 hover:text-blue-400 transition-colors duration-300 break-all"
                >
                  fortunechinenyem@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mt-1">
                  <BsPhone className="h-5 w-5 text-blue-500" />
                </div>
                <a
                  href="tel:+2348067585444"
                  className="text-gray-300 ml-3 hover:text-blue-400 transition-colors duration-300"
                >
                  +234 806 758 5444
                </a>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mt-1">
                  <BsGeoAlt className="h-5 w-5 text-blue-500" />
                </div>
                <span className="text-gray-300 ml-3">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Me" },
                { href: "/myWork", text: "My Work" },
                { href: "/services", text: "Tech Stack" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Connect With Me
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <p className="mb-6 text-gray-300 text-lg">
              Let's collaborate and build something amazing together.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <BsLinkedin className="h-5 w-5" />,
                  href: "https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/",
                  name: "LinkedIn",
                },
                {
                  icon: <BsInstagram className="h-5 w-5" />,
                  href: "https://www.instagram.com/iyaintech?igsh=bXc2a3pnMm55ZWl3",
                  name: "Instagram",
                },
                {
                  icon: <BsTwitter className="h-5 w-5" />,
                  href: "https://x.com/FortuneChineny1",
                  name: "Twitter",
                },
                {
                  icon: <BsFacebook className="h-5 w-5" />,
                  href: "https://www.facebook.com/fortune.c.gcfr?mibextid=ZbWKwL",
                  name: "Facebook",
                },
                {
                  icon: <BsGithub className="h-5 w-5" />,
                  href: "https://github.com/Fortunechinenyem",
                  name: "GitHub",
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 group"
                >
                  <div className="text-gray-300 group-hover:text-white">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Fortune, IyaInTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
