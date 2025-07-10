import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/download.jpg"; // Make sure this image exists

export default function AboutSection() {
  return (
    <section className="bg-slate-100 py-20 text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        <motion.img
          src={aboutImg}
          alt="Virender"
          className="w-48 h-48 object-cover rounded-full border-4 border-orange-300 shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm an engineering graduate from <span className="font-medium text-gray-900">IIT Jodhpur, Class of 2025</span>, with a degree in Civil Engineering. I’m deeply passionate about building meaningful products and solving real-world problems with code.
        </motion.p>

        <motion.p
          className="max-w-2xl text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Whether it's writing clean code, watching anime, or playing cricket, I bring energy and intention into everything I do. I believe growth comes from consistency and pushing through life’s toughest challenges.
        </motion.p>
      </div>
    </section>
  );
}
