import React from "react";

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute w-32 h-32 bg-black opacity-5 rounded-full top-20 left-10 animate-pulse-slow"></div>
      <div className="absolute w-20 h-20 border-2 border-black opacity-10 top-1/2 left-1/4 animate-float"></div>
      <div className="absolute w-[2px] h-48 bg-black opacity-10 rotate-45 bottom-10 right-10 animate-line-slow"></div>
    </div>
  );
};

export default GeometricBackground;
