import React from 'react';
import './Experience.css';

// --- Data Layer ---
const experienceData = [
  {
    id: 1,
    startDate: 'May 2025',
    endDate: 'Present',
    company: 'Adeptmind',
    companyLink: '#',
    title: 'Data Analyst',
    location: 'Remote, Based out of India',
    description: 'Working in the data analysis department helping companies with AI powered traffic solutions',
    skills: ['Python', 'SQL', 'Traffic Analysis', 'Microsoft Excel', 'POWERBI'],
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <header className="experience-header">
        <h1>Professional Experience</h1>
        <p>My career journey, focused on building learning and working on impactful products.</p>
      </header>

      <div className="timeline">
        {experienceData.map((job) => (
          <article key={job.id} className="timeline-entry">
            <div className="timeline-meta">
              <span className="timeline-date">{`${job.startDate} – ${job.endDate}`}</span>
            </div>

            <div className="timeline-content">
              <div className="timeline-point"></div>
              <h3 className="job-title">
                {job.title}
                <span className="job-company">
                  {' @ '}
                  <a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>

              <div className="skill-tags">
                {job.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
