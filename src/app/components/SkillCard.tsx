type SkillItem = {
  title: string;
  image: any;
};

type SkillCardProps = {
  item: SkillItem;
};

const SkillCard: React.FC<SkillCardProps> = ({ item }: SkillCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-w-[75px]">
      <img src={item.image.src} alt={`${item.title} logo`} />
      <p>{item.title}</p>
    </div>
  );
};

export default SkillCard;
