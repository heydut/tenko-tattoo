import { DataArtist } from "@/data/DataArtist";
import Link from "next/link";
import SnowBackground from "./components/SnowBackground";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import ArtistHero from "./components/ArtistHero";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import PageBackground from "@/components/UI/PageBackground";
import ArtistGallery from "./components/ArtistGallery";
import ArtistInstagramFeed from "./components/ArtistInstagramFeed";

// ✨ //////////////////////////////

export const metadata = {
  title: "Meet Dorisu Tattoo ✨",
  description:
    "Find more about Dorisu Tattoo, an artist from Tenko Tattoo | We are a Tatto Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function DorisuTattoo() {
  return (
    <main className="relative">
      <SnowBackground />
      <PageBackground data={DataBackgrounds[20]} />

      <div className="relative z-10">
        {/* <Link
          href="/artists"
          className="margin-x -mb-6 flex items-center gap-2 text-sm opacity-60 hover:opacity-100 my-transition"
        >
          <ArrowLeftIcon className="text-neutral-400 h-4 w-auto" />
          <p className="">Back to all artists page</p>
        </Link> */}

        <ArtistHero />
        <ArtistGallery doris={DataArtist[0]} />
        <ArtistInstagramFeed doris={DataArtist[0]} />
      </div>
    </main>
  );
}
