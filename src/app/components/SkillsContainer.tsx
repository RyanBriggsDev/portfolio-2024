import { ReactNode } from "react";

interface SkillsContainerProps {
  children: ReactNode;
}

const SkillsContainer: React.FC<SkillsContainerProps> = ({ children }) => {
  return (
    <div className="skills-container relative overflow-hidden w-full h-full p-4 flex justify-center items-center">
      {children}
    </div>
  );
};

export default SkillsContainer;
