import React, { useEffect } from "react";

import Image from "next/image";
import Logo from "../public/image/project.jpg";
import Work1 from "../public/image/for portfolio3.png";
import Work2 from "../public/image/portfoliotawaz.png";
import Work3 from "../public/image/forport6.jpg";
import Work4 from "../public/image/forport7.jpg";
import DefaultLayout from "@/layout/DefaultLayout";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MyWork() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <DefaultLayout>
      <div className="m-2 text-xl">
        <main>
          <section className="">
            <div className="">
              <div className="mt-9 mb-12 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mt-7">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Selected projects I've worked on.
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4">
                    A brief description
                  </p>
                </div>

                <div className="md:w-1/2 flex justify-center mt-7 ">
                  <Image
                    className="w-full max-w-md"
                    src={Logo}
                    alt="logo"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-9 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 ">
                <Image
                  className="w-full max-w-md"
                  src={Work1}
                  alt="logo"
                  priority
                />
              </div>
              <div className="md:w-1/2 mt-7">
                <h3>Flincap</h3>
                <p>
                  I collaborated on this Live Fintech Application that was
                  created using Next.js, tailwind css, firebase and MySQL
                </p>
                <p>
                  A Crypto OTC Exchange with automatic fiat payout in 5 Minutes
                </p>
                <p>
                  Learned team work,database management, Cryptocurrency,
                  debugging,collaboration on github among other things.
                </p>
                <button className="text-black-300 bg-[#006950] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-5">
                  <a href="https://flincap.com/">View</a>
                </button>
              </div>
            </div>
          </section>

          <section className="mt-9 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mt-7">
                <h3> Tawas Food Website</h3>
                <p>This Live site was created using React.js.</p>
                <p>
                  A food services website that helps clients book orders from a
                  variety of menu.
                </p>
                <button className="text-black-300 bg-[#006950] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-5">
                  <a href="http://tawastastytreats.ng/">View</a>
                </button>
              </div>

              <div className="md:w-1/2 ">
                <Image
                  className="w-full max-w-md"
                  src={Work2}
                  alt="logo"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="mt-9 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 ">
                <Image
                  className="w-full max-w-md"
                  src={Work3}
                  alt="logo"
                  priority
                />
              </div>
              <div className="md:w-1/2 mt-7">
                <h3>Kruss Automotive</h3>
                <p>
                  An Automotive Services site where users can book for their
                  auto needs, it has a blog, and users can log in having
                  dashboards where their services can be tracked
                </p>
                <button className="text-black-300 bg-[#006950] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-5">
                  <a href="https://krussauto-eight.vercel.app/">View</a>
                </button>
              </div>
            </div>
          </section>

          <section className="mt-9 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mt-7">
                <h3>Purposeful Path </h3>
                <p>
                  This fullstack Live site was created using Nextjs and Tailwind
                  css with mongodb for its database, users can log in, have
                  dashboards where their job serach journey is documented and
                  tracked.
                </p>
                <p>
                  A platform that help young job-seekers or budding
                  entrepreneurs with a desire to make the best of their lives.
                  It provides guidance and support, empowering them with the
                  knowledge, skills, and mentorship necessary to thrive in
                  today's dynamic world.
                </p>
                <button className="text-black-300 bg-[#006950] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium mt-5">
                  <a href="https://darmiobi.com/">View</a>
                </button>
              </div>
              <div className="md:w-1/2 ">
                <Image
                  className="w-full max-w-md"
                  src={Work4}
                  alt="logo"
                  priority
                />
              </div>
            </div>
          </section>

          {/* <section className="">
            <div>
              <h3>Elan Africa</h3>
              <p>I collaborated on this site using Nextjs and tailwind css</p>
              <p>
                A Growth consultancy and marketing website that help businesses.
              </p>
              <a href="https://elanafrica3.netlify.app/" class="btn2">
                View
              </a>
            </div>
          </section> */}
        </main>
      </div>
    </DefaultLayout>
  );
}
