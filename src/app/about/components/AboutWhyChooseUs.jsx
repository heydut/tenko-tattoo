// ✨ //////////////////////////////

import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";

export default function AboutWhyChooseUs() {
  const quality = [
    {
      icon: "/Icon example.svg",
      title: "Skilled tattoo artits",
      description:
        "Our tattoo artists are highly skilled and experienced. We only hire the best.",
    },
    {
      icon: "/Icon example.svg",
      title: "Premium Designs",
      description:
        "We just have the best designs in the world. You ask, we do. Period.",
    },
    {
      icon: "/Icon example.svg",
      title: "Safe and confortable",
      description:
        "Just the best tattoo experience you will ever have. We guarantee it.",
    },
    {
      icon: "/Icon example.svg",
      title: "High quality equipment",
      description:
        "The best equipment in the market. We don't compromise on quality.",
    },
  ];

  return (
    <main className="border-y border-neutral-400/50 ">
      <PageHeader
        title="Why our studio?"
        text="Still not convinced? Here are some reasons why you should choose us."
        small
      />
      <div className="margin-x pb-24 max-sm:pb-16 flex gap-10 max-lg:flex-col ">
        <div className="w-[25%] max-lg:w-full max-lg:order-1  min-w-[280px] flex flex-col max-lg:flex-row max-sm:flex-col gap-20 max-lg:gap-10">
          {quality.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-6 text-center group hover:scale-95 my-transition group"
            >
              <Image
                src={item.icon}
                width={200}
                height={200}
                alt="Studio picture"
                className="w-auto h-20 object-cover select-none"
                draggable={false}
              />
              <h4 className="w-2/3 font-bold max-md:text-center group-hover:text-[#ed028c] my-transition">
                {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="w-[50%] max-lg:w-full max-lg:order-3 max-lg:h-[350px] ">
          <Image
            src="/images/artists/MK108A23M8_2.png"
            width={1500}
            height={1000}
            alt="Studio picture"
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
        </div>
        <div className="w-[25%] max-lg:w-full max-lg:order-2 min-w-[285px] flex flex-col max-lg:flex-row max-sm:flex-col  gap-20 max-lg:gap-10">
          {quality.slice(2, 4).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-6 text-center group hover:scale-95 my-transition group"
            >
              <Image
                src={item.icon}
                width={200}
                height={200}
                alt="Studio picture"
                className="w-auto h-20 object-cover select-none"
                draggable={false}
              />
              <h4 className="w-2/3 font-bold max-md:text-center group-hover:text-[#ed028c] my-transition">
                {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
