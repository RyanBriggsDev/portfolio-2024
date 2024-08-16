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
        <p>
          I am a self-taught front-end web developer with 1 year of experience
          in creating dynamic and responsive web applications using React and
          Next.js frameworks.
        </p>
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
