import Btn from "@/components/UI/Btn";
import PageBackground from "@/components/UI/PageBackground";
import PageHeader from "@/components/UI/PageHeader";
import { DataAftercare } from "@/data/DataAftercare";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import Image from "next/image";

// ✨ //////////////////////////////

export default function AlternativeSolutions() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[0]} />
      <PageHeader title1="Aftercare" title2="Alternative Solutions" />
      <div className="relative z-20 margin-x flex flex-col gap-20 items-center">
        <p data-aos="zoom-in-up" className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus
          elementum sagittis vitae et leo duis. Iaculis nunc sed augue lacus
          viverra vitae congue eu. Nunc lobortis mattis aliquam faucibus purus
          in massa. Maecenas pharetra convallis posuere morbi leo urna molestie
          at elementum. Libero enim sed faucibus turpis in eu mi.
        </p>
        <div className="w-full">
          <div className="flex flex-col gap-6">
            {DataAftercare[2].instructions.map((item, i) => (
              <div key={i} data-aos="zoom-in-up">
                <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-center items-start gap-12 max-sm:gap-8 p-6 border border-neutral-500 bg-neutral-800/20 hover:bg-neutral-700/30 hover:scale-95 hover:border-neutral-200 my-transition">
                  <div className="w-[20%] max-lg:w-[35%] max-sm:w-[100%] flex max-sm:flex-col items-start max-sm:items-center gap-4">
                    <Image
                      src="/Icon example.svg"
                      width={200}
                      height={200}
                      alt="Tattoo icon"
                      className="h-6 w-auto mt-1.5"
                      draggable={false}
                    />
                    <h4>{item.name}</h4>
                  </div>

                  <p className="w-[80%] max-lg:w-[65%] max-sm:w-[100%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Btn href="/tattoo-aftercare" text="Back" outline />
      </div>
    </main>
  );
}
