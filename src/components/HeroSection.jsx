import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/portfolio.jpeg";
// Place your resume in the public folder and link like "/Virender_Resume.pdf"

export default function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 px-6 py-24 flex flex-col items-center text-center overflow-hidden">
      {/* Radiating Circles */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-0">
        <div className="w-80 h-80 bg-orange-200 opacity-20 rounded-full absolute blur-3xl animate-pulse-slow" />
        <div className="w-60 h-60 bg-orange-300 opacity-20 rounded-full absolute blur-2xl animate-pulse-slow delay-150" />
        <div className="w-40 h-40 bg-orange-400 opacity-30 rounded-full absolute blur-xl animate-pulse-slow delay-300" />
      </div>

      {/* Profile Image */}
      <motion.img
        src={profileImg}
        alt="Virender's Profile"
        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-orange-500 z-10 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Text and Buttons */}
      <motion.div
        className="max-w-2xl mt-8 space-y-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-800">
          Hey, I’m Virender — <span className="text-orange-600">Engineer</span>, Anime Fan, and Cricket Buff.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m a developer who’s overcome challenges and learned from them.
          I channel that resilience into building meaningful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition"
          >
            View My Work
          </a>
          <a
            href="\Virender_Development_Resume.pdf"
            download
            className="px-6 py-3 text-white-600 border border-orange-500 hover:bg-red-500 rounded-lg font-medium transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
