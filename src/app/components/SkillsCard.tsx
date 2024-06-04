interface SkillsCardProps {
  children: React.ReactNode;
  backgroundImage?: React.ReactNode;
  backgroundColor?: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  backgroundImage,
  backgroundColor,
  children,
}) => {
  return (
    <div
      className="item bg-cover bg-center w-40 h-60"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default SkillsCard;
