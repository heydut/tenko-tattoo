import Image from "next/image";

// ✨ //////////////////////////////

export default function ClingFilm() {
  return (
    <main className="relative">
      <div className="absolute z-0 w-full -mt-16">
        <Image
          src="/Tattoo Studio/1.png"
          alt="Background image"
          width={1000}
          height={500}
          className="w-full h-[56rem] object-cover opacity-40"
          draggable={false}
        />
        <div className="absolute top-0 left-0 z-10 w-full h-[56rem] bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>
      <div className="relative z-20 margin-x margin-y flex flex-col items-center justify-center gap-20">
        <div className="mt-4 flex flex-col items-center text-center">
          <h1>Aftercare</h1>
          <h1>Cling Film</h1>
          <div className="h-1 w-20 mt-4 bg-[#ed028c] rounded-full" />
        </div>
        <div className="h-[500px]" />
      </div>
    </main>
  );
}
