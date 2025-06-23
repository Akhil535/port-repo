import { useEffect, useState } from "react";
import { cn } from "@/lib/utility";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Custom hook to track active section based on scroll
const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0];
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) {
            current = sectionId;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get active section for nav highlight
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  // Scroll listener for shadow/glow effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-lg dark:bg-gray-900/30 dark:border-gray-700 dark:shadow-lg"
          : "py-5 bg-transparent"
      )}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-primary flex items-center select-none transition-transform duration-300 hover:scale-105 hover:brightness-110"
          aria-label="Go to home section"
        >
          <span className="text-glow text-foreground">Akhil</span> Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={cn(
                "relative group text-foreground/90 font-medium tracking-wide transition-colors duration-300",
                activeSection === item.href.replace("#", "")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              aria-current={
                activeSection === item.href.replace("#", "") ? "page" : undefined
              }
            >
              {item.name}
              {/* Underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-all duration-300 scale-x-0 opacity-0 group-hover:opacity-100 group-hover:scale-x-100",
                  activeSection === item.href.replace("#", "")
                    ? "opacity-100 scale-x-100"
                    : ""
                )}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 text-foreground z-50 focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          role="menu"
          className={cn(
            "fixed inset-0 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, idx) => (
            <a
              role="menuitem"
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/90 dark:text-gray-300 text-2xl font-semibold hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
