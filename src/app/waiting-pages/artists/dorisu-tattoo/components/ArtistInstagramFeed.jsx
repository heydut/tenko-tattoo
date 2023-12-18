import Btn from "@/components/UI/Btn";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// ✨ //////////////////////////////

export default async function ArtistInstagramFeed({ doris }) {
  return (
    <div className="margin-y margin-x flex flex-col items-center gap-16 max-sm:gap-12">
      <div
        data-aos="zoom-in-up"
        className="w-full flex flex-wrap justify-between max-sm:justify-center items-center gap-6"
      >
        {" "}
        <h1 className="">TATTOOS BY {doris.name}</h1>
        <Btn
          text="Check more"
          href={doris.instagramURL}
          target="blank_"
          outline
        />
      </div>

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
      <div
        className="elfsight-app-3df43858-5983-4dcd-9237-e64f98bd6594"
        data-elfsight-app-lazy
      />
    </div>
  );
}
