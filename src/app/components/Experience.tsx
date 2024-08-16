import ContentSection from "./layout/ContentSection";
import AccordionSection from "./AccordionSection";
import RCALogo from "../assets/images/icons/rca_logo.svg";

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
    title: "Junior Front-End Developer",
    company: "Rainy City Agency",
    description: "Award-Winning Shopify Plus Agency",
    employmentType: "Full-time",
    startDate: "Jul 2023",
    endDate: "Present",
    location: "Manchester, United Kingdom",
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
