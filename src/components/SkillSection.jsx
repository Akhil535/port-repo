import { useState } from "react";
import { cn } from "@/lib/utility";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", details: "Expert in building responsive layouts with semantic HTML and modern CSS techniques." },
  { name: "JavaScript", level: 90, category: "frontend", details: "Proficient in ES6+, DOM manipulation, and asynchronous programming." },
    { name: "React", level: 95, category: "frontend", details: "Skilled in building reusable React components with hooks and state management." },
  { name: "Angular", level: 80, category: "frontend", details: "Experienced in Angular framework for building dynamic single-page applications." },
  { name: "TypeScript", level: 70, category: "frontend", details: "Familiar with TypeScript for type safety and better code maintainability." },

  { name: "Tailwind CSS", level: 90, category: "frontend", details: "Efficient in utility-first CSS framework for rapid UI development." },
  { name: "Bootstrap", level: 75, category: "frontend", details: "Knowledgeable in Bootstrap for quick prototyping and design." },

  // Backend
  { name: "Node", level: 80, category: "backend", details: "Building scalable backend services with Node.js and Express." },
  { name: "MySQL", level: 80, category: "backend", details: "Experienced with relational database design and querying using MySQL." },
  { name: "MongoDB", level: 85, category: "backend", details: "Working knowledge of NoSQL database MongoDB for flexible schema design." },

  // Tools
  { name: "Git/GitHub", level: 95, category: "tools", details: "Version control and collaboration using Git and GitHub." },
  { name: "VS Code", level: 95, category: "tools", details: "Familiar with Visual Studio Code for efficient development workflows." },
  { name: "Docker", level: 60, category: "tools", details: "Basic containerization concepts and Docker usage." },
  { name: "Figma", level: 85, category: "tools", details: "UI/UX design and prototyping using Figma." },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-background/60 backdrop-blur-md"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-background border-primary shadow-md"
                  : "bg-transparent text-foreground border-border hover:bg-border/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => {
            const isActive = hoveredSkill === skill;
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={cn(
                  "relative rounded-xl border p-6 flex flex-col items-center justify-center text-center cursor-pointer",
                  // Light mode glass effect
                  "bg-white/30 backdrop-blur-md border-white/30 shadow-lg",
                  // Dark mode fallback
                  "dark:bg-gray-900 dark:border-gray-700 dark:shadow-md",
                  "transform transition duration-500",
                  "hover:shadow-xl",
                  isActive
                    ? "scale-105 bg-primary/90 dark:bg-primary/80 border-primary text-white"
                    : "text-foreground dark:text-gray-300"
                )}
                style={{ minHeight: "300px" }}
              >
                <h3 className="font-bold text-2xl mb-4 select-none">{skill.name}</h3>

                <div className="w-full h-5 rounded-full bg-secondary/40 overflow-hidden">
                  <div
                    className={cn(
                      "h-5 rounded-full transition-all duration-500 ease-out",
                      isActive ? "bg-blue-500" : "bg-primary"
                    )}
                    style={{ width: skill.level + "%" }}
                  ></div>
                </div>

                <div className="mt-3 text-xl font-semibold select-none">{skill.level}%</div>

                <p
                  className={cn(
                    "mt-6 px-4 max-w-[260px] text-sm leading-relaxed text-center transition-opacity duration-300",
                    isActive ? "opacity-90" : "opacity-50"
                  )}
                >
                  {isActive ? skill.details : "Hover to see skill details "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
