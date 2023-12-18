// ✨ //////////////////////////////

import Image from "next/image";

export default function AboutHero() {
  return (
    <main
      data-aos="zoom-in-up"
      className="margin-x h-[500px] max-md:h-[400px] relative z-20 flex flex-col gap-20"
    >
      <Image
        src="/images/artists/MK108A23M8_2.png"
        width={1500}
        height={1000}
        alt="Studio picture"
        className="absolute top-0 left-0 w-full h-full object-cover select-none"
        draggable={false}
        priority
      />
    </main>
  );
}
