import ContentSection from "./layout/ContentSection";
import SkillsTabs from "./SkillsTabs";
import SkillsCards from "./SkillsCards";
import { useState } from "react";

// Frontend Icons'
import TypeScriptLogo from "../assets/images/icons/typescript_mod.svg";
import ReactLogo from "../assets/images/icons/react_mod.svg";
import JavaScriptLogo from "../assets/images/icons/js_mod.svg";
import ShopifyLogo from "../assets/images/icons/shopify_mod.svg";
import TailwindLogo from "../assets/images/icons/tailwind_mod.svg";
import SassLogo from "../assets/images/icons/sass_mod.svg";
// Backend Icons
import NodeJsLogo from "../assets/images/icons/nodejs_mod.svg";
import MongoDBLogo from "../assets/images/icons/mongo_mod.svg";
import ExpressLogo from "../assets/images/icons/expressjs_mod.svg";
import FirebaseLogo from "../assets/images/icons/firebase_mod.svg";
// Tools Icons
import GitLogo from "../assets/images/icons/git_mod.svg";
import GitHubLogo from "../assets/images/icons/github_mod.svg";
import VSCodeLogo from "../assets/images/icons/vscode_mod.svg";
import SlackLogo from "../assets/images/icons/slack_mod.svg";
import TrelloLogo from "../assets/images/icons/trello_mod.svg";

type SkillItem = {
  title: string;
  image: any;
  url: string;
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
        url: "https://reactjs.org/",
      },
      {
        title: "Liquid",
        image: ShopifyLogo,
        url: "https://shopify.dev/docs",
      },
      {
        title: "TypeScript",
        image: TypeScriptLogo,
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "JavaScript",
        image: JavaScriptLogo,
        url: "https://www.javascript.com/",
      },
      {
        title: "Tailwind",
        image: TailwindLogo,
        url: "https://tailwindcss.com/",
      },
      {
        title: "Sass",
        image: SassLogo,
        url: "https://sass-lang.com/",
      },
    ],
  },
  {
    type: "Backend",
    items: [
      {
        title: "Node.js",
        image: NodeJsLogo,
        url: "https://nodejs.org/",
      },
      {
        title: "MongoDB",
        image: MongoDBLogo,
        url: "https://www.mongodb.com/",
      },
      {
        title: "Express",
        image: ExpressLogo,
        url: "https://expressjs.com/",
      },
      {
        title: "Firebase",
        image: FirebaseLogo,
        url: "https://firebase.google.com/",
      },
    ],
  },
  {
    type: "Tools",
    items: [
      {
        title: "Git",
        image: GitLogo,
        url: "https://git-scm.com/",
      },
      {
        title: "GitHub",
        image: GitHubLogo,
        url: "https://github.com",
      },
      {
        title: "VS Code",
        image: VSCodeLogo,
        url: "https://code.visualstudio.com/",
      },
      {
        title: "Slack",
        image: SlackLogo,
        url: "https://slack.com/",
      },
      {
        title: "Trello",
        image: TrelloLogo,
        url: "https://trello.com/",
      },
    ],
  },
];

function About() {
  const [activeTab, setActiveTab] = useState<string>(
    skills[0].type.toLowerCase()
  );
  return (
    <ContentSection
      id="about"
      containerClassName="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className="about-me">
        <h2 className="mb-2 text-white">About Me</h2>
        <h4 className="mb-8 text-white">Learn a bit about me.</h4>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate frontend developer specializing in React, Next.js, and Shopify development. 
          With expertise in creating high-performance e-commerce solutions and modern web applications, 
          I focus on delivering exceptional user experiences through clean code and optimized performance.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Currently working as an Expert Shopify Developer, I've helped numerous businesses 
          optimize their online presence and increase conversions through custom theme development 
          and performance optimization.
        </p>
        
        {/* Skills Progress */}
        <div className="mt-8">
          <h5 className="text-white font-semibold mb-4">Key Skills</h5>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>React/Next.js</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Shopify/Liquid</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Tailwind CSS</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills flex flex-col gap-8 ">
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
        <div className="skills-card-container-parent min-h-80">
          {skills.map((category, index) => (
            <SkillsCards
              category={category}
              activeTab={activeTab}
              key={index}
            />
          ))}
        </div>
      </div>
    </ContentSection>
  );
}

export default About;
