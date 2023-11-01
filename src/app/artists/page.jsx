import PageBackground from "@/components/UI/PageBackground";
import TeamHero from "./components/TeamHero";
import TeamInstagramFeed from "./components/TeamInstagramFeed";
import TeamTattoosAvailable from "./components/TeamTattoosAvailable";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import PageHeader from "@/components/UI/PageHeader";
import HomeTeam from "../home/components/HomeTeam";
import CardArtist from "../home/components/CardArtist";
import CardJoinOurTeam from "../home/components/CardJoinOurTeam";
import { DataArtist } from "@/data/DataArtist";

// ✨ //////////////////////////////

export const metadata = {
  title: "Artists | Tenko Tattoo",
  description:
    "Meet our artists, find more about them, their work, and their availability. We are a tattoo studio based in Preston, UK.",
};

// ✨ //////////////////////////////

export default function Artists() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[8]} />
      <PageHeader
        title="Artists"
        text="Find more about our artists and their work. We are always looking for new talent to join our team. If you are interested in working with us, please contact us."
      />
      <div className="relative z-10 margin-x pb-24 max-sm:pb-16">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-6">
          <CardArtist data={DataArtist[0]} />
          <CardJoinOurTeam />
        </div>
      </div>
    </main>
  );
}
