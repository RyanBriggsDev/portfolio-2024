"use client";

import React from "react";
import { useState } from "react";

import ContentSection from "./components/layout/ContentSection";
import SkillsTabs from "./components/SkillsTabs";
import SkillsCards from "./components/SkillsCards";

// import SkillsContainer from "./components/SkillsContainer";
import TypeScriptLogo from "./assets/images/icons/typescript_mod.svg";
import ReactLogo from "./assets/images/icons/react_mod.svg";
import JavaScriptLogo from "./assets/images/icons/js_mod.svg";
import ShopifyLogo from "./assets/images/icons/shopify_mod.svg";
import AngularLogo from "./assets/images/icons/angular_mod.svg";
import VueLogo from "./assets/images/icons/vue_mod.svg";

type SkillItem = {
  title: string;
  image: any;
};

type SkillCategory = {
  type: string;
  items: SkillItem[];
};

const skills: SkillCategory[] = [
  {
    type: "Frontend",
    items: [
      {
        title: "React",
        image: ReactLogo,
      },
      {
        title: "Angular",
        image: AngularLogo,
      },
      {
        title: "Vue",
        image: VueLogo,
      },
      {
        title: "Shopify Liquid",
        image: ShopifyLogo,
      },
      {
        title: "TypeScript",
        image: TypeScriptLogo,
      },
      {
        title: "JavaScript",
        image: JavaScriptLogo,
      },
    ],
  },
  {
    type: "Backend",
    items: [
      {
        title: "Node.js",
        image: "nodejs",
      },
      {
        title: "Python",
        image: "python",
      },
      {
        title: "MongoDB",
        image: "MongoDB",
      },
      {
        title: "Express",
        image: "express",
      },
      {
        title: "Firebase",
        image: "firebase",
      },
      {
        title: "Drizzle",
        image: "drizzle",
      },
      {
        title: "Turso",
        image: "turso",
      },
      {
        title: "SQL",
        image: "SQL",
      },
    ],
  },
  {
    type: "Tools",
    items: [
      {
        title: "Git",
        image: "git",
      },
      {
        title: "GitHub",
        image: "github",
      },
      {
        title: "VS Code",
        image: "vscode",
      },
      {
        title: "Slack",
        image: "slack",
      },
      {
        title: "Trello",
        image: "trello",
      },
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>(
    skills[0].type.toLowerCase()
  );
  return (
    <main>
      <ContentSection id="hero">
        <div>
          <h1 className="text-5xl md:text-6xl">Software Developer 👨‍💻</h1>
          <h4 className="text-3xl md:text-4xl">Hey, I'm Ryan.</h4>
        </div>
      </ContentSection>

      <ContentSection
        id="about"
        containerClassName="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="about-me">
          <h2 className="mb-2">About Me</h2>
          <h4 className="mb-8">Learn a bit about me.</h4>
          <p>
            I am a self-taught front-end web developer with 1 year of experience
            in creating dynamic and responsive web applications using React and
            Next.js frameworks.
          </p>
        </div>
        <div className="skills flex flex-col gap-8">
          <div className="flex flex-wrap gap-3 items-center justify-center [&>*]:min-w-[100px]">
            {skills.map((category, index) => (
              <SkillsTabs
                key={index}
                setActiveTab={setActiveTab}
                category={category}
                className={
                  activeTab === category.type.toLowerCase().replace(" ", "-")
                    ? "active text-[#005995] underline rounded-lg"
                    : ""
                }
              />
            ))}
          </div>
          <div className="skills-card-container-parent">
            {skills.map((category, index) => (
              <SkillsCards category={category} activeTab={activeTab} />
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection id="projects">
        <h2>Projects</h2>
      </ContentSection>

      <ContentSection id="now">
        <h2>Now</h2>
      </ContentSection>

      <ContentSection id="contact">
        <h2>Contact</h2>
      </ContentSection>
    </main>
  );
}
