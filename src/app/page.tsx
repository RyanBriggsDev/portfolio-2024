import TitleSection from "./components/layout/TitleSection";
import Container from "./components/layout/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <Container>
        <TitleSection
          h1Text="JavaScript Frontend Developer 👨‍💻"
          subText="Hey, I'm Ryan."
        />
      </Container>
    </main>
  );
}
