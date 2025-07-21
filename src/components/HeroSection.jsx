import React, { useState } from "react";

export default function DeadpoolHero() {
  const [clickedCount, setClickedCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleClick = () => {
    setClickedCount(c => c + 1);
    if (clickedCount === 1) setShowEasterEgg(true);
  };

  return (
    <section
      className="min-h-screen bg-black text-red-500 flex flex-col items-center justify-center px-8 py-24 font-mono select-none"
      style={{ fontWeight: "900", textShadow: "2px 2px 0 #000" }}
    >
      <h1 className="text-6xl mb-6 text-center leading-tight tracking-wide">
        Hey, you! Yeah, you. 👀
      </h1>

      <p className="max-w-xl text-center text-xl mb-8">
        Welcome to Virender’s portfolio — where coding meets chaos, anime meets cricket,
        and your expectations get shattered like <em>my fourth wall</em>.  
        <br />
        Ready to dive in? Or just gonna stare like a deer in headlights?
      </p>

      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-black font-bold px-8 py-4 rounded-lg shadow-lg tracking-widest uppercase transition"
      >
        Click me — but don’t blame me if stuff happens
      </button>

      {clickedCount > 0 && (
        <p className="mt-6 text-center text-lg text-white">
          You clicked that button <strong>{clickedCount}</strong> time{clickedCount > 1 ? "s" : ""}. 
          Keep going, or don’t. I’m not your boss.
        </p>
      )}

      {showEasterEgg && (
        <div className="mt-12 p-6 max-w-lg bg-red-900 border-4 border-black rounded-lg shadow-xl text-white font-bold text-center animate-pulse">
          🎉 Wow, you found the secret! Here’s a virtual chimichanga. 🌯  
          <br />
          (Now, im going to give you a free tip.Hover over the buttons to see what they hold)
        </div>
      )}
    </section>
  );
}
