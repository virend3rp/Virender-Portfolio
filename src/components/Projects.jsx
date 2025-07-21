import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "BudgetFlow",
    description:
      "Ever bought 12 packs of ramen just 'cause they were on sale? Yeah, me too. This app keeps your finances in check... so you can afford better noodles. You're welcome.",
    tech: ["React", "Chart.js", "Firebase"],
    image: "/budgetflow-logo.png",
    link: "https://github.com/virend3rp/Budget-Flow/tree/main?tab=readme-ov-file",
  },
  {
    title: "Personal Portfolio",
    description:
      "It's like my online dating profile, but for recruiters. Swipe right and you get a developer. Swipe left and... well, you miss out on all this genius.",
    tech: ["React", "CSS", "Creativity"],
    image: "/make-our-removebg-preview.png",
    link: "/",
  },
  {
    title: "ChatApp",
    description:
      "Built this to talk to myself professionally. It’s like therapy, but with better UI.",
    tech: ["Node.js", "Socket.io", "React"],
    image: "/michael-scott-removebg-preview.png",
    link: "https://github.com/virend3rp/ChatterBox",
  },
  {
  title: "Save Walter White Redesign",
  description:
    "Redesigned a site that could’ve helped a poor chemistry teacher’s son... but for some reason this bald guy with a goatee keeps calling me. I told him I just do frontend, not front lines.",
  tech: ["HTML", "CSS", "Design Roast"],
  image: "/walter-white.jpg",
  link: "https://github.com/virend3rp/savewalterwhite-redesign"
}

];

export default function Projects() {
  return (
    <div className="project-grid-container">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="view-btn"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
