import Logo from "@/components/UI/Logo";
import Image from "next/image";

// ✨ //////////////////////////////

export default function HomeHero() {
  return (
    <div className="relative">
      <Image
        src="/placeholder.png"
        alt="Background image"
        width={1000}
        height={500}
        className="absolute z-0 w-full h-[100vh] object-cover opacity-10"
      />
      <main className="relative z-10 margin-x margin-y flex flex-col items-center text-center">
        <Logo css="h-64 mb-10" />
        <h1 className="w-2/3 font-extrabold">
          We are an tattoo studio in Preston, UK
        </h1>
        <p className="w-2/3">
          After reaching 1,000 years of age and gaining its ninth tail, a
          kitsune turns a white or golden colour,{" "}
          <strong className="text-white">becoming a tenko</strong>, the most
          powerful form of the kitsune, and then ascends to the heavens.
        </p>
      </main>
    </div>
  );
}
