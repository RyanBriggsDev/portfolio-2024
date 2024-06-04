import ContentSection from "./components/layout/ContentSection";
import SkillsCard from "./components/SkillsCard";
import SkillsContainer from "./components/SkillsContainer";
import ReactLogo from "./assets/images/react_logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContentSection id="hero">
        <div>
          <h1 className="text-5xl md:text-6xl">Software Developer 👨‍💻</h1>
          <h4 className="text-3xl md:text-4xl">Hey, I'm Ryan.</h4>
        </div>
      </ContentSection>
      <ContentSection id="about">
        <div className="flex flex-col mb-8">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <h4 className="text-2xl md:text-3xl">Learn a bit about me.</h4>
        </div>
        <div className="flex flex-col gap-4 max-w-[750px]">
          <p>
            I am a self taught front end web developer with 1 year of experience
            in creating dynamic and responsive web applications using React and
            Next.js frameworks.
          </p>
          <p>
            My expertise in HTML, CSS, and JavaScript allows me to build
            visually appealing and user-friendly websites. I have a solid
            understanding of the principles of component-based development, and
            am passionate about creating high-performance and scalable web
            applications that provide an exceptional user experience.
          </p>
          <p>
            I am a fast learner, and I am always eager to expand my skillset and
            improve my development process. I am excited to continue learning
            and growing as a developer, and am eager to apply my skills to
            real-world projects.
          </p>
          <p>
            In my free time, I love going for long walks with my dog, Ivy. I'm
            also doing a part time undergraduate degree in software engineering.
          </p>
        </div>
      </ContentSection>
      <ContentSection id="skills" containerClassName="">
        <div className="flex flex-col mb-8">
          <h2 className="text-4xl md:text-5xl mb-4">My Skills</h2>
        </div>
        <SkillsContainer>
          <SkillsCard backgroundImage={ReactLogo}>Yes</SkillsCard>
          <SkillsCard backgroundColor="red" backgroundImage={"/"}>
            Yes
          </SkillsCard>
          <SkillsCard backgroundColor="black" backgroundImage={"/"}>
            Yes
          </SkillsCard>
          <SkillsCard backgroundColor="purple" backgroundImage={"/"}>
            Yes
          </SkillsCard>
          <SkillsCard backgroundColor="blue" backgroundImage={"/"}>
            Yes
          </SkillsCard>
          <SkillsCard backgroundColor="lime" backgroundImage={"/"}>
            Yes
          </SkillsCard>
        </SkillsContainer>
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
