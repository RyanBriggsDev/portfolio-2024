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
  setActiveTab?: (title: string) => void;
  className?: string;
};

const SkillsTabs: React.FC<SkillsTabsProps> = ({
  className,
  category,
  setActiveTab,
}) => {
  let handleTabSwitch = () => {
    if (setActiveTab) {
      setActiveTab(category.type.toLowerCase().replace(" ", "-"));
    }
  };

  return (
    <div
      onClick={() => handleTabSwitch()}
      className={`skills-tab transition-all ease-in-out duration-300 text-white hover:text-[#005995] hover:underline cursor-pointer text-center lg:text-left ${className}`}
    >
      {category.type}
    </div>
  );
};

export default SkillsTabs;

{
  /* <div className="skills-items">
    {category.items.map((item, index) => (
      <div key={index} className="skill-item">
        <img src={item.image} alt={`${item.title} logo`} />
        <span>{item.title}</span>
      </div>
    ))}
  </div> */
}
