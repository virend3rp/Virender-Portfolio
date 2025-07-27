import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Projects.css";

const projectDetails = {
  cinebrain: {
    title: "CineBrain",
    problem: "Finding mood-based movie recommendations is tedious.",
    tech: ["React", "Flask", "Python", "Pandas", "Vercel"],
    role: "Full Stack Developer",
    challenges: "Handled content-based filtering and optimized cold-start problem.",
    outcome: "Live on Vercel with over 100+ titles. Used by peers in student clubs.",
    link: "https://cine-brain.vercel.app",
    github: "https://github.com/your-username/cinebrain",
  },
  // Add other projects here...
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-detail-page">
      <h1>{project.title}</h1>

      <section>
        <h3>Problem Statement</h3>
        <p>{project.problem}</p>
      </section>

      <section>
        <h3>Tech Stack</h3>
        <ul className="tech-list">
          {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </section>

      <section>
        <h3>My Role & Contribution</h3>
        <p>{project.role}</p>
      </section>

      <section>
        <h3>Process & Challenges</h3>
        <p>{project.challenges}</p>
      </section>

      <section>
        <h3>Outcome & Links</h3>
        <p>{project.outcome}</p>
        <a href={project.link} target="_blank" rel="noreferrer">Live Project ↗</a> |{" "}
        <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </section>

      <Link to="/" className="back-link">← Back to Projects</Link>
    </div>
  );
};

export default ProjectDetails;
