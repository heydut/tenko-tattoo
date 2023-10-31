import Image from "next/image";

// ✨ //////////////////////////////

export default function PageBackground({ data }) {
  return (
    <div className="absolute z-0 w-full -mt-16">
      <Image
        src={data.src}
        alt={data.alt}
        width={1000}
        height={500}
        className="w-full h-[56rem] object-cover opacity-30 "
        draggable={false}
        priority
      />
      <div className="absolute top-0 left-0 z-10 w-full h-[56rem] bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/10" />
      <div className="h-10 w-full bg-neutral-900" />
    </div>
  );
}
