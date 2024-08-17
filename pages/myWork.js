import React, { useEffect } from "react";
import Image from "next/image";
import DefaultLayout from "@/layout/DefaultLayout";
import Aos from "aos";
import "aos/dist/aos.css";

import Work1 from "../public/image/for portfolio3.PNG";
import Work2 from "../public/image/portfoliotawaz.PNG";
import Work3 from "../public/image/forport6.JPG";
import Work4 from "../public/image/forport7.JPG";
import Work5 from "../public/image/17th.PNG";
import Work6 from "../public/image/17tth.PNG";
import Work7 from "../public/image/17ttth.PNG";

export default function MyWork() {
  useEffect(() => {
    Aos.init({ duration: 1800, offset: 0 });
  }, []);

  const projects = [
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
      title: "Purposeful Path",
      description:
        "A full-stack platform created with Next.js, Tailwind CSS, and MongoDB. It helps job-seekers or budding entrepreneurs track their journey and receive guidance and mentorship.",
      image: Work4,
      link: "https://darmiobi.com/",
    },
    {
      title: "Subscription App",
      description:
        "A coding challenge for a subscription app built with Next.js.",
      image: Work5,
      link: "https://subscription-app-seven.vercel.app/",
    },
    {
      title: "Kasuwa-X",
      description:
        "A practice e-commerce store built with Next.js and TypeScript. Features include user authentication, product management, shopping cart, and order history.",
      image: Work7,
      link: "https://kasuwa-x.vercel.app/",
    },
    {
      title: "Tawas Food Website",
      description:
        "A React.js-based food services website that allows clients to book orders from a diverse menu.",
      image: Work2,
      link: "http://tawastastytreats.ng/",
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
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
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
