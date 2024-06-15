import SkillCard from "./SkillCard";

type SkillItem = {
  title: string;
  image: any;
};

type SkillCategory = {
  type: string;
  items: SkillItem[];
};

type SkillsTabsProps = {
  category: SkillCategory;
  activeTab?: string;
};

const SkillsCards: React.FC<SkillsTabsProps> = ({ category, activeTab }) => {
  return (
    <div
      className={`flex-wrap gap-x-4 gap-y-6 md:gap-8 justify-center items-center lg:justify-start flex duration-300 ease-in-out transition-all
        ${
          category.type.toLowerCase().replace(" ", "-") === activeTab
            ? "flex"
            : "hidden"
        }`}
    >
      {category.items.map((item, index) => (
        <SkillCard key={index} item={item} />
      ))}
    </div>
  );
};

export default SkillsCards;

// transition

// import SkillCard from "./SkillCard";
// import { useState, useEffect } from "react";

// type SkillItem = {
//   title: string;
//   image: any;
// };

// type SkillCategory = {
//   type: string;
//   items: SkillItem[];
// };

// type SkillsTabsProps = {
//   category: SkillCategory;
//   activeTab?: string;
// };

// const SkillsCards: React.FC<SkillsTabsProps> = ({ category, activeTab }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (category.type.toLowerCase().replace(" ", "-") === activeTab) {
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, 0); // Adjust delay if needed
//       return () => clearTimeout(timer);
//     } else {
//       setIsVisible(false);
//     }
//   }, [category.type, activeTab]);

//   return (
//     <>
//       {isVisible && (
//         <div className="flex-wrap gap-4 md:gap-8 items-start justify-center flex fade-in min-h-[150px]">
//           {category.items.map((item, index) => (
//             <SkillCard key={index} item={item} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default SkillsCards;
