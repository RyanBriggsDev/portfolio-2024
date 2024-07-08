import React, { useRef, useState, useCallback } from "react";
import ContentSection from "./layout/ContentSection";

const projects = [
  {
    title: "Project 1",
    description: "Description 1",
    url: "https://github.com",
  },
  {
    title: "Project 2",
    description: "Description 2",
    url: "https://github.com",
  },
  {
    title: "Project 3",
    description: "Description 3",
    url: "https://github.com",
  },
  {
    title: "Project 4",
    description: "Description 4",
    url: "https://github.com",
  },
  {
    title: "Project 5",
    description: "Description 5",
    url: "https://github.com",
  },
];

function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = useCallback((e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  }, []);

  const endDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const drag = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  return (
    <ContentSection id="projects">
      <h2 className="text-white">Projects</h2>
      <div
        className="min-w-full overflow-x-scroll no-scrollbar flex gap-4 cursor-grab active:cursor-grabbing mt-8"
        ref={sliderRef}
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={drag}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project grow shrink-0 max-w-[80%] w-full md:w-[400px] md:max-w-[400px] bg-red-500 min-h-64 p-4 rounded"
          >
            {project.title}
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Projects;
