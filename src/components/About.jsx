import React, { useState } from "react";
import "./About.css";

const images = ["/pic-1.JPG", "/pic-3.jpg"];

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

const About = () => {
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

  return (
    <main className="about-container">
      <section className="photo-slideshow">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Virender Parasariya slide ${i + 1}`}
            className="slide"
            style={{ animationDelay: `${i * 6}s` }}
          />
        ))}
      </section>

      <section className="intro-section">
        <h1>Virender Parasariya</h1>
        <p className="role">Software Engineer & Sarcasm Enthusiast</p>

        <div className="buttons-row">
          <button
            onClick={handleLike}
            disabled={hasLiked}
            aria-pressed={hasLiked}
            aria-label="Like"
          >
            👍 {likes}
          </button>
          <button onClick={handleDislike} aria-label="Dislike">
            👎
          </button>
          <a href="/Virender_Development_Resume.pdf" download className="resume-link">
            📄 Resume
          </a>
        </div>

        <article className="about-text">
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
        </article>
      </section>

      <section className="comments-section" aria-label="Top comments">
        <h2>Top Comments</h2>
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <img src={c.avatar} alt={`${c.name} avatar`} />
            <div>
              <strong>{c.name}</strong>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default About;
