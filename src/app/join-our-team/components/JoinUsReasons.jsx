// ✨ //////////////////////////////

import Image from "next/image";

export default function JoinUsReasons() {
  const reasons = [
    {
      title: "Highly Competitive % Rates",
      description: "Increase your earnings.",
    },
    {
      title: "Studio-Managed Diary",
      description: "Focus on your art; we manage the logistics.",
    },
    {
      title: "Dedicated Marketing",
      description:
        "Benefit from a robust marketing strategy conducted by a professional agency.",
    },
    {
      title: "Conventions & Exposure",
      description:
        "Opportunity to represent yourself and Tenko Tattoo at conventions. Transport covered!",
    },
    {
      title: "Merch Perks",
      description: "Discounted production costs for your custom merchandise.",
    },
  ];
  return (
    <main className="relative z-20">
      <section className="margin-x flex gap-6">
        <div className="w-1/4 flex flex-col gap-6">
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
            className="object-cover h-32 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37719.5303428088!2d-2.7295957502441417!3d53.78111044702643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0ccb0b7b3c4d%3A0xd68703fb79b28721!2sPreston!5e0!3m2!1sen!2suk!4v1699374858603!5m2!1sen!2suk"
            width="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full opacity-70 hover:opacity-100 my-transition p-4 border border-neutral-500 hover:border-neutral-400 hover:scale-95"
          />
          <p className="text-center text-lg leading-9">
            Located in the vibrant heart of Preston, UK,{" "}
            <span className="font-medium text-white">
              Tenko Tattoo is on the lookout for skilled artists to join our
              esteemed studio
            </span>
            , with opportunities to also represent us at tattoo conventions.
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-6">
          <Image
            src="/Tattoo Studio/1.png"
            width={500}
            height={500}
            alt="Studio picture"
            draggable={false}
            className="object-cover h-32 w-full opacity-70 hover:opacity-100 my-transition hover:scale-95"
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
      <section className="margin-x">
        <p>asdasdasd</p>
      </section>
    </main>
  );
}
