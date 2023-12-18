// ✨ //////////////////////////////

import Btn from "@/components/UI/Btn";
import Image from "next/image";

export default function HomeAbout() {
  const quality = [
    {
      icon: "/Icon example.svg",
      title: "Quality 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    },
    {
      icon: "/Icon example.svg",
      title: "Quality 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    },
  ];
  return (
    <main className="relative z-20 bg-neutral-900">
      <div className="margin-x margin-y flex max-lg:flex-col gap-20">
        <div className="w-1/2 max-lg:w-full max-lg:text-center">
          <div className="relative z-20 flex flex-col items-start max-lg:items-center gap-10">
            <div
              data-aos="zoom-in"
              className="flex flex-col max-lg:items-center"
            >
              <h1>Why choosing us</h1>

              <div className="h-1 w-20 mt-4 bg-[#ed028c]" />
            </div>
            <p data-aos="zoom-in-up" className="">
              At <span className="font-semibold text-white">Tenko Tattoo</span>,
              we're your go-to spot for awesome tattoos. We're a team of
              experienced artists based in Preston, UK, and we're all about
              making your ink dreams come true. So, if you're looking for a team
              that's as excited about your tattoo as you are, come see us!
            </p>
            <div className="flex flex-col gap-20">
              {quality.map((item, i) => (
                <div
                  data-aos="zoom-in-up"
                  key={i}
                  className="flex max-lg:flex-col items-center gap-8 group hover:scale-95 my-transition group"
                >
                  <Image
                    src={item.icon}
                    width={200}
                    height={200}
                    alt="Studio picture"
                    className="w-auto h-24 object-cover select-none group-hover:scale-110 my-transition"
                    draggable={false}
                  />
                  <div className="flex flex-col items-start max-lg:items-center max-lg:text-center gap-4 ">
                    <h4 className="font-bold group-hover:text-[#ed028c] my-transition">
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-aos="zoom-in-up">
              <Btn text="More about our studio" href="/about" target="_blank" />
            </div>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full max-lg:h-[30rem] relative">
          <div
            data-aos="zoom-in-up"
            className="absolute  top-0 left-0 h-[30rem] max-lg:h-[18rem] w-[70%] max-lg:w-[80%] max-xl:w-[85%] flex flex-col gap-4 p-4 border border-neutral-500  bg-[#1b1b1b] hover:bg-neutral-800/90 my-transition "
          >
            <Image
              src="/images/artists/MK108A23M8_2.png"
              width={500}
              height={400}
              alt="Artist picture"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            data-aos="zoom-in-up"
            className="absolute bottom-0 right-0 h-[30rem] max-lg:h-[18rem] w-[70%] max-lg:w-[80%] max-xl:w-[85%] flex flex-col gap-4 p-4 border border-neutral-500  bg-[#1b1b1b] hover:bg-neutral-800/90 my-transition "
          >
            <Image
              src="/images/artists/MK108A23M8_2.png"
              width={500}
              height={400}
              alt="Artist picture"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
