import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/layout/DefaultLayout";
import Logo from "../public/image/hero.jpg";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="px-4 text-lg">
        <main>
          <section className="flex flex-col md:flex-row items-center mt-16 mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Hello, I'm Fortune
              </h1>
              <p className="text-2xl lg:text-3xl mt-6">
                A Passionate Software Developer
              </p>
              <Link href="/about">
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
                  Learn More About Me
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src={Logo}
                alt="Fortune"
                className="w-full max-w-sm rounded-lg shadow-lg"
                priority
              />
            </div>
          </section>

          <section className="bg-gray-100 p-10 rounded-lg mt-16">
            <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              I have a passion for crafting elegant and efficient solutions to
              intricate challenges. With proficiency in various cutting-edge
              technologies, I transform creative concepts into reality.
            </p>
            <p className="text-lg leading-relaxed">
              My professional journey includes roles as a Center Operations
              Officer in the Automotive Service industry and as a Customer
              Experience Management Professional in the Fintech sector.
            </p>
          </section>

          <section className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-6">My Work</h2>
            <p className="text-lg leading-relaxed mb-8">
              I've worked on a range of projects across industries like fintech,
              edtech, autotech, and more.
            </p>
            <Link href="/myWork">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">
                View Selected Projects
              </button>
            </Link>
          </section>

          <section className="bg-gray-100 p-10 rounded-lg mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg w-full md:w-80">
                <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
                  Soft Skills
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Collaboration</li>
                  <li>Adaptability</li>
                  <li>Innovation</li>
                  <li>Time Management</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg w-full md:w-80">
                <h3 className="text-2xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
                  Technical Skills
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>HTML/CSS</li>
                  <li>MongoDB</li>
                  <li>Version Control (Git)</li>
                  <li>API Integration</li>
                  <li>Testing and Debugging</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center mt-20 mb-16">
            <h2 className="text-3xl font-bold mb-6">CV</h2>
            <p className="text-lg leading-relaxed mb-6">
              Interested in my full professional background? Download my CV.
            </p>
            <a
              href="/my_cv.pdf"
              download="Fortune_CV.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}
