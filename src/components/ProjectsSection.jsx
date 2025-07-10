import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChatterBox",
    description:
      "Real-time MERN chat app supporting private/group messaging with Socket.io, JWT auth, MongoDB persistence, and user presence.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    date: "Feb 2025",
    link: "https://github.com/yourusername/chatterbox",
  },
  {
    title: "BudgetFlow",
    description:
      "Responsive finance dashboard for managing budgets with React, Redux, REST APIs, and Firebase for auth and storage.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Firebase"],
    date: "Dec 2024",
    link: "https://your-live-site.com/budgetflow",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-800">Projects</h2>

        {/* Grid view for desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white hover:bg-orange-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-3">{project.description}</p>
              <p className="text-sm text-slate-400 mb-2">{project.date}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Carousel view for mobile */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-3 -mx-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[85%] snap-center bg-white hover:bg-orange-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-3">{project.description}</p>
              <p className="text-sm text-slate-400 mb-2">{project.date}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
