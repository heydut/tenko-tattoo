import Btn from "@/components/UI/Btn";
import Image from "next/image";
import Link from "next/link";

// ✨ //////////////////////////////

export default function CardJoinOurTeam() {
  const joinTags = ["Experienced", "Original", "Artist"];
  return (
    <div className="flex flex-col gap-4 items-center">
      <Link
        href="/join-our-team"
        className="w-full my-transition hover:scale-95 group flex flex-col items-center justify-center gap-6"
      >
        <div className="w-full flex flex-col gap-4 p-4 border border-neutral-500 group-hover:border-[#ed028c]/50 bg-neutral-600/10 hover:bg-neutral-600/20 my-transition ">
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-[#ed028c]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 my-transition">
              <h3 className="max-sm:text-base tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                Find
              </h3>
              <h3 className="max-sm:text-base tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                More about
              </h3>
              <h3 className="max-sm:text-base tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                Join our
              </h3>
              <h3 className="max-sm:text-base tracking-wide font-bold text-center bg-[#ed028c]/70 px-3 py-1">
                Team
              </h3>
            </div>
            <Image
              src="/images/artists/MK108A23M8_2.png"
              width={400}
              height={400}
              alt="Artist picture"
              className="h-96 w-full max-lg:h-80 max-lg:w-full max-md:h-60 max-sm:h-72 max-md:w-full object-cover "
            />
          </div>

          <div className="max-md:hidden max-sm:flex  flex flex-wrap gap-2 items-center">
            {joinTags.map((tag) => (
              <span className=" inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-light tracking-wide text-white ring-1 ring-inset ring-neutral-800 group-hover:ring-neutral-700 my-transition">
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
        <h3 className="max-sm:text-lg tracking-wide my-transition group-hover:text-[#ed028c]">
          Could this be you?
        </h3>
      </Link>
    </div>
  );
}
