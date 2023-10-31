import Btn from "@/components/UI/Btn";
import InstagramFeed from "./InstagramFeed";
import Gradient from "@/components/UI/Gradient";
import Image from "next/image";
import { DataStudio } from "@/data/DataStudio";
import PageHeader from "@/components/UI/PageHeader";

// ✨ //////////////////////////////

export default function HomeCTASocial() {
  return (
    <main>
      <section className="relative z-20 bg-neutral-900">
        {/* <Gradient left xl />
        <Image
          src="/placeholder.png"
          alt="Background image"
          width={1000}
          height={500}
          className="absolute z-0 w-full h-[100%] object-cover"
        /> */}
        <PageHeader
          title1="Follow us on"
          title2="Instagram"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          sided
        />
        <div className="relative z-10 margin-x -mt-14 space-y-10">
          <Btn
            text={DataStudio.instagram}
            href={DataStudio.instagramURL}
            target="_blank"
          />
        </div>
      </section>
      {/* <InstagramFeed /> */}
    </main>
  );
}
