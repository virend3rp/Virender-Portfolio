import React, { useState, useMemo } from "react";
import "./Projects.css";

const projects = [
  {
    id: "cinebrain",
    title: "CineBrain",
    description: "An AI-powered film recommender. Like Netflix... but actually listens to you.",
    thumbnail: "/cineBrain.png",
    tech: ["React", "Flask", "Python", "Pandas", "Vercel", "Scikit-learn"],
    year: "2024",
    longDescription: "Built my own content-based filtering algorithm from scratch. Cold-start problem? Solved it faster than Deadpool regenerates. Now hosts over a thousand titles so your 'What should we watch?' argument can finally end. Live on Vercel, actively helping indecisive people waste less time.",
    link: "https://cine-brain.vercel.app/",
    github: "https://github.com/virend3rp/CineBrain",
  },
  {
    id: "orderly",
    title: "Orderly",
    description: "Full‑stack restaurant ops manager. Keeps kitchens chaos-free (ish).",
    thumbnail: "/orderly-logo.png",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    year: "2025",
    longDescription: "Orderly juggles orders, inventory, staff, and customers so restaurant owners can juggle... less. Built with role-based access, real-time updates, and enough polish to make Gordon Ramsay nod approvingly. Deployed on Render with both frontend and backend working in harmony — like a well-plated dish.",
    link: "https://orderly-jade.vercel.app",
    github: "https://github.com/virend3rp/Orderly",
  },
  {
    id: "budgetflow",
    title: "BudgetFlow",
    description: "A personal finance tool that helps you stop buying useless stuff.",
    thumbnail: "/budgetflow.png",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "JWT"],
    year: "2025",
    longDescription: "Wrangled D3.js to make dynamic charts dance in real-time, because spreadsheets are boring. Secured all your precious money data with JWT and MongoDB. Early testers report reducing overspending by 15% — still not enough for that yacht, Karen.",
    link: "https://budget-flow-mu.vercel.app/",
    github: "https://github.com/virend3rp/Budget-Flow",
  },
  {
    id: "lore-drop",
    title: "Lore-Drop",
    description: "A digital museum of internet weirdness. Memes, lore, and questionable life choices.",
    thumbnail: "/LoreDrop.png",
    tech: ["React", "Express", "PostgreSQL", "Node.js", "Supabase"],
    year: "2025",
    longDescription: "Built an editorial-style frontend for showcasing memes like priceless art. Added an admin panel to handle user submissions without total chaos. Now holding over 100 artifacts of internet culture, because future generations deserve to know about Shrek memes.",
    link: "https://lore-drop.vercel.app/",
    github: "https://github.com/virend3rp/LoreDrop",
  },
    {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Minimal. Expressive. Basically me, but in website form.",
    thumbnail: "/michael-scott.jpg",
    tech: ["React", "CSS", "Framer Motion", "Vercel"],
    year: "2024",
    longDescription: "Wanted something expressive yet functional — nailed it. Modular components, buttery animations with Framer Motion, and just enough sass to make recruiters smile awkwardly. It's live, it's pretty, and it doesn't crash (most days).",
    link: "/",
    github: "https://github.com/virend3rp/Virender-Portfolio",
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