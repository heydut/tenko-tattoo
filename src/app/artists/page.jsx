import PageBackground from "@/components/UI/PageBackground";
import TeamHero from "./components/TeamHero";
import TeamInstagramFeed from "./components/TeamInstagramFeed";
import TeamTattoosAvailable from "./components/TeamTattoosAvailable";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import PageHeader from "@/components/UI/PageHeader";

// ✨ //////////////////////////////

export const metadata = {
  title: "Artists | Tenko Tattoo",
  description:
    "Meet our artists, find more about them, their work, and their availability. We are a tattoo studio based in Preston, UK.",
};

// ✨ //////////////////////////////

export default function Team() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[8]} />
      <PageHeader
        title="Artists"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
      <TeamHero />
      <TeamInstagramFeed />
      <TeamTattoosAvailable />
    </main>
  );
}
