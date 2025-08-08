import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import ContentSection from "./layout/ContentSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import RyanBriggsDev from "../assets/images/ryanbriggsdev.png";
import CC_Check from "../assets/images/cccheck.png";
import pokedex from "../assets/images/pokedex.png";
import localPropertyLettings from "../assets/images/local-property-lettings.png";
import webiliti from "../assets/images/webiliti.png";
import familyBudget from "../assets/images/family-budget.png";

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
  categories: string[];
}

const projects: Project[] = [
  {
    title: "Family Budget Tracker",
    description:
      "A comprehensive family budgeting application that helps track income, expenses, and savings goals. Features include expense categorization, budget planning, financial insights, and progress tracking to help families achieve their financial goals.",
    url: "https://budget.ryanbriggs.dev",
    stack: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "Supabase", link: "https://supabase.com/" },
    ],
    // repo: "https://github.com/yourusername/personal-finance-app", // Uncomment and update if public
    image: familyBudget,
    categories: ["Personal", "Web Application"],
  },
  {
    title: "Webiliti",
    description:
      "A comprehensive web management and testing platform that brings together essential web testing tools in one powerful platform. Features include instant visual testing across devices, performance monitoring, quality assurance automation, and historical tracking and reporting.",
    url: "https://www.webiliti.com/",
    stack: [
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "React", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "Hono.js", link: "https://hono.dev/" },
      { name: "Cloudflare", link: "https://www.cloudflare.com/" },
      { name: "SQLite", link: "https://www.sqlite.org/" },
    ],
    // repo: "https://github.com/yourusername/webiliti", // Uncomment and update if public
    image: webiliti,
    categories: ["Web Application"],
  },
  {
    title: "Local Property Lettings",
    description:
      "Modern property lettings website built with React and Sanity CMS. Features responsive design with shadcn/ui components, client-side routing, and a clean, professional interface for property management services.",
    url: "https://www.localpropertylettings.com/",
    stack: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "React Router", link: "https://reactrouter.com/" },
      { name: "Sanity CMS", link: "https://www.sanity.io/" },
      { name: "shadcn/ui", link: "https://ui.shadcn.com/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    ],
    // repo: "https://github.com/yourusername/local-property-lettings", // Uncomment and update if public
    image: localPropertyLettings,
    categories: ["Web Application"],
  },
  {
    title: "Credit Card Checker",
    description:
      "Simple credit card number validator using the Luhn algorithm going back to basics using HTML, CSS and Vanilla JavaScript.",
    url: "https://cc-check.ryanbriggs.dev/",
    stack: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
    ],
    repo: "https://github.com/RyanBriggsDev/credit-card-checker",
    image: CC_Check,
    categories: ["Utility Tool"],
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
    categories: ["Personal"],
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
    categories: ["Web Application"],
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.categories)))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <ContentSection id="projects">
      <div className="text-center mb-12">
        <h2 className="mb-2 text-white">Projects</h2>
        <h4 className="mb-8 text-white">Some of my personal projects.</h4>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-swiper"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
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
    <div className={`project-card bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl min-h-[690px]`}>
      
      {project.image && (
        <div className="relative overflow-hidden rounded-xl mb-6 group">
          <img
            src={
              isImportedImage(project.image) ? project.image.src : project.image
            }
            alt={`${project.title} preview`}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      {project.categories && project.categories.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      )}
      
      <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>
      
      {project.stack && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700/50 transition-all duration-300 ease-in-out hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover:scale-105"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex gap-3 mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 text-center font-medium"
        >
          View Live
        </a>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex-1 text-center font-medium"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
