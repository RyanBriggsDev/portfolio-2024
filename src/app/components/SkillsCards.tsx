import SkillCard from "./SkillCard";

type SkillItem = {
  title: string;
  image: any;
  url: string;
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
