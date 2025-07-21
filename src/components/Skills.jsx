import React, { useEffect, useState } from 'react';
import './Skills.css';

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

const Skills = () => {
  const [cpProfiles, setCpProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const cached = localStorage.getItem('cpProfiles');
        const cachedTime = localStorage.getItem('cpProfilesTime');
        const now = Date.now();

        if (cached && cachedTime && now - parseInt(cachedTime) < CACHE_DURATION) {
          setCpProfiles(JSON.parse(cached));
          setLoading(false);
          return;
        }

        // Fetch LeetCode from Unofficial API
        const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/Vir3nd3rp");
        const lcJson = await lcRes.json();

        const lcStats = {
          name: "LeetCode",
          icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
          glow: "#FFA116",
          stats: [
            `Problems Solved: ${lcJson.totalSolved}`,
            `Easy: ${lcJson.easySolved}`,
            `Medium: ${lcJson.mediumSolved}`,
            `Hard: ${lcJson.hardSolved}`,
          ],
          link: "https://leetcode.com/Vir3nd3rp/"
        };

        // Fetch Codeforces
        const cfResponse = await fetch("https://codeforces.com/api/user.info?handles=parasariyav");
        const cfData = await cfResponse.json();
        const cfUser = cfData?.result?.[0];

        const cfStats = {
          name: "Codeforces",
          icon: "https://sta.codeforces.com/s/96649/images/codeforces-logo-with-telegram.png",
          glow: "#1F8ACB",
          stats: [
            `Rating: ${cfUser?.rating || "N/A"}`,
            `Rank: ${cfUser?.rank || "N/A"}`,
            `Max Rating: ${cfUser?.maxRating || "N/A"}`
          ],
          link: `https://codeforces.com/profile/${cfUser?.handle}`
        };

        const profiles = [lcStats, cfStats];
        localStorage.setItem('cpProfiles', JSON.stringify(profiles));
        localStorage.setItem('cpProfilesTime', now.toString());

        setCpProfiles(profiles);
      } catch (error) {
        console.error("Failed to fetch profiles:", error);
        setCpProfiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const skillData = {
    "Development Skills": [
      { name: "React", icon: "https://img.icons8.com/color/96/react-native.png", glow: "#61DBFB" },
      { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png", glow: "#3C873A" },
      { name: "Express.js", icon: "https://img.icons8.com/ios/96/ffffff/express-js.png", glow: "#ffffff" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png", glow: "#47A248" },
      { name: "Next.js", icon: "https://img.icons8.com/fluency/48/nextjs.png", glow: "#ffffff" },
      { name: "Redux", icon: "https://img.icons8.com/color/96/redux.png", glow: "#764ABC" },
      { name: "HTML", icon: "https://img.icons8.com/color/96/html-5--v1.png", glow: "#E44D26" },
      { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png", glow: "#264de4" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/96/javascript--v1.png", glow: "#F7DF1E" },
    ],
    "Languages": [
      { name: "C++", icon: "https://img.icons8.com/color/96/c-plus-plus-logo.png", glow: "#00599C" },
      { name: "Python", icon: "https://img.icons8.com/color/96/python.png", glow: "yellow" },
      { name: "Java", icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", glow: "#5382A1" },
      { name: "SQL", icon: "https://img.icons8.com/ios-filled/100/ffffff/sql.png", glow: "#F29111" },
      { name: "GoLang", icon: "https://img.icons8.com/color/96/golang.png", glow: "#00ADD8" },
      { name: "LaTeX", icon: "https://img.icons8.com/?size=100&id=WBooq2dInw0x&format=png&color=000000", glow: "#008080" },
    ],
    "Tools & Frameworks": [
      { name: "Firebase", icon: "https://img.icons8.com/color/96/firebase.png", glow: "#FFA611" },
      { name: "Git", icon: "https://img.icons8.com/color/96/git.png", glow: "#F05032" },
      { name: "Pandas", icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000", glow: "#150458" },
      { name: "NumPy", icon: "https://img.icons8.com/color/96/numpy.png", glow: "#013243" },
      { name: "jQuery", icon: "https://img.icons8.com/ios-filled/100/087ea4/jquery.png", glow: "#087EA4" },
      { name: "VS Code", icon: "https://img.icons8.com/color/96/visual-studio-code-2019.png", glow: "#007ACC" },
      { name: "Linux", icon: "https://img.icons8.com/color/96/linux--v1.png", glow: "#FCC624" },
    ],
  };

  return (
    <div className="skills-section">
      {/* Competitive Profiles Section */}
      <div className="skills-category">
        <h2 className="skills-title">Competitive Profiles</h2>
        <div className="cp-grid">
          {loading ? (
            <p style={{ color: "#fff" }}>Loading competitive profiles...</p>
          ) : cpProfiles.length > 0 ? (
            cpProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card wide"
                style={{ '--glow': profile.glow }}
              >
                <div className="cp-left">
                  <img src={profile.icon} alt={profile.name} />
                </div>
                <div className="cp-right">
                  <h3>{profile.name}</h3>
                  <ul>
                    {profile.stats.map((stat, i) => (
                      <li key={i}>{stat}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))
          ) : (
            <p style={{ color: "#fff" }}>No profile data found.</p>
          )}
        </div>
      </div>

      {/* Technical Skills */}
      {Object.entries(skillData).map(([category, skills], i) => (
        <div key={i} className="skills-category">
          <h2 className="skills-title">{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ '--glow': skill.glow }}
              >
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
