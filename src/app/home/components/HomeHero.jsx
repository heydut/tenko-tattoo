import Btn from "@/components/UI/Btn";
import Logo from "@/components/UI/Logo";
import Image from "next/image";

// ✨ //////////////////////////////

export default function HomeHero() {
  return (
    <div className="relative -mt-16 h-[100vh] flex items-center justify-center">
      <Image
        src="/Tattoo Studio/1.png"
        alt="Background image"
        width={1000}
        height={500}
        className="absolute z-0 w-full h-[100vh] object-cover opacity-10"
      />

      <main className="relative z-10 margin-x margin-y flex flex-col items-center text-center gap-20">
        <div className="absolute z-0 top-0 -left-32 h-[600px] w-[450px] rotate-45 bg-[#ed028c]/10 rounded-full blur-3xl my-transition opacity-40" />
        <div className="absolute z-0 bottom-0 -right-32 h-[400px] w-[250px] rotate-45 bg-[#ed028c]/10 rounded-full blur-3xl my-transition opacity-40" />

        <div className="relative  flex items-center justify-center group">
          <Logo css="h-[26rem] relative z-20" />

          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-auto aspect-square bg-[#ed028c]/10 rounded-full blur-3xl my-transition opacity-0 group-hover:opacity-40" />
        </div>
        <h5 className="relative z-20 w-2/3 text-lg tracking-normal ">
          After reaching 1,000 years of age and gaining its ninth tail, a
          kitsune turns a white or golden colour,{" "}
          <strong className="text-white font-black">becoming a tenko</strong>,
          the most powerful form of the kitsune, and then ascends to the
          heavens.
        </h5>
        <div className="flex gap-4">
          <Btn text="Enquiries" />
          <Btn text="About our studio" outline />
        </div>
        {/* <h5 className="relative z-20 w-2/3 text-3xl font-medium tracking-normal">
          We are an tattoo studio in Preston, UK
        </h5> */}
      </main>
    </div>
  );
}
