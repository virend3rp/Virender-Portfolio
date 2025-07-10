import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaServer, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiReact, SiGo } from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-2xl text-orange-500" />,
    skills: ["C/C++", "Python", "JavaScript", "Java", "SQL", "GoLang", "LaTeX"],
  },
  {
    title: "Core Coursework",
    icon: <FaLaptopCode className="text-2xl text-indigo-500" />,
    skills: [
      "DSA",
      "DBMS",
      "Machine Learning",
      "Deep Learning",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Computer Architecture",
    ],
  },
  {
    title: "Web Development",
    icon: <FaServer className="text-2xl text-green-500" />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Express",
      "MongoDB",
      "Next.js",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-2xl text-blue-500" />,
    skills: ["Git", "Firebase", "VSCode", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Skills & Technologies</h2>

        <motion.div
          className="bg-white rounded-xl border border-gray-200 shadow-md p-8 grid md:grid-cols-2 gap-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skillGroups.map((group, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {group.icon}
                <h3 className="text-lg font-semibold text-gray-800">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-3 mt-1">
                {group.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700 hover:bg-gray-200 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
