import PageBackground from "@/components/UI/PageBackground";
import HomeTeam from "../home/components/HomeTeam";
import AboutCTASocial from "./components/AboutCTASocial";
import AboutHero from "./components/AboutHero";
import AboutHistory from "./components/AboutHistory";
import AboutWhyChooseUs from "./components/AboutWhyChooseUs";
import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";

// ✨ //////////////////////////////

export const metadata = {
  title: "About Us | Tenko Tattoo",
  description:
    "Find more about Tenko Tattoo, our history, our artists, and why you should choose us. We are here to make your tattoo experience extraordinary.",
};

// ✨ //////////////////////////////

export default function About() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[5]} />
      <PageHeader
        title="About us"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
      PageAbout
      <AboutHero />
      <AboutHistory />
      <AboutWhyChooseUs />
      {/* <HomeTeam /> */}
      <AboutCTASocial />
    </main>
  );
}
