import React, { useEffect, useRef } from 'react';
import './Contact.css';

// The 'glow' property is now removed, as it will be handled by CSS for consistency.
const contacts = [
  {
    href: 'mailto:viruwork1@gmail.com',
    image: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    title: 'Email',
    character: 'https://img.icons8.com/emoji/96/e-mail.png',
  },
  {
    href: 'https://www.linkedin.com/in/virender-parasariya-8320631b6/',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    title: 'LinkedIn',
    character: 'https://img.icons8.com/3d-fluency/94/linkedin--v1.png',
  },
  {
    href: 'https://github.com/virend3rp',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    title: 'GitHub',
    character: 'https://img.icons8.com/3d-fluency/94/github.png',
  },
  {
    href: 'https://www.youtube.com/@virenderparasariya',
    image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    title: 'YouTube',
    character: 'https://img.icons8.com/3d-fluency/94/youtube-play.png',
  },
];

const Contact = () => {
  const containerRef = useRef(null);

  // This effect adds an animation class when the cards scroll into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <div className="contact-section-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-note">
        You can reach out to me here, or not — it's free will.
      </p>

      <div className="contact-grid" ref={containerRef}>
        {contacts.map((contact, index) => (
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="card-link"
          >
            <div className="card">
              <div className="wrapper">
                <img
                  src={contact.image}
                  alt={`${contact.title} Cover`}
                  className="cover-image"
                />
              </div>
              <div className="card-title">{contact.title}</div>
              <img
                src={contact.character}
                alt={`${contact.title} Icon`}
                className="character"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;