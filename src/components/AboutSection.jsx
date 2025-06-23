import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background/70 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT BLOCK */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground">
              Passionate Web Application Developer
            </h3>

            <p className="text-muted-foreground">
              I specialize in crafting seamless digital experiences, combining frontend finesse with backend stability.
              From React and Node.js to Python and cloud deployments — I build performant, scalable full-stack applications
              that delight users and deliver results.
            </p>

            <div className="text-muted-foreground space-y-2 text-sm">
              <p>🔹 <strong>Frontend:</strong> React, Next.js, Vue, Tailwind CSS</p>
              <p>🔹 <strong>Backend:</strong> Node.js, Express, Django, Flask, REST/GraphQL</p>
              <p>🔹 <strong>Databases:</strong> PostgreSQL, MongoDB, Firebase</p>
              <p>🔹 <strong>Cloud & DevOps:</strong> AWS, Docker, CI/CD, Serverless</p>
            </div>

            <p className="text-muted-foreground">
              Whether it's optimizing APIs, refining UI interactions, or deploying apps at scale — I love turning ideas into
              performant, elegant digital products.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="cosmic-button text-foreground px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="../public/Akhil_V.pdf"
                download="Akhil_V.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT GLASS INFO CARDS */}
          <div className="grid gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "React, Next.js, Tailwind CSS, and more.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Creating delightful, user-first experiences.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Agile workflows and client-driven delivery.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/10 shadow-md transition-transform hover:scale-[1.03]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-foreground">{card.title}</h4>
                    <p className="text-muted-foreground text-sm">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
