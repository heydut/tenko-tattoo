import Btn from "@/components/UI/Btn";
import { DataArtist } from "@/data/DataArtist";
import Image from "next/image";
import Link from "next/link";
import SnowBackground from "./components/SnowBackground";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import ArtistHero from "./components/ArtistHero";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import PageBackground from "@/components/UI/PageBackground";

// ✨ //////////////////////////////

export const metadata = {
  title: "Meet Dorisu Tattoo ✨",
  description:
    "Find more about Dorisu Tattoo, an artist from Tenko Tattoo | We are a Tatto Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function DorisuTattoo() {
  const doris = DataArtist[0];
  return (
    <main className="relative">
      <SnowBackground />
      <PageBackground data={DataBackgrounds[20]} />

      <div className="relative z-10 margin-x margin-y space-y-20">
        <div className="flex flex-col items-start">
          <Link
            href="/artists"
            className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 my-transition mt-4"
          >
            <ArrowLeftIcon className="text-neutral-400 h-4 w-auto" />
            <p className="">Back to all artists page</p>
          </Link>

          <ArtistHero />
        </div>
        <div className="">
          {/* <ArtistInstagramFeed /> */}
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-3df43858-5983-4dcd-9237-e64f98bd6594"
            data-elfsight-app-lazy
          ></div>
          <div className="w-full flex justify-between mt-8">
            <Link
              href={doris.instagramURL}
              target="_blank"
              className="flex items-center gap-4"
            >
              <Image
                src="/images/Instagram logo.webp"
                width={50}
                height={50}
                alt="Instagram logo"
                className="h-12 w-auto"
              />
              <p className="doris text-4xl hover:text-neutral-300 my-transition">
                {doris.instagram}
              </p>
            </Link>
            <Btn
              text="Follow me"
              href={doris.instagramURL}
              target="blank_"
              outline
            />
          </div>
        </div>
      </div>
    </main>
  );
}
