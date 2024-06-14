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
      className={`flex-wrap gap-4 md:gap-8 justify-center items-center
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
