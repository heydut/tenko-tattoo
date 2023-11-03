// ✨ //////////////////////////////

import Image from "next/image";

export default async function ArtistGallery({ doris }) {
  return (
    <div className="margin-y border-t border-b border-neutral-500/50">
      <div className="margin-x flex gap-6 ">
        <div className="w-1/4 max-sm:w-1/2 flex flex-col gap-6 ">
          <Image
            data-aos="zoom-in"
            src={doris.workingPicture1}
            width={500}
            height={500}
            alt="Dorisu Tattoo working picture 1"
            className="object-cover grayscale-[70%] hover:grayscale-0 my-transition"
            draggable={false}
          />
          <Image
            data-aos="zoom-in"
            src={doris.workingPicture2}
            width={500}
            height={500}
            alt="Dorisu Tattoo working picture 1"
            className="object-cover grayscale-[70%] hover:grayscale-0 my-transition"
            draggable={false}
          />
        </div>
        <div className="w-2/4 max-sm:w-1/2 flex flex-col gap-6">
          <Image
            data-aos="zoom-in"
            src={doris.workingPicture3}
            width={500}
            height={500}
            alt="Dorisu Tattoo working picture 1"
            className="w-full h-full object-cover grayscale-[70%] hover:grayscale-0 my-transition"
            draggable={false}
          />
        </div>{" "}
        <div className="w-1/4 max-sm:hidden flex flex-col max-sm:flex-row gap-6">
          <Image
            data-aos="zoom-in"
            src={doris.workingPicture4}
            width={500}
            height={500}
            alt="Dorisu Tattoo working picture 1"
            className="object-cover grayscale-[70%] hover:grayscale-0 my-transition"
            draggable={false}
          />
          <Image
            data-aos="zoom-in"
            src={doris.workingPicture5}
            width={500}
            height={500}
            alt="Dorisu Tattoo working picture 1"
            className="object-cover grayscale-[70%] hover:grayscale-0 my-transition"
            draggable={false}
          />
        </div>
      </div>{" "}
      <div className="margin-x mt-6 w-full max-sm:flex hidden flex-col max-sm:flex-row gap-6">
        <Image
          data-aos="zoom-in"
          src={doris.workingPicture4}
          width={500}
          height={500}
          alt="Dorisu Tattoo working picture 1"
          className="object-cover grayscale-[70%] hover:grayscale-0 my-transition w-full h-auto"
          draggable={false}
        />
      </div>
    </div>
  );
}
