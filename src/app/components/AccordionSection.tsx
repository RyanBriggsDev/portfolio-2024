import { useState } from "react";
import ExperienceAccordion from "./ExperienceAccordion";

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

type AccordionSectionProps = {
  experiences: ExperienceCategory[];
};

const AccordionSection: React.FC<AccordionSectionProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <div>No experiences available</div>;
  }

  // Set the initial state to open the first accordion by default
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="experience-accordion md:grid md:grid-cols-12 md:gap-8">
      {experiences.map((exp, index) => (
        <ExperienceAccordion
          key={index}
          experience={exp}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionSection;
