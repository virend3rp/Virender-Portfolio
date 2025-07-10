import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-[#fef3c7] text-[#1f2937] text-center">
      <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
      <p className="mb-4">Want to collaborate or just chat about code, anime, or cricket?</p>
      <a
        href="mailto:parasariyav@gmail.com"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow transition"
      >
        Say Hello 👋
      </a>
    </section>
  );
}
