import Logo from "../public/image/portbg (5).png";
import Image from "next/image";

import DefaultLayout from "@/layout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="m-2 text-xl">
        <main>
          <section className="">
            <div className="">
              <div className="mt-9 mb-9 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mt-7">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Hello, I'm Fortune
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4">
                    A Passionate Software Developer
                  </p>
                  <p className="text-lg md:text-xl mt-4">
                    I love creating elegant and efficient solutions to complex
                    problems. With expertise in various technologies, I bring
                    creative ideas to life.
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
          <section className="about">
            <p>
              I have worked as Center Operations Officer (Customer Service and
              Sales) and Customer Experience Management Professional at an
              Automotive Service industry and Fintech respectively,{" "}
            </p>
            <p>
              I describe myself as a A customer-centric software developer
              leveraging technology to create logical and innovative solutions
              to complex problems. My technical skills include JavaScript, React
              Js, Next JS, Tailwind CSS, Bootstrap, Figma, and Git, and I have
              experience working on a range of projects in e-commerce, health
              tech, auto-tech, Food-tech, and Fintech. Apart from my technical
              skills, I possess soft skills such as empathy, emotional
              intelligence, and organizational leadership.
            </p>
          </section>

          <section className="my-work">
            <h2 className="text-3xl font-bold mb-4">My Work</h2>
            {/* Add your portfolio projects here */}
          </section>

          <section className="tech-stack">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            {/* List your tech stack and technologies here */}
          </section>

          <section className="skills">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            {/* List your skills and expertise here */}
          </section>

          <section className="cv">
            <h2 className="text-3xl font-bold mb-4">CV</h2>
            {/* Add a link to your CV or resume here */}
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
