import Image from "next/image";
import {
  BanknotesIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  SparklesIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import PageHeader from "@/components/UI/PageHeader";
import PageBackground from "@/components/UI/PageBackground";
import { DataBackgrounds } from "@/data/DataBackgrounds";

// ✨ //////////////////////////////

export default function JoinUsReasons() {
  const features = [
    {
      name: "Highly Competitive % Rates",
      description: "Increase your earnings.",
      icon: BanknotesIcon,
    },
    {
      name: "Studio-Managed Diary",
      description: "Focus on your art; we manage the logistics.",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "Dedicated Marketing",
      description:
        "Benefit from a robust marketing strategy conducted by a professional agency.",
      icon: MegaphoneIcon,
    },
    {
      name: "Conventions & Exposure",
      description:
        "Opportunity to represent yourself and Tenko Tattoo at conventions. Transport covered!",
      icon: UserGroupIcon,
    },
    {
      name: "Merch Perks",
      description: "Discounted production costs for your custom merchandise.",
      icon: SparklesIcon,
    },
  ];
  return (
    <main className="relative z-20">
      <section className="margin-x flex max-md:flex-col gap-6 max-md:gap-20">
        <div
          data-aos="zoom-in-up"
          className="w-1/4 max-md:w-full flex flex-col gap-6"
        >
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-60 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95"
          />{" "}
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-32 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95 max-md:hidden"
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="w-2/4 max-md:w-full flex flex-col gap-6 "
        >
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-full w-full opacity-70 hover:opacity-100 my-transition hover:scale-95"
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="w-1/4 max-md:w-full flex flex-col gap-6"
        >
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-32 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95 max-md:hidden"
          />
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-60 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95"
          />{" "}
        </div>
      </section>
      <section className="relative">
        <div className="relative z-20 margin-y py-24 max-sm:py-16">
          <div className="margin-x ">
            <div className="flex max-lg:flex-col max-lg:gap-16 items-end max-lg:items-center ">
              <div className="w-1/2 max-lg:hidden">
                <PageHeader
                  title1="Why join"
                  title2="Tenko Tatoo?"
                  sided
                  noMargin
                />
              </div>{" "}
              <div className="lg:hidden">
                <PageHeader title1="Why join" title2="Tenko Tatoo?" noMargin />
              </div>
              <p
                data-aos="zoom-in-up"
                className="w-1/2 max-lg:w-full text-right max-lg:text-center"
              >
                Located in the vibrant heart of Preston, UK,{" "}
                <span className="font-medium text-white">
                  Tenko Tattoo is on the lookout for skilled artists to join our
                  esteemed studio
                </span>
                , with opportunities to also represent us at tattoo conventions.
              </p>
            </div>
            <div className="w-full mt-16 grid grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 ">
              {features.map((feature) => (
                <div
                  data-aos="zoom-in-up"
                  key={feature.name}
                  className="relative pl-9"
                >
                  <div className="flex items-center">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-[#ed028c]"
                      aria-hidden="true"
                    />
                    <p className="font-medium text-white">{feature.name}</p>
                  </div>{" "}
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
