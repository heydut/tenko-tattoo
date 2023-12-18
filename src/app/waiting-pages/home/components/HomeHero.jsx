import Btn from "@/components/UI/Btn";
import Logo from "@/components/UI/Logo";
import Image from "next/image";

// ✨ //////////////////////////////

export default function HomeHero() {
  return (
    <div className="relative  flex items-center justify-center">
      <div className="fixed top-0 z-0 w-full h-[600px]">
        <Image
          src="/Tattoo Studio/1.png"
          alt="Background image"
          width={1000}
          height={500}
          className="fixed top-0 w-full h-[600px] object-cover opacity-40"
          draggable={false}
          priority
        />
        <div className="absolute top-0 left-0 z-10 w-full h-[600px] bg-gradient-to-t from-neutral-900 to-transparent" />
        <div className="absolute z-10 top-0 -left-32 h-[500px] w-[500px] max-sm:h-[350px] max-sm:w-[350px] rotate-45 bg-[#ed028c]/20 rounded-full blur-[150px] my-transition opacity-40" />
        <div className="absolute z-10 bottom-0 -right-32 h-[300px] w-[300px] max-sm:h-[175px] max-sm:w-[175px] rotate-45 bg-[#ed028c]/20 rounded-full blur-[200px] my-transition opacity-40" />
      </div>

      <main className="relative z-10 margin-x margin-y flex flex-col items-center text-center gap-20 -mt-16 max-sm:-mt-4">
        <div
          data-aos="zoom-out-down"
          className="relative  flex items-center justify-center group"
        >
          <Logo css="h-[26rem] max-lg:h-[20rem] relative z-20" />

          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-auto aspect-square bg-[#ed028c]/10 rounded-full blur-3xl my-transition opacity-0 group-hover:opacity-40" />
        </div>
        <h5
          data-aos="zoom-out-up"
          className="relative z-20 w-[70%] max-lg:w-[80%] max-sm:w-full text-lg tracking-normal "
        >
          After reaching 1,000 years of age and gaining its ninth tail, a
          kitsune turns a white or golden colour,{" "}
          <strong className="text-white font-black">becoming a tenko</strong>,
          the most powerful form of the kitsune, and then ascends to the
          heavens.
        </h5>
        <div className="flex gap-4">
          <div data-aos="zoom-in-right">
            <Btn text="Enquiries" href="/enquiries" />
          </div>
          <div data-aos="zoom-in-left">
            <Btn text="About our studio" href="/about" outline />
          </div>
        </div>
        {/* <h5 className="relative z-20 w-2/3 text-3xl font-medium tracking-normal">
          We are an tattoo studio in Preston, UK
        </h5> */}
      </main>
    </div>
  );
}
