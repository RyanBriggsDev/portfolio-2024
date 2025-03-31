import ContentSection from "./layout/ContentSection";
import AccordionSection from "./AccordionSection";
import RCALogo from "../assets/images/icons/rca_logo.svg";
import ThatWorksLogo from "../assets/images/icons/thatworks.jpeg";

type ExperienceCategory = {
  title: string;
  company: string;
  description: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  workArrangement: string;
  skills: string[];
  logo: string;
};

const experience: ExperienceCategory[] = [
  {
    title: "Expert Shopify Developer",
    company: "That Works",
    description: "Project Development Optimising Themes for Speed & Conversion",
    employmentType: "Full-time",
    startDate: "Nov 2024",
    endDate: "Present",
    location: "Anywhere",
    workArrangement: "Remote",
    skills: ["Liquid", "Tailwind CSS", "JavaScript", "Git", "Vue.js"],
    logo: ThatWorksLogo.src,
  },
  {
    title: "Junior Front-End Developer",
    company: "Rainy City Agency",
    description: "Award-Winning Shopify Plus Agency",
    employmentType: "Full-time",
    startDate: "Jul 2023",
    endDate: "Nov 2024",
    location: "Manchester, UK",
    workArrangement: "Hybrid",
    skills: ["Liquid", "Tailwind CSS", "JavaScript", "Git", "React"],
    logo: RCALogo.src,
  },
];

function Experience() {
  return (
    <ContentSection
      id="experience"
      containerClassName="grid grid-cols-12 gap-8 items-center"
    >
      <div className="col-span-12 md:col-span-12 min-h-80">
        <h2 className="mb-8 text-white">Professional Experience</h2>
        <AccordionSection experiences={experience} />
      </div>
    </ContentSection>
  );
}

export default Experience;
