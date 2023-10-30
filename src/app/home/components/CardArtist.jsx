// ✨ //////////////////////////////

import Image from "next/image";
import Link from "next/link";

export default function CardArtist({ data }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Link
        href={data.artistPage}
        className="my-transition hover:scale-95 group flex flex-col items-center justify-center gap-6"
      >
        <div className="flex flex-col gap-4 p-4 border border-neutral-500 group-hover:border-[#ed028c]/50 bg-neutral-600/10 hover:bg-neutral-600/20 my-transition ">
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-[#ed028c]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 my-transition">
              <h3 className="tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                Find
              </h3>
              <h3 className="tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                More about
              </h3>
              <h3 className="tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                {data.name}
              </h3>
            </div>
            <Image
              src={data.image}
              width={400}
              height={400}
              alt="Artist picture"
              className="h-96 w-96 object-cover"
            />
          </div>

          <div className="flex gap-2 items-center">
            {data.tags.map((tag) => (
              <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-light tracking-wide text-white ring-1 ring-inset ring-neutral-800 group-hover:ring-neutral-700 my-transition">
                <svg
                  className="h-1.5 w-1.5 fill-[#ed028c]"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="tracking-wide my-transition group-hover:text-[#ed028c]">
          {" "}
          {data.name}
        </h3>
      </Link>
    </div>
  );
}
