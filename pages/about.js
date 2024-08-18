import DefaultLayout from "@/layout/DefaultLayout";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import AboutHero from "../public/image/about.jpg";

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
              Who I Am
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-12 px-6 md:px-24 text-center text-lg md:text-xl leading-relaxed">
        <p>
          I’m Fortune, a customer-centric software developer passionate about
          leveraging technology to create logical and innovative solutions to
          complex problems. My technical skills span across JavaScript,
          React.js, Next.js, Tailwind CSS, Bootstrap, Figma, and Git. I’ve
          contributed to various projects in industries like e-commerce, health
          tech, auto-tech, food-tech, and fintech.
        </p>
        <p className="mt-6">
          Beyond coding, I pride myself on my soft skills such as empathy,
          emotional intelligence, and organizational leadership, which allow me
          to understand and meet client needs effectively.
        </p>
        <p className="mt-6">
          I also teach mums how to code and when I am not coding, I like to play
          the guitar and spend time with family.
        </p>
      </div>

      <div
        className="mt-14 px-6 md:px-24 text-center text-lg md:text-xl leading-relaxed"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">My Story</h3>
        <p>
          My journey in technology started with a fascination for solving
          puzzles and creating things that make a difference. Over the years,
          I’ve honed my skills through diverse roles, from being a Center
          Operations Officer in the Automotive Service industry to a Customer
          Experience Management Professional in Fintech. Today, I channel these
          experiences into developing software and technical support that not
          only works efficiently but also serves users meaningfully.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-14 px-6 md:px-24">
        <div
          className="bg-white shadow-lg rounded-lg p-8 text-center w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">Vision</h3>
          <p className="text-lg">
            To be at the forefront of technological innovation, using my skills
            to create solutions that improve lives and businesses.
          </p>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-8 text-center w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">Mission</h3>
          <p className="text-lg">
            To deliver software solutions that are not only technically sound
            but also user-friendly and impactful, with a focus on client
            satisfaction.
          </p>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-8 mt-14 mx-6 md:mx-24 text-center"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">My Values</h3>
        <p className="text-lg">
          Integrity, Innovation, User-Centric Design, Continuous Learning, and
          Collaboration are the core values that drive my work.
        </p>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-8 mt-14 mx-6 md:mx-24 text-center"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">My Journey</h3>
        <p className="text-lg">
          From humble beginnings, my journey has been one of growth and
          learning. Every project has been an opportunity to push the boundaries
          of what's possible, and I'm excited to continue this journey with new
          challenges and opportunities.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default About;
