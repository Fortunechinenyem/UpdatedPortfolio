import React, { useState } from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSubmitted(true);
      } else {
        const result = await response.json();
        setError(result.message || "Failed to send message.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-xl">
      <div className="container text-center my-12 mb-7">
        <h3 className="font-bold text-4xl mb-7">Get in Touch</h3>
        <p className="text-xl">Got a Proposal, or just want to say Hello?</p>
      </div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col justify-around md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#0B2546] w-full max-w-6xl p-8 rounded-xl shadow-lg text-white">
          <div className="space-y-5 mt-5">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">
                <GoLocation />
              </span>
              <p className="text-xl">Lagos, Nigeria</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">
                <HiOutlineMailOpen />
              </span>
              <p className="text-xl">fortunechinenyem@gmail.com</p>
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl shadow-lg p-10 max-w-2xl text-gray-600 md:w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Enter the subject"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  required
                  placeholder="Message"
                  rows="5"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Send Message"}
              </button>
              {submitted && (
                <div className="text-green-500 mt-4">
                  Message submitted successfully!
                </div>
              )}
              {error && <div className="text-red-500 mt-4">{error}</div>}
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to website
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;
