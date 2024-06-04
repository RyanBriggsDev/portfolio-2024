import Container from "./Container";

type ContentSectionProps = {
  id: string;
  children: React.ReactNode;
  containerClassName?: string;
};

function ContentSection({
  id,
  children,
  containerClassName,
}: ContentSectionProps) {
  return (
    <div id={id} className="w-full flex items-center min-h-screen">
      <Container
        containerClassName={containerClassName ? containerClassName : ""}
      >
        {children}
      </Container>
    </div>
  );
}

export default ContentSection;
