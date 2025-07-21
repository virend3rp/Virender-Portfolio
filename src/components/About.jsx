import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const images = ["/pic-1.JPG", "/pic-3.jpg"];

  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("likeCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [hasLiked, setHasLiked] = useState(() => {
    return sessionStorage.getItem("liked") === "true";
  });

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      localStorage.setItem("likeCount", newLikes.toString());
      sessionStorage.setItem("liked", "true");
      setHasLiked(true);
    }
  };

  const handleDislike = () => {
    alert("🚫 Action not allowed. This button has trust issues.");
  };

  const comments = [
    {
      name: "SnackOverflow",
      avatar: "https://i.pravatar.cc/40?img=10",
      text: "I came for the code, stayed for the sarcasm.",
    },
    {
      name: "404NotAFan",
      avatar: "https://i.pravatar.cc/40?img=22",
      text: "Feels like Deadpool accidentally majored in Civil Engg.",
    },
    {
      name: "DebuggerMom",
      avatar: "https://i.pravatar.cc/40?img=2",
      text: "He explained pull requests to me. Still confused, but proud.",
    },
    {
      name: "LazyCricketer_69",
      avatar: "https://i.pravatar.cc/40?img=3",
      text: "DSA + Cricket + coffee = this guy’s blood type.",
    },
    {
      name: "VSCodeWhisperer",
      avatar: "https://i.pravatar.cc/40?img=5",
      text: "He doesn’t write bugs. He writes plot twists.",
    },
  ];

  return (
    <div className="about-youtube-layout">
      <div className="video-section">
        <div className="video-player">
          <div className="slideshow">
            {images.map((img, i) => (
              <img
                src={img}
                alt={`slide-${i}`}
                className="slide"
                key={i}
                style={{ animationDelay: `${i * 4}s` }}
              />
            ))}
          </div>
          <div className="play-button">▶</div>
        </div>

        <div className="video-actions">
          <div className="left-controls">
            <button onClick={handleLike}>👍 {likes}</button>
            <button onClick={handleDislike}>👎</button>
            <button>🔗 Share</button>
            <button>
              <a
                href="/Virender_Development_Resume.pdf"
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                📄 Resume
              </a>
            </button>
          </div>
        </div>

        <div className="video-meta">
          <h2>I'm Virender Parasariya— Not Your Average  Engineer</h2>
          <div className="stats">1,234,567 views • Uploaded just now</div>
          <div className="channel">
            @virender.codes
            <button className="subscribe">Subscribed ✓</button>
          </div>
        </div>

        <div className="video-description">
          <strong>📌 Description:</strong>
          <p>
            🎓 Went to IIT Jodhpur to study Civil Engineering. Because obviously, concrete is the gateway drug to JavaScript.
          </p>
          <p>
            👨‍💻 Somewhere between calculating beam loads and studying Fluid Mechanics, I fell into the world of DSA. Now I spend more time with my debugger than with actual people.
          </p>
          <p>
            🏏 When I’m not writing code that works (on the third try), I’m watching cricket and pretending I’m the third umpire. Yes, I yell “OUT!” at the screen. Ee Sala Cup Namde Forever.
          </p>
          <p>🫂 Love to Travel and Enjoy my time with the homies </p>
          <p>
            💀 Basically, I’m like Deadpool — if Deadpool fixed merge conflicts, pushed code at 3am, and used dark mode religiously.
          </p>
          <p>
            Smash that Subscribe button. Or don’t. But I’ll know.
          </p>
        </div>
      </div>

      <div className="comment-side">
        <h3>Top Comments</h3>
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <img src={c.avatar} alt="avatar" />
            <div>
              <strong>{c.name}</strong>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
