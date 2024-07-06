import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

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

type ExperienceAccordionProps = {
  experience: ExperienceCategory;
  isOpen: boolean;
  onToggle: () => void;
};

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  experience,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg text-white col-span-12">
      <div
        className={`group flex flex-row justify-between items-start md:items-center cursor-pointer p-3 rounded-lg hover:bg-secondary transition-colors duration-300 ease-in-out ${
          isOpen ? "bg-secondary" : "bg-primary"
        }`}
        onClick={onToggle}
      >
        <div className="flex flex-col w-full">
          <span className="text-lg font-medium group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            {experience.title} @ {experience.company}
          </span>
          <span className="mt-1 md:mt-0 text-sm text-gray-300 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">{`${experience.startDate} - ${experience.endDate}`}</span>
        </div>
        <div className="md:ml-2 text-gray-300 hover:text-white transition-transform duration-300 ease-in-out">
          <div
            className={`transform transition-transform duration-300 text-3xl group-hover:-translate-y-1 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 -translate-y-4 scale-95"
        enterTo="transform opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 translate-y-0 scale-100"
        leaveTo="transform opacity-0 -translate-y-4 scale-95"
      >
        <div className="p-3 mt-2 bg-gray-700 rounded-lg">
          <Transition
            as={Fragment}
            show={isOpen}
            enter="transition ease-out duration-500 delay-100"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-300 delay-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">📍</span>
                  <span>{experience.location}</span>
                </div>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary px-2 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {experience.logo && (
                <div className="mt-4 md:mt-0 md:ml-4 hidden md:flex justify-center items-center">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  );
};

export default ExperienceAccordion;
