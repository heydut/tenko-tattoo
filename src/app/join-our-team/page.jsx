import PageBackground from "@/components/UI/PageBackground";
import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";

// ✨ //////////////////////////////

export const metadata = {
  title: "Join our team | Tenko Tattoo",
  description:
    "Do you want to join our team? Here at Tenko Tattoo we are always looking for new talents. Send us your portfolio and we will get back to you as soon as possible.",
};

// ✨ //////////////////////////////

export default function JoinOurTeam() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[3]} />
      <PageHeader
        title="Join our team"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
    </main>
  );
}
