import React, { useState, useMemo } from "react";
import "./Projects.css";

const projects = [
  {
    id: "cinebrain",
    title: "CineBrain",
    description: "AI-powered film recommender for moods and genres.",
    thumbnail: "/thinker.jpg",
    tech: ["React", "Flask", "Python", "Pandas", "Vercel", "Scikit-learn"],
    year: "2024",
    longDescription: "This project involved creating a content-based filtering algorithm from scratch. A key challenge was optimizing the cold-start problem for new users and titles. The final outcome is a live application on Vercel with over thousand titles, actively used by peers to find movies to watch.",
    link: "https://cine-brain.vercel.app/",
    github: "https://github.com/virend3rp/CineBrain",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Minimal and expressive showcase of my work and writing.",
    thumbnail: "/michael-scott.jpg",
    tech: ["React", "CSS", "Framer Motion", "Vercel"],
    year: "2024",
    longDescription: "The main challenge was to create a design that was both expressive and highly functional. I focused on building modular, reusable components and implementing fluid animations with Framer Motion to enhance the user experience. The site is now live, receiving positive feedback on its design and usability.",
    link: "/",
    github: "https://github.com/virend3rp/Virender-Portfolio",
  },
  {
    id: "budgetflow",
    title: "BudgetFlow",
    description: "A personal finance tool with smart budgeting and charts.",
    thumbnail: "/budgetflow-logo.png",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "JWT"],
    year: "2025",
    longDescription: "Implementing dynamic, interactive charts with D3.js that updated in real-time was a significant technical hurdle. Ensuring secure and persistent data syncing with MongoDB required careful state management. The application has successfully helped initial users reduce their monthly overspending by an average of 15%.",
    link: "https://budget-flow-mu.vercel.app/",
    github: "https://github.com/virend3rp/Budget-Flow",
  },
  {
    id: "Chat-app",
    title: "Chatterbox",
    description: "A messaging app to talk to myself.",
    thumbnail: "/make-our-removebg-preview.png",
    tech: ["Socket.IO", "React", "Nodejs", "JWT"],
    year: "2025",
    longDescription: "The primary challenge was to architect a system that could ensure high availability and maintain low latency under heavy, unpredictable traffic. This was achieved using Go for performance, with Docker and Kubernetes for container orchestration. The gateway now processes over 1 million requests per day with 99.99% uptime.",
    github: "https://github.com/virend3rp/ChatterBox",
  },
];

// Extract unique years sorted descending (most recent first)
const allYears = Array.from(new Set(projects.map((p) => p.year))).sort(
  (a, b) => b.localeCompare(a)
);

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [filterYear, setFilterYear] = useState(null);

  const filteredProjects = useMemo(() => {
    if (!filterYear) return projects;
    return projects.filter((project) => project.year === filterYear);
  }, [filterYear]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rational-container">
      <h1 className="page-title">Selected Works</h1>

      {/* Year Filter Toolbar */}
      <div
        className="filter-toolbar"
        role="toolbar"
        aria-label="Filter projects by year"
      >
        <button
          className={`filter-btn ${filterYear === null ? "active" : ""}`}
          onClick={() => setFilterYear(null)}
          aria-pressed={filterYear === null}
        >
          All
        </button>
        {allYears.map((year) => (
          <button
            key={year}
            className={`filter-btn ${filterYear === year ? "active" : ""}`}
            onClick={() => setFilterYear(year)}
            aria-pressed={filterYear === year}
          >
            {year}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-projects-message" role="alert">
          No projects found for this year. Try clearing filters.
        </div>
      ) : (
        <div className="rational-grid" role="list">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`rational-card ${isExpanded ? "expanded" : ""}`}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-controls={`details-${project.id}`}
                onClick={() => toggleExpand(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(project.id);
                  }
                }}
              >
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="card-thumbnail" />
                <div className="card-content-wrapper">
                  <div className="rational-card-header">
                    <h2>{project.title}</h2>
                    <span className="year">{project.year}</span>
                  </div>
                  <p className="rational-description">{project.description}</p>
                  <ul className="tech-list">
                    {(isExpanded ? project.tech : project.tech.slice(0, 4)).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                    {project.tech.length > 4 && !isExpanded && <li>+ more</li>}
                  </ul>

                  <div
                    id={`details-${project.id}`}
                    className="expanded-details"
                    aria-hidden={!isExpanded}
                  >
                    <p>
                      <strong>Role:</strong> {project.role}
                    </p>
                    <p>{project.longDescription}</p>
                    <div className="modal-links">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Live Project
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;