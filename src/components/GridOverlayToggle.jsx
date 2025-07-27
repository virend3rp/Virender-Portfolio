import React, { useState } from "react";

const GridOverlayToggle = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white text-xs px-3 py-1 uppercase tracking-wide rounded hover:bg-gray-800"
      >
        {visible ? "Hide Grid" : "Show Grid"}
      </button>

      {visible && (
        <div className="fixed inset-0 z-40 pointer-events-none grid grid-cols-12 gap-4 border-l border-r border-gray-300 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-gray-500 h-full"></div>
          ))}
        </div>
      )}
    </>
  );
};

export default GridOverlayToggle;