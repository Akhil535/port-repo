import { useEffect, useState } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utility";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 max-sm:hidden bg-background/70 backdrop-blur-md border border-border px-3 py-2 rounded-full shadow-md">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-1 rounded-full transition-colors duration-300 focus:outline-none flex items-center justify-center hover:bg-border/20"
        aria-label="Toggle theme"
      >
        <ChevronDown className="h-4 w-4 text-primary animate-bounce mb-1" />
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-400" />
        )}
      </button>

      {/* Text Label (Also toggles theme) */}
      <span
        onClick={toggleTheme}
        className="text-sm text-primary font-medium cursor-pointer select-none"
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};
