import HomeTeam from "../home/components/HomeTeam";
import AboutCTASocial from "./components/AboutCTASocial";
import AboutHero from "./components/AboutHero";
import AboutHistory from "./components/AboutHistory";
import AboutWhyChooseUs from "./components/AboutWhyChooseUs";

// ✨ //////////////////////////////

export default function About() {
  return (
    <main>
      PageAbout
      <AboutHero />
      <AboutHistory />
      <AboutWhyChooseUs />
      <HomeTeam />
      <AboutCTASocial />
    </main>
  );
}
