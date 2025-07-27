import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded uppercase text-xs tracking-wide border"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
