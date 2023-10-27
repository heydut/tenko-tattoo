import Btn from "@/components/UI/Btn";
import InstagramFeed from "./InstagramFeed";
import Gradient from "@/components/UI/Gradient";
import Image from "next/image";
import { DataStudio } from "@/data/DataStudio";

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
        <div className="relative z-10 margin-x margin-y space-y-10">
          <h1>
            Follow us on
            <br /> Instagram
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Btn
            text={DataStudio.instagram}
            href={DataStudio.instagramURL}
            target="_blank"
          />
        </div>
      </section>
      <InstagramFeed />
    </main>
  );
}
