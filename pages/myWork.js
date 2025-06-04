import React, { useEffect } from "react";
import Image from "next/image";
import DefaultLayout from "@/layout/DefaultLayout";
import Aos from "aos";
import "aos/dist/aos.css";

import Work1 from "../public/image/for portfolio3.PNG";
import Work2 from "../public/image/nriomap.JPG";
import Work3 from "../public/image/forport6.JPG";

import Work5 from "../public/image/loveeyp.JPG";
import Work6 from "../public/image/17tth.PNG";
import Work7 from "../public/image/revibep.JPG";
import Work8 from "../public/image/gamingp.JPG";
import Work9 from "../public/image/zenp.JPG";

export default function MyWork() {
  useEffect(() => {
    Aos.init({ duration: 1800, offset: 0 });
  }, []);

  const projects = [
    {
      title: "Zendtrax",
      description:
        "I collaborated on this live application. It is an application that  provide real-time package tracking, personalized service, and assistance with proper packaging. ",
      image: Work9,
      link: "https://www.zendtrax.co/",
    },
    {
      title: "Flincap",
      description:
        "I collaborated on this live Fintech application built using Next.js, Tailwind CSS, Firebase, and MySQL. Flincap is a Crypto OTC Exchange with automatic fiat payout within 5 minutes. This project enhanced my skills in teamwork, database management, cryptocurrency, debugging, and GitHub collaboration.",
      image: Work1,
      link: "https://flincap.com/",
    },
    {
      title: "Kruss Automotive",
      description:
        "An automotive services site where users can book services, read blogs, and manage their service history through personalized dashboards.",
      image: Work3,
      link: "https://krussauto-eight.vercel.app/",
    },
    {
      title: "Yellow Page Application",
      description: "A business listing platform built with Next.js.",
      image: Work6,
      link: "https://fortune-yellow-page.vercel.app/",
    },

    {
      title: "Loveey",
      description: "A Valentine Application",
      image: Work5,
      link: "https://loveey-eight.vercel.app/",
    },
    {
      title: "ReVibe",
      description: "An E-Commerce Application for Pre-loved items",
      image: Work7,
      link: "https://re-vibe.vercel.app/",
    },
    {
      title: "Gaming Mental Health App",
      description:
        "This app helps users manage their mental health through guided journaling, mood tracking, and daily challenges. it has a reward system for completing tasks.",
      image: Work8,
      link: "https://gaming-mentalhealth-app.vercel.app/",
    },
    {
      title: "Nrioma",
      description:
        "A food services website that allows clients to book orders from a diverse menu.",
      image: Work2,
      link: "https://nrioma.vercel.app/",
    },
  ];

  return (
    <DefaultLayout>
      <div className="m-2 text-xl">
        <main>
          <section className="text-center my-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Selected Projects I've Worked On
            </h1>
            <p className="text-lg md:text-2xl mt-4 text-gray-600">
              Explore some of the exciting projects I've been involved in.
            </p>
          </section>

          {projects.map((project, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row items-center mt-12 mb-12 ${
                index % 2 !== 0 && "md:flex-row-reverse"
              }`}
              data-aos="fade-up"
            >
              <div className="md:w-1/2">
                <Image
                  className="w-full max-w-md"
                  src={project.image}
                  alt={project.title}
                  priority
                />
              </div>
              <div className="md:w-1/2 mt-7 md:mt-0 px-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-4 text-lg md:text-xl">{project.description}</p>
                <button className="mt-8 px-6 py-3 bg-gray-300 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </button>
              </div>
            </section>
          ))}
        </main>
      </div>
    </DefaultLayout>
  );
}
