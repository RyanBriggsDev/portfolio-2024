import ContentSection from "./layout/ContentSection";

function Hero() {
  return (
    <ContentSection id="hero">
      <div>
        <h1 className="text-5xl md:text-6xl text-white">
          Frontend Developer 👨‍💻
        </h1>
        <h4 className="text-3xl md:text-4xl text-white">Hey, I'm Ryan.</h4>
      </div>
    </ContentSection>
  );
}

export default Hero;
