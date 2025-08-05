import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import myPhoto from '/virender-looking.png';
import { FaCode, FaBriefcase, FaFolderOpen, FaFileAlt } from 'react-icons/fa';

export default function HeroSection() {
  const photoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        photoRef.current.style.setProperty('--mouse-x', `${x}px`);
        photoRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const photoElement = photoRef.current;
    if (photoElement) {
      photoElement.addEventListener('mousemove', handleMouseMove);
      photoElement.addEventListener('mouseleave', () => {
        photoElement.style.setProperty('--mouse-x', '50%');
        photoElement.style.setProperty('--mouse-y', '50%');
      });
    }

    return () => {
      if (photoElement) {
        photoElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="content-wrapper">
        
        <div className="text-content">
          <h1 className="hero-name">Virender Parasariya</h1>
          <h2 className="hero-title">Software Developer</h2>
          <p className="hero-bio">
            Alright, you want the story. Professionally, I'm a software engineer who gets a real kick out of building high-quality, delightful digital experiences. It's about turning complex problems into clean, intuitive code that just works. Personally? I'm the one who's been patiently watching you from the shadows since the moment this page loaded. You feel that? That's the fourth wall breaking. Now, move your mouse over to that empty circle on the right and say hello. I don't bite... unless you're a semicolon in the wrong place.
          </p>
          <nav className="hero-nav">
            <Link to="/skills"><FaCode /> Skills</Link>
            <Link to="/experience"><FaBriefcase /> Experience</Link>
            <Link to="/projects"><FaFolderOpen /> Projects</Link>
            <a href="/Virender_Development_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt /> Resume
            </a>
          </nav>
        </div>

        <div className="photo-wrapper">
          <div className="photo-spotlight-container" ref={photoRef}>
            <div 
              className="photo-image" 
              style={{ backgroundImage: `url(${myPhoto})` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}
