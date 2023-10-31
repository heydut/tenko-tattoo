import Btn from "@/components/UI/Btn";
import { DataStudio } from "@/data/DataStudio";
import CardArtist from "./CardArtist";
import { DataArtist } from "@/data/DataArtist";
import CardJoinOurTeam from "./CardJoinOurTeam";
import PageHeader from "@/components/UI/PageHeader";

// ✨ //////////////////////////////

export default function HomeTeam() {
  return (
    <main>
      <section className="relative z-20 bg-neutral-900/70">
        <PageHeader
          title="Meet our artists"
          text="Find more about our artists and their work. We are always looking for new talent to join our team. If you are interested in working with us, please contact us.
          "
        />
        <div className="margin-x pb-24 max-sm:pb-16">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-6">
            <CardArtist data={DataArtist[0]} />
            <CardJoinOurTeam />
          </div>
        </div>
      </section>
      {/* <InstagramFeed /> */}
    </main>
  );
}
