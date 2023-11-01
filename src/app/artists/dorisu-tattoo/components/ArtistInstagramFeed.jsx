import Btn from "@/components/UI/Btn";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// ✨ //////////////////////////////

export default async function ArtistInstagramFeed({ doris }) {
  return (
    <div className="">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
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
  );
}
