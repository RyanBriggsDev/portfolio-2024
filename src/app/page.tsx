"use client";

import React from "react";
import { useState } from "react";

import ContentSection from "./components/layout/ContentSection";
import SkillsTabs from "./components/SkillsTabs";
import SkillsCards from "./components/SkillsCards";

// Frontend Icons
import TypeScriptLogo from "./assets/images/icons/typescript_mod.svg";
import ReactLogo from "./assets/images/icons/react_mod.svg";
import JavaScriptLogo from "./assets/images/icons/js_mod.svg";
import ShopifyLogo from "./assets/images/icons/shopify_mod.svg";
import AngularLogo from "./assets/images/icons/angular_mod.svg";
import VueLogo from "./assets/images/icons/vue_mod.svg";
import JestLogo from "./assets/images/icons/jest_mod.svg";
import TailwindLogo from "./assets/images/icons/tailwind_mod.svg";
import SassLogo from "./assets/images/icons/sass_mod.svg";
// Backend Icons
import NodeJsLogo from "./assets/images/icons/nodejs_mod.svg";
import PythonLogo from "./assets/images/icons/python_mod.svg";
import MongoDBLogo from "./assets/images/icons/mongo_mod.svg";
import ExpressLogo from "./assets/images/icons/expressjs_mod.svg";
import FirebaseLogo from "./assets/images/icons/firebase_mod.svg";
// Tools Icons
import GitLogo from "./assets/images/icons/git_mod.svg";
import GitHubLogo from "./assets/images/icons/github_mod.svg";
import VSCodeLogo from "./assets/images/icons/vscode_mod.svg";
import SlackLogo from "./assets/images/icons/slack_mod.svg";
import TrelloLogo from "./assets/images/icons/trello_mod.svg";

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
      {
        title: "Jest",
        image: JestLogo,
      },
      {
        title: "Tailwind",
        image: TailwindLogo,
      },
      {
        title: "Sass",
        image: SassLogo,
      },
    ],
  },
  {
    type: "Backend",
    items: [
      {
        title: "Node.js",
        image: NodeJsLogo,
      },
      {
        title: "Python",
        image: PythonLogo,
      },
      {
        title: "MongoDB",
        image: MongoDBLogo,
      },
      {
        title: "Express",
        image: ExpressLogo,
      },
      {
        title: "Firebase",
        image: FirebaseLogo,
      },
    ],
  },
  {
    type: "Tools",
    items: [
      {
        title: "Git",
        image: GitLogo,
      },
      {
        title: "GitHub",
        image: GitHubLogo,
      },
      {
        title: "VS Code",
        image: VSCodeLogo,
      },
      {
        title: "Slack",
        image: SlackLogo,
      },
      {
        title: "Trello",
        image: TrelloLogo,
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
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start [&>*]:min-w-[100px]">
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
