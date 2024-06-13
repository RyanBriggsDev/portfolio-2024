import React from "react";
import ContentSection from "./components/layout/ContentSection";
// import SkillsContainer from "./components/SkillsContainer";
import TypeScriptLogo from "./assets/images/icons/typescript_mod.svg";
import ReactLogo from "./assets/images/icons/react_mod.svg";
import JavaScriptLogo from "./assets/images/icons/js_mod.svg";
import ShopifyLogo from "./assets/images/icons/shopify_mod.svg";
import AngularLogo from "./assets/images/icons/angular_mod.svg";
import VueLogo from "./assets/images/icons/vue_mod.svg";

export default function Home() {
  const skills = [
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
      title: "TypeScript",
      image: TypeScriptLogo,
    },
    {
      title: "JavaScript",
      image: JavaScriptLogo,
    },
    {
      title: "Shopify Liquid",
      image: ShopifyLogo,
    },
  ];

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
        containerClassName="grid grid-cols-1 md:grid-cols-2 gap-8"
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
        {/* grid grid-cols-3 lg:grid-cols-4 gap-3 */}
        <div className="skills flex flex-wrap gap-3 items-center justify-center [&>*]:min-w-[100px]">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item flex flex-col items-center">
              <img
                src={skill.image.src}
                alt={`${skill.title} logo`}
                className="skill-icon mb-2"
              />
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </ContentSection>
      {/* <ContentSection id="skills" containerClassName="">
        <div className="flex flex-col mb-8">
          <h2>My Skills</h2>
        </div>
        <SkillsContainer />
      </ContentSection> */}
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
