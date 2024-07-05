import React from "react";
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

  return (
    <div>
      {experiences.map((exp, index) => (
        <ExperienceAccordion
          key={index}
          experience={exp}
          isOpenByDefault={index === 0}
        />
      ))}
    </div>
  );
};

export default AccordionSection;
