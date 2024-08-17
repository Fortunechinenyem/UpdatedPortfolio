import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/fortune.svg";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="logo" width={110} priority />
            </Link>
            <p className="mt-4 text-gray-300">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
            <p className="mt-2 text-gray-400">
              fortunechinenyem@gmail.com <br />
              +2348067585444 <br />
              Lagos, Nigeria.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Me
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white"
                >
                  My Work
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect with Me
            </h3>
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
              >
                <BsLinkedin className="text-2xl text-gray-400 hover:text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/yourprofile"
                target="_blank"
              >
                <BsInstagram className="text-2xl text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://www.twitter.com/yourprofile" target="_blank">
                <BsTwitter className="text-2xl text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://www.facebook.com/yourprofile" target="_blank">
                <BsFacebook className="text-2xl text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://www.github.com/yourprofile" target="_blank">
                <BsGithub className="text-2xl text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fortune, IyaInTech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
