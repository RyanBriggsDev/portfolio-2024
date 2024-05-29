import ContentSection from "./components/layout/ContentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContentSection id="hero" />
      <ContentSection id="about" />
    </main>
  );
}
