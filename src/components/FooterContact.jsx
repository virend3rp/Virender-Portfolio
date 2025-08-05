import React from 'react';
import './FooterContact.css';

const contacts = [
  {
    href: 'mailto:viruwork1@gmail.com',
    image: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/virender-parasariya-8320631b6/',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/virend3rp',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    title: 'GitHub',
  },
  {
    href: 'https://www.youtube.com/@virenderparasariya',
    image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
    title: 'YouTube',
  },
];

const FooterContact = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-icons">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            title={contact.title}
          >
            <img src={contact.image} alt={contact.title} />
          </a>
        ))}
      </div>
      <span className="footer-credit">
        © {new Date().getFullYear()} Constantly Evolving..
      </span>
    </footer>
  );
};

export default FooterContact;
