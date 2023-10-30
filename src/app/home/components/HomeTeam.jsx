import Btn from "@/components/UI/Btn";
import { DataStudio } from "@/data/DataStudio";
import CardArtist from "./CardArtist";
import { DataArtist } from "@/data/DataArtist";
import CardJoinOurTeam from "./CardJoinOurTeam";

// ✨ //////////////////////////////

export default function HomeTeam() {
  return (
    <main>
      <section className="relative z-20 bg-neutral-900">
        <div className="relative z-10 margin-x margin-y flex flex-col items-center">
          <h1>Meet our artists</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <CardArtist data={DataArtist[0]} />
            <CardJoinOurTeam />
          </div>
        </div>
      </section>
      {/* <InstagramFeed /> */}
    </main>
  );
}
