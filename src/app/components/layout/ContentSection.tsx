import Container from "./Container";

type ContentSectionProps = {
  id: string;
};

function ContentSection({ id }: ContentSectionProps) {
  return (
    <div id={id} className="w-full flex items-center min-h-screen">
      <Container>
        <div>
          <h1 className="text-5xl">Software Developer 👨‍💻</h1>
          <h4 className="text-3xl">Hey, I'm Ryan.</h4>
        </div>
      </Container>
    </div>
  );
}

export default ContentSection;
