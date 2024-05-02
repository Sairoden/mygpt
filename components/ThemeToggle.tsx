"use client";

// REACT
import { useState } from "react";

// STYLES
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dim: "dim",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themes.dim);

  const toggleTheme = () => {
    const newTheme = theme === themes.dim ? themes.winter : themes.dim;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "dim" ? (
        <BsSunFill className="h-4 w-4" />
      ) : (
        <BsMoonFill className="h-4 w-4" />
      )}
    </button>
  );
}
