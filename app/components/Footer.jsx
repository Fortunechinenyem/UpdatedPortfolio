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
  return (
    <footer className="bg-gray-600 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center group">
              <Image
                src={Logo}
                alt="Fortune"
                width={120}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="mt-6 text-lg leading-relaxed">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <BsEnvelope className="flex-shrink-0 mt-1 mr-3 text-blue-400" />
                <a
                  href="mailto:fortunechinenyem@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  fortunechinenyem@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <BsPhone className="flex-shrink-0 mt-1 mr-3 text-blue-400" />
                <a
                  href="tel:+2348067585444"
                  className="hover:text-white transition-colors duration-300"
                >
                  +234 806 758 5444
                </a>
              </div>
              <div className="flex items-start">
                <BsGeoAlt className="flex-shrink-0 mt-1 mr-3 text-blue-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About Me" },
                { href: "/myWork", text: "My Work" },
                { href: "/services", text: "Tech Stack" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center group text-lg hover:text-white transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              <span className="relative z-10">Connect With Me</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            </h3>
            <p className="mb-6 text-lg">
              Let's collaborate and build something amazing together.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  icon: <BsLinkedin className="text-2xl" />,
                  href: "https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/",
                  name: "LinkedIn",
                },
                {
                  icon: <BsInstagram className="text-2xl" />,
                  href: "https://www.instagram.com/iyaintech?igsh=bXc2a3pnMm55ZWl3",
                  name: "Instagram",
                },
                {
                  icon: <BsTwitter className="text-2xl" />,
                  href: "https://x.com/FortuneChineny1",
                  name: "Twitter",
                },
                {
                  icon: <BsFacebook className="text-2xl" />,
                  href: "https://www.facebook.com/fortune.c.gcfr?mibextid=ZbWKwL",
                  name: "Facebook",
                },
                {
                  icon: <BsGithub className="text-2xl" />,
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
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Fortune, IyaInTech. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Crafted with passion and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
