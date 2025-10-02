import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Build professional email structure
    const subject = `Enquiry: ${formData.subject}`;
    const body = `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from my portfolio website`;

    // Open user's default email app with prefilled email
    const mailtoLink = `mailto:fortunechinenyem@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Reset states
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Got a proposal or just want to say hello? I'd love to hear from you
            and discuss how we can work together!
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              Contact Information
            </h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                  <GoLocation className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300 text-lg">Lagos, Nigeria</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                  <HiOutlineMailOpen className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:fortunechinenyem@gmail.com"
                    className="text-gray-300 text-lg hover:text-blue-400 transition-colors duration-300"
                  >
                    fortunechinenyem@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300 border border-green-500/30">
                  <HiOutlinePhone className="text-green-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+2348067585444"
                    className="text-gray-300 text-lg hover:text-blue-400 transition-colors duration-300"
                  >
                    +234 806 758 5444
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-4 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-700/50 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-4 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-700/50 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-4 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-700/50 text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Fortune, I'd like to talk about..."
                  className="w-full px-4 py-4 rounded-xl border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-700/50 text-white placeholder-gray-400 transition-all duration-300 resize-none backdrop-blur-sm"
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl ${
                    submitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : submitted
                      ? "bg-gradient-to-r from-green-600 to-green-700"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <FaCheckCircle className="mr-3 text-xl" />
                      Message Ready in Email App!
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-3 text-xl" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm"
                >
                  Your email draft has been opened in your email app. Just press
                  <strong> Send</strong>.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
