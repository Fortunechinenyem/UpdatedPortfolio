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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let data = {
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
        console.log("Response failed!");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" text-xl">
      <div className="container text-center my-12 mb-7">
        <h3 className="font-bold text-4xl mb-7">Get in Touch</h3>
        <p className="text-xl">Got a Proposal, or just want to say Hello?</p>
      </div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className=" flex flex-col justify-around md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#0B2546] w-full max-w-6xl p-8 rounded-xl shadow-lg text-white">
          <div className="justify-around">
            <div className=" space-y-5 mt-5">
              <div className=" space-x-2">
                <span className="text-2xl">
                  <GoLocation />
                </span>
                <p className="text-xl"> Lagos, Nigeria</p>
              </div>
              <div className="flex items-center space-x-2 ml-0">
                <span className="text-2xl">
                  <HiOutlineMailOpen />
                </span>
                <p className="text-xl">fortunechinenyem@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl text-gray-600 md:w-100 mb-7">
            <form onSubmit={handleSubmit} className=" space-y-4 mb-9">
              <div>
                <label>Names</label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Enter the subject"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  required
                  placeholder="Message"
                  rows="5"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus-none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block self-start bg-[#0B2546] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Send Message"}
              </button>
              {submitted && (
                <div className="text-green-500">
                  Message submitted successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div>
        <Link href="/">Go back to website</Link>
      </div>
    </div>
  );
}

export default ContactUs;
