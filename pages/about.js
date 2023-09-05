import DefaultLayout from "@/layout/DefaultLayout";
import React, { useEffect } from "react";

import AboutHero from "../public/image/portbg (5).png";

import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <DefaultLayout>
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AboutHero}
          alt="about hero"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="text-center text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Who I am
            </h1>
          </div>
        </div>
      </div>

      <div
        className="mt-7 text-center text-xl"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-2">
          My Story
        </h3>
        <p className="text-lg md:text-xl lg:text-xl"></p>
      </div>

      <div
        className="flex flex-wrap justify-center gap-6 mt-9 mb-7"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
            Vision
          </h3>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
            Mission
          </h3>
          <p className="text-lg md:text-xl lg:text-xl"></p>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
          Our Values
        </h3>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
          Our Journey
        </h3>
      </div>
    </DefaultLayout>
  );
};

export default About;
