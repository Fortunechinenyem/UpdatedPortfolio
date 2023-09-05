import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/image/logss.svg";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gray-900 text-xl text-white p-4 ">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start ">
        <div className="p-5">
          <Link href="/" className="flex title-font font-medium items-center">
            <Image
              className=" mb-5"
              src={Logo}
              alt="logo"
              width={110}
              priority
            />
          </Link>
          <p>
            <p>
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </p>
          <div className="p-5">
            <p className="text-gray-200 pb-4">
              fortunechinenyem@gmail.com <br />
              <span className="ml-7">+2348067585444</span> <br />
              Lagos, Nigeria. <br />
            </p>
          </div>
        </div>

        <div className="p-5">
          <ul className="">
            <p className="text-gray-200 font-bold text-2xl pb-4"></p>
            <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/AboutUs">About Me</Link>
            </li>
            <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/OurWork">Our Work</Link>
            </li>
            <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/Services">Tech Stack</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 p-5">
          <Link href="/">
            <button className="cursor-pointer text-2xl hover:text-gray-400">
              <BsLinkedin />
            </button>
          </Link>

          <Link href="/">
            <button className="cursor-pointer text-2xl hover:text-gray-400">
              <BsInstagram />
            </button>
          </Link>

          <Link href="/">
            <button className="cursor-pointer text-2xl hover:text-gray-400">
              <BsTwitter />
            </button>
          </Link>

          <Link href="/">
            <button className="cursor-pointer text-2xl hover:text-gray-400">
              <BsFacebook />
            </button>
          </Link>

          <Link href="/">
            <button className="cursor-pointer text-2xl hover:text-gray-400">
              <BsGithub />
            </button>
          </Link>
        </div>
      </div>
      <hr />

      <footer className="py-4 bg-gray-900 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Fortune, IyaInTech. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
