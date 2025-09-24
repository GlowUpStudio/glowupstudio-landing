import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`absolute top-4 right-4 rounded-full p-2 shadow-md transition ${
        isDark ? "bg-[#f5f5f5]" : "bg-[#1a1a1a]"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gray-900" />
      ) : (
        <Moon className="w-5 h-5 text-gray-100" />
      )}
    </button>
  );
}