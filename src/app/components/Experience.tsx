import ContentSection from "./layout/ContentSection";
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
    title: "Development Lead",
    company: "That Works",
    description: "Leading development team and overseeing technical strategy for client projects",
    employmentType: "Full-time",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "Anywhere",
    workArrangement: "Remote",
    skills: ["Team Leadership", "Liquid", "Tailwind CSS", "JavaScript", "Git", "Vue.js"],
    logo: ThatWorksLogo.src,
  },
  {
    title: "Expert Shopify Developer",
    company: "That Works",
    description: "Project Development Optimising Themes for Speed & Conversion",
    employmentType: "Full-time",
    startDate: "Nov 2024",
    endDate: "Jul 2025",
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
    <ContentSection id="experience">
      <div className="text-center mb-12">
        <h2 className="mb-2 text-white">Professional Experience</h2>
        <h4 className="mb-8 text-white">My journey in web development.</h4>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-800 z-10"></div>
              
              {/* Experience card */}
              <div className="ml-16 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/90 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0 flex-1">
                    <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right lg:ml-4 lg:flex-shrink-0">
                    <div className="text-sm text-gray-400 mb-1">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <div className="flex items-center justify-end space-x-2 text-xs text-gray-500">
                      <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded-full">{exp.employmentType}</span>
                      <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded-full">{exp.workArrangement}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="mb-4 lg:mb-0 flex-1">
                    <h4 className="text-white font-semibold mb-3">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-colors whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right lg:ml-4 lg:flex-shrink-0">
                    <div className="text-gray-400 text-sm">
                      📍 {exp.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}

export default Experience;
