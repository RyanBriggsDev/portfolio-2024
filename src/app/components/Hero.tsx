import ContentSection from "./layout/ContentSection";

function Hero() {
  return (
    <ContentSection id="hero">
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl text-white mb-4">
          Frontend Developer & Shopify Expert 👨‍💻
        </h1>
        <h4 className="text-3xl md:text-4xl text-white mb-6">Hey, I'm Ryan.</h4>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          I build fast, scalable web applications with React, Next.js, and Shopify Liquid. 
          Passionate about creating seamless user experiences and optimizing for performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition-colors duration-300 inline-block text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </ContentSection>
  );
}

export default Hero;
