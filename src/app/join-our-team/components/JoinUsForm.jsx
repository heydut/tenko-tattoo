import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import Image from "next/image";

// ✨ //////////////////////////////

export default function JoinUsForm() {
  return (
    <div className=" pb-24 max-sm:pb-16">
      {/* <div className="-mb-32 max-md:hidden">
        <PageHeader title1="Join our" title2="team" sided />
      </div>
      <div className="md:hidden -mb-6">
        <PageHeader title="Join our team" />
      </div> */}
      <main className="relative w-full">
        <div
          data-aos="zoom-in"
          className="absolute z-0 w-2/3 max-md:w-full h-full max-md:h-96 top-0 right-0 max-md:bottom-0 max-md:top-auto"
        >
          <Image
            src={DataBackgrounds[1].src}
            width={1000}
            height={500}
            alt={DataBackgrounds[1].src}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="relative z-10 w-full flex margin-x py-24 max-md:pt-0 max-md:pb-16"
        >
          <div className="w-1/2 h-[500px] max-sm:h-[600px] max-xl:w-[70%] max-lg:w-[80%] max-md:w-full max-md:mx-6 max-sm:mx-2 px-8 pt-8 pb-2 border border-neutral-500 hover:border-[#ed028c]/60 bg-neutral-900/80 backdrop-blur-sm my-transition  ">
            <iframe
              src="https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/4"
              width="100%"
              height="500px"
              className="max-sm:h-[600px]"
            />
          </div>
          <div className="w-1/2 max-xl:w-[30%] max-lg:w-[20%]  max-md:hidden"></div>
        </div>
      </main>
    </div>
  );
}
