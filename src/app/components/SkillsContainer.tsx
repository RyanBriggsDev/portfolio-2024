"use client";

import React, { act, useRef, useState } from "react";
import SkillsTabs from "./SkillsTabs";
import SkillsCardSwiper from "./SkillsCardSwiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SkillsContainer() {
  let skillsContent = [
    {
      title: "Frontend",
      skills: [
        { name: "React", image: "link-to-react-image" },
        { name: "Next.js", image: "link-to-nextjs-image" },
        { name: "TailwindCSS", image: "link-to-tailwindcss-image" },
        { name: "HTML", image: "link-to-html-image" },
        { name: "CSS", image: "link-to-css-image" },
        { name: "JavaScript", image: "link-to-javascript-image" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", image: "link-to-nodejs-image" },
        { name: "Express", image: "link-to-express-image" },
        { name: "MongoDB", image: "link-to-mongodb-image" },
        { name: "Firebase", image: "link-to-firebase-image" },
        { name: "Turso", image: "link-to-turso-image" },
        { name: "Drizzle", image: "link-to-drizzle-image" },
        { name: "Python", image: "link-to-python-image" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", image: "link-to-git-image" },
        { name: "GitHub", image: "link-to-github-image" },
        { name: "VS Code", image: "link-to-vscode-image" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(
    skillsContent[0]?.title.toLowerCase()
  );

  return (
    <>
      <SkillsTabs data={skillsContent} setActiveTab={setActiveTab} />
      {skillsContent.map((skillType) => (
        <SkillsCardSwiper
          data={skillType}
          data-title={skillType.title}
          activeTab={activeTab}
        />
      ))}
    </>
  );
}
