import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";
import TechStackImage from "../public/image/about.jpg";

export default function Services() {
  return (
    <DefaultLayout>
      <div className="px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4"> Services</h1>
          <p className="text-lg text-gray-600">
            Discover the range of services I offer to meet your technical needs
            and support.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Technical Support
          </h2>
          <p className="text-lg mb-4">
            I provide comprehensive technical support to ensure your systems run
            smoothly and efficiently. My services include troubleshooting,
            system maintenance, and optimization to enhance performance.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>24/7 Technical Support</li>
            <li>System Troubleshooting</li>
            <li>Performance Optimization</li>
            <li>Regular Maintenance</li>
            <li>Software Updates and Upgrades</li>
          </ul>
          <p className="text-lg">
            I am here to help you resolve issues promptly and minimize downtime.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            My Tech Stacks
          </h2>
          <p className="text-lg mb-4">
            I leverage a diverse set of technologies to build robust and
            scalable solutions tailored to your needs. My expertise spans across
            various tools and frameworks to deliver high-quality results.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4">
              <h3 className="text-xl font-semibold mb-4">
                Frontend Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4">
              <h3 className="text-xl font-semibold mb-4">
                Backend Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js</li>
                <li>Express.js</li>

                <li>Database Management (MongoDB, MySQL)</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Git</li>

                <li>Figma</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4">
              <h3 className="text-xl font-semibold mb-4">
                Testing & Debugging
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Jest</li>

                <li>Debugging Tools</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Image
              src={TechStackImage}
              alt="Tech Stack"
              width={600}
              height={400}
            />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
