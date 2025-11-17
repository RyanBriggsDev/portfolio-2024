import ContentSection from "./layout/ContentSection";
import RCALogo from "../assets/images/icons/rca_logo.svg";
import ThatWorksLogo from "../assets/images/icons/thatworks.jpeg";
import WebilitiLogo from "../assets/images/webiliti-logo.svg";

type ExperienceCategory = {
  title: string;
  company: string;
  description: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  location: string;
  workArrangement?: string;
  skills: string[];
  logo: string;
  url?: string;
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
    logo: typeof ThatWorksLogo === 'string' ? ThatWorksLogo : ThatWorksLogo.src,
    url: "https://thatworks.agency/",
  },
  {
    title: "Co-founder",
    company: "Webiliti",
    description: "Webiliti is an advanced web management and testing platform designed to help teams ship faster by offering tools for real-time quality assurance, identifying visual drift, and optimizing Core Web Vitals performance.",
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Anywhere",
    skills: ["TypeScript", "React", "Tailwind CSS", "SQLite", "Shadcn UI"],
    logo: typeof WebilitiLogo === 'string' ? WebilitiLogo : WebilitiLogo.src,
    url: "https://www.webiliti.com/",
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
    logo: typeof ThatWorksLogo === 'string' ? ThatWorksLogo : ThatWorksLogo.src,  
    url: "https://thatworks.agency/",
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
    logo: typeof RCALogo === 'string' ? RCALogo : RCALogo.src,
  },
];

function Experience() {
  const linkedinUrl = "https://www.linkedin.com/in/ryanbriggsdev";

  return (
    <ContentSection id="experience">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-12 mb-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-white">Professional Experience</h2>
            <h4 className="text-white">My journey in web development.</h4>
          </div>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex-shrink-0"
              aria-label="LinkedIn Profile"
            >
              <svg className="size-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
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
              <div 
                className={`ml-16 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/90 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${exp.url ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (exp.url) {
                    window.open(exp.url, '_blank', 'noopener,noreferrer');
                  }
                }}
                role={exp.url ? 'button' : undefined}
                tabIndex={exp.url ? 0 : undefined}
                onKeyDown={(e) => {
                  if (exp.url && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    window.open(exp.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
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
                    {(exp.employmentType || exp.workArrangement) && (
                      <div className="flex items-center justify-end space-x-2 text-xs text-gray-500">
                        {exp.employmentType && (
                          <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded-full">{exp.employmentType}</span>
                        )}
                        {exp.workArrangement && (
                          <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded-full">{exp.workArrangement}</span>
                        )}
                      </div>
                    )}
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
