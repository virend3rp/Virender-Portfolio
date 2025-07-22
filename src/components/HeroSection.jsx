import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import img1 from "/vr.jpg";
import img2 from "/v2.jpg";
import { Link } from "react-router-dom";

const images = [img1, img2];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-left">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`hero-image ${index === currentIndex ? "active" : ""}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-right">
        <h1 className="hero-title">Holaaa Amigo</h1>
<p className="hero-subtitle">
  I’m Virender Parasariya – part-time developer, full-time cricket addict, movie buff,
  and unofficial content creator for an audience of exactly me and maybe two close friends
  who can’t escape my reels. When I’m not screaming at my screen during a nail-biting Super Over
  or quoting entire scenes from Golmaal, I’m editing videos like they’re Oscar submissions
  (even if they’re just me slow-zooming on samosas with dramatic music). I love the storytelling
  part — stitching together sound, visuals, chaos — it’s my version of therapy, only louder and
  with way more transitions. Travel keeps me sane, movies keep me inspired, and cricket… well,
  cricket is life. I get more hyped about a perfectly timed helicopter shot than most people do
  about promotions. I’ve got playlists named after stadiums, and my bucket list has more cricket
  grounds than countries. This site? Just a fun little space where all my weird interests collide —
  with zero apologies and maximum madness. Coding is just how I bring it all to life… when there’s
  no match on.
</p>
        <div className="hero-buttons">
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/skills"><button>Skills</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <a href="/Virender_Development_Resume.pdf" download><button>Download My Resume</button></a>
        </div>
      </div>
    </div>
  );
}
