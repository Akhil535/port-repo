import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "UniAthena Main Portal",
    description: "uniAthena Main portal using React, Node, mongoDB, Tailwind CSS",
    image: "/projects/uniathena.jpeg",
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl: "https://uniathena.com/",
    githubUrl: "https://github.com/Akhil535",
  },
  {
    id: 2,
    title: "Uniathena Alumni Portal",
    description: "Alumni project system using React, Node, mongoDB, Tailwind CSS",
    image: "/projects/uniathena_Alumni.jpg",
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl: "https://uniathena.com/alumni?utm_source=Direct&utm_medium=Website&utm_campaign=Website&utm_page=login&utm_pos=",
    githubUrl: "https://github.com/Akhil535",
  },
  {
    id: 3,
    title: "Uniathena Blog Page",
    description: "A blog page create system using React, Node, mongoDB, Tailwind CSS",
    image: "/projects/uniathena_blog.jpeg",
    tags: ["React", "Node", "mongoDB", "Tailwind CSS"],
    demoUrl: "https://uniathena.com/insights/blogs?utm_source=Direct&utm_medium=Website&utm_campaign=Website&utm_page=login&utm_pos=",
    githubUrl: "https://github.com/Akhil535",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-14 leading-relaxed text-lg">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-border">
                  {/* Demo Link */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    <span>View Demo</span>
                    <ExternalLink size={20} />
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Akhil535" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-background font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
