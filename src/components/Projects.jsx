import React, { useState, useMemo } from "react";
import "./Projects.css";

const projects = [
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "A full-stack URL shortener with caching and analytics.",
    thumbnail: "/logo-url.png", // 👈 add a thumbnail screenshot to your /public folder
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "RabbitMQ", "Railway", "Vercel"],
    year: "2025",
    longDescription:
      "Built a production-ready short link generator from scratch. PostgreSQL keeps the data, Redis handles blazing-fast caching, and RabbitMQ powers click analytics. Authentication secured with JWT. Deployed on Railway (backend + analytics) and Vercel (frontend). Basically, bit.ly — but homemade.",
    link: "https://url-shortner-tawny-tau.vercel.app/",
    github: "https://github.com/virend3rp/URL_SHORTNER",
  },
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
    description: "Full-stack restaurant ops manager. Keeps kitchens chaos-free (ish).",
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

const totalProjects = projects.length;

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="playlist-container">
      {/* Header */}
      <div className="playlist-header">
        <img src="/portfolio-photo.jpg" alt="Profile" className="playlist-cover" />
        <div className="playlist-info">
          <p className="playlist-type">Private Playlist</p>
          <h1 className="playlist-title">Selected Works</h1>
          <p className="playlist-meta">
            Virender • {totalProjects} projects • 2024–2025
          </p>
        </div>
      </div>

      {/* Table Head */}
      <div className="playlist-table-head">
        <span>#</span>
        <span>Title</span>
        <span>Tech</span>
        <span>Year</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.293l4.146 4.147-.708.707L8.5 4.707V13.5h-1V4.707L4.562 8.146l-.708-.707L8 3.293z"/>
          </svg>
        </span>
      </div>

      {/* Table Body */}
      <div className="playlist-table-body">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id;
          return (
            <div key={project.id} className="playlist-row">
              <div
                className={`playlist-row-main ${isExpanded ? "expanded" : ""}`}
                onClick={() => toggleExpand(project.id)}
              >
                <div className="playlist-index">
                  <span className="track-number">{index + 1}</span>
                  <button className="play-button" onClick={(e) => e.stopPropagation()}>
                    ▶
                  </button>
                </div>

                <div className="playlist-title-cell">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="playlist-thumbnail"
                  />
                  <div>
                    <p className="project-title">{project.title}</p>
                    <p className="project-desc">{project.description}</p>
                  </div>
                </div>

                <span className="playlist-tech">
                  {project.tech.slice(0, 3).join(", ")}
                  {project.tech.length > 3 && " +more"}
                </span>

                <span>{project.year}</span>

                <span className="playlist-duration">
                  {`${2 + index}:${(10 + index * 5) % 60}`.padStart(4, "0")}
                </span>
              </div>

              {isExpanded && (
                <div className="playlist-expanded">
                  <p>{project.longDescription}</p>
                  <div className="playlist-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Project
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
