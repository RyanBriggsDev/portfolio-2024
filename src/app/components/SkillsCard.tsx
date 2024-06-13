interface SkillsCardProps {
  data: {
    name: string;
    image: string;
    alt: string;
  };
}

const SkillsCard = ({ data }: SkillsCardProps) => {
  return (
    <div className="skills-card w-full flex flex-col gap-3 bg-black p-4 relative h-[20px] hover:h-[160px] ease-in-out duration-300 transition-all">
      <h5 className="font-bold text-center absolute z-50 text-2xl md:text-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {data.name}
      </h5>
      <img
        className="opacity-70 max-h-full"
        src={data.image}
        alt={data.image}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
    </div>
  );
};

export default SkillsCard;
