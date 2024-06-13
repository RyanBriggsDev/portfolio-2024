"use client";

import React, { useState } from "react";
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
        { name: "React", image: "sds" },
        { name: "Next.js", image: "link-to-nextjs-image" },
        { name: "TailwindCSS", image: "link-to-tailwindcss-image" },
        { name: "Angular", image: "link-to-angular-image" },
        { name: "Vue", image: "link-to-vue-image" },
        { name: "Shopify", image: "link-to-shopify-image" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", image: "link-to-nodejs-image" },
        { name: "Python", image: "link-to-python-image" },
        { name: "Express", image: "link-to-express-image" },
        { name: "MongoDB", image: "link-to-mongodb-image" },
        { name: "Firebase", image: "link-to-firebase-image" },
        { name: "Turso", image: "link-to-turso-image" },
        { name: "Drizzle", image: "link-to-drizzle-image" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", image: "link-to-git-image" },
        { name: "GitHub", image: "link-to-github-image" },
        { name: "VS Code", image: "link-to-vscode-image" },
        { name: "Slack", image: "link-to-slack-image" },
        { name: "Trello", image: "link-to-trello-image" },
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
