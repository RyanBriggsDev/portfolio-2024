import React, { useRef, useState, useCallback, useEffect } from "react";
import ContentSection from "./layout/ContentSection";

import Koritsu_tech from "../assets/images/koritsu_tech.png";
import RyanBriggsDev from "../assets/images/ryanbriggsdev.png";
import CC_Check from "../assets/images/cccheck.png";
import pokedex from "../assets/images/pokedex.png";
import ryan_ai from "../assets/images/ryan_ai.png";

type ImportedImage = {
  src: string;
};
type ImageSource = string | ImportedImage;

interface TechStack {
  name: string;
  link: string;
}

interface Project {
  title: string;
  description: string;
  url: string;
  stack?: TechStack[];
  repo?: string;
  image?: ImageSource;
}

const projects: Project[] = [
  {
    title: "Koritsu.tech",
    description:
      "Full stack web application providing a centralised information repository for teams and organisations.",
    url: "https://github.com/ryanbriggsdev/koritsu-tech",
    stack: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "Tailwind.css", link: "https://tailwindcss.com/" },
      { name: "Vite", link: "https://vitejs.dev/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "JWT", link: "https://jwt.io/" },
      { name: "SQLite", link: "https://www.sqlite.org/" },
    ],
    repo: "https://github.com/ryanbriggsdev/koritsu-tech",
    image: Koritsu_tech,
  },
  {
    title: "Credit Card Checker",
    description:
      "Simple credit card number validator using the Luhn algorithm going back to basics using HTML, CSS and Vanilla JavaScript.",
    url: "https://cc-check.ryanbriggs.dev/",
    stack: [
      { name: "HTML", link: "https://reactjs.org/" },
      { name: "CSS", link: "https://reactjs.org/" },
      { name: "JavaScript", link: "https://reactjs.org/" },
    ],
    repo: "https://github.com/RyanBriggsDev/credit-card-checker",
    image: CC_Check,
  },
  {
    title: "Portfolio",
    description: "Portfolio website showcasing my projects and skills.",
    url: "https://ryanbriggs.dev",
    stack: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Tailwind.css", link: "https://tailwindcss.com/" },
    ],
    repo: "https://github.com/ryanbriggsdev/portfolio-2024",
    image: RyanBriggsDev,
  },
  {
    title: "Pokedex",
    description:
      "Simple Pokédex Next.js, TypeScript, and Tailwind CSS to create a Pokédex using data from the PokéAPI.",
    url: "https://pokedex.ryanbriggs.dev/",
    repo: "https://github.com/RyanBriggsDev/pokedex-2023",
    image: pokedex,
    stack: [
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwind.css", link: "https://tailwindcss.com/" },
      { name: "PokéAPI", link: "https://pokeapi.co/" },
    ],
  },
  {
    title: "Ryan AI",
    description:
      "Custom UI built to use the Anthropic AI API. Allows for users to sign up, enter their API key and easy access to the AI model.",
    url: "https://ai.ryanbriggs.dev/",
    repo: "https://github.com/RyanBriggsDev/claude-ai",
    stack: [
      { name: "Anthropic API", link: "https://www.anthropic.com/" },
      { name: "React", link: "https://reactjs.org/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "Tailwind.css", link: "https://tailwindcss.com/" },
    ],
    image: ryan_ai,
  },
];

const Projects: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const checkScroll = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <ContentSection id="projects">
      <h2 className="mb-2 text-white">Projects</h2>
      <h4 className="mb-8 text-white">Some of my personal projects.</h4>
      <div className="relative">
        <div
          className="overflow-x-scroll no-scrollbar flex space-x-4 md:space-x-6 cursor-grab active:cursor-grabbing"
          ref={sliderRef}
          onScroll={checkScroll}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={drag}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
            aria-label="Scroll left"
          >
            &#8592;
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        )}
      </div>
    </ContentSection>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isImportedImage = (image: ImageSource): image is ImportedImage => {
    return typeof image !== "string" && "src" in image;
  };

  return (
    <div className="project-card w-80 flex-shrink-0 bg-gray-800 p-4 rounded-lg flex flex-col">
      {project.image && (
        <img
          src={
            isImportedImage(project.image) ? project.image.src : project.image
          }
          alt={`${project.title} preview`}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-wrap h-32 truncate">
        {project.description}
      </p>
      {project.stack && (
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="flex space-x-4 mt-auto justify-between">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View Project
        </a>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
