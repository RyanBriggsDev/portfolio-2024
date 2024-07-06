type SkillItem = {
  title: string;
  image: any;
  url: string;
};

type SkillCardProps = {
  item: SkillItem;
};

const SkillCard: React.FC<SkillCardProps> = ({ item }: SkillCardProps) => {
  return (
    <a
      className="flex flex-col justify-center items-center gap-2 min-w-[75px] p-2 hover:bg-[rgba(0,73,121,.5)] duration-300 ease-in-out transition-colors rounded-lg"
      rel="noopener noreferrer"
      href={item.url}
      target="_blank"
    >
      <img src={item.image.src} alt={`${item.title} logo`} />
      <p className=" text-white">{item.title}</p>
    </a>
  );
};

export default SkillCard;
