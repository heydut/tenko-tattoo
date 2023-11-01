import Btn from "@/components/UI/Btn";
import Image from "next/image";

// ✨ //////////////////////////////

export default function AboutCTA() {
  return (
    <div className="margin-y">
      <main className="relative h-full z-20 margin-x margin-y">
        <div className="relative z-30 flex flex-col gap-12">
          {" "}
          <div
            data-aos="zoom-in-up"
            className="mt-4 flex flex-col max-md:items-center"
          >
            <h2 className="font-bold max-md:text-center">
              Book now a<br />
              free consultation
            </h2>
            <div className="h-1 w-20 mt-4 bg-[#ed028c]" />
          </div>
          <p
            data-aos="zoom-in-up"
            className="w-1/2 max-md:w-full max-md:text-center text-neutral-300"
          >
            {" "}
            Are you ready to get your new tattoo? Or do you still have any
            questions? You can book a free consultation with us and we will be
            happy to answer all your questions.
          </p>
          <div className="flex max-md:justify-center w-full gap-4">
            <div data-aos="zoom-in-up">
              <Btn text="Book now" href="/contact" />
            </div>
            <div data-aos="zoom-in-up">
              <Btn text="Contact us" href="/contact" outline />
            </div>
          </div>
        </div>
        <Image
          src="/images/artists/MK108A23M8_2.png"
          width={1500}
          height={1000}
          alt="Studio picture"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 select-none"
          draggable={false}
        />
      </main>
    </div>
  );
}
