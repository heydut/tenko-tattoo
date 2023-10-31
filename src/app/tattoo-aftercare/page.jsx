import PageBackground from "@/components/UI/PageBackground";
import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

// ✨ //////////////////////////////

export const metadata = {
  title: "Aftercare | Tenko Tattoo",
  description:
    "Is important to take care of your tattoo after getting it done. Here you can find more about the aftercare process and how to take care of your tattoo.",
};

// ✨ //////////////////////////////

export default function TattooAftercare() {
  const tattooAftercare = [
    {
      name: "Cling Film",
      href: "/tattoo-aftercare/cling-film",
      resume: "Lorem ips um dolor sit amet, consectetur adipiscing elit.",
      instructions: [
        {
          name: "Preparation",
          description:
            "Wash and dry your hands thoroughly before handling the tattoo area.",
        },
        {
          name: "Cleaning",
          description:
            "Remove the cling film and wash or shower your tattoo using warm water. Mild, fragrance-free soap may be used to gently wash away plasma and ink.",
        },
        {
          name: "Drying",
          description:
            "Pat the area dry with a clean, unused towel. Do not rub the tattoo.",
        },
        {
          name: "Moisturising",
          description:
            "Apply a thin layer of aftercare cream. We recommend Palmers Cocoa Butter, Hustle Butter, or Bepanthen. Avoid over-moisturising, as this can clog pores and cause spots around the tattoo.",
        },
        {
          name: "Re-Wrapping",
          description:
            "Secure the area with fresh cling film and micropore tape, particularly if you are wearing clothing over the tattoo, are around animals, or are working in a dirty environment.",
        },
        {
          name: "Frequency",
          description: "Change the cling film every four hours or as needed.",
        },
        {
          name: "Night Care",
          description:
            "Keep the tattoo wrapped before going to bed for at least the first 2-3 days.",
        },
      ],
    },
    {
      name: "Tattoo Film",
      href: "/tattoo-aftercare/tattoo-film",
      resume: "Lorem ips um dolor sit amet, consectetur adipiscing elit.",
      instructions: [
        {
          name: "Initial Removal",
          description:
            "The morning after receiving your tattoo, remove the film in the shower using lukewarm water. Gently peel it off.",
        },
        {
          name: "Cleaning and Drying",
          description:
            "Gently wash away plasma and ink and pat dry with a clean, unused towel.",
        },
        {
          name: "New Sheet Application",
          description:
            "Peel off sides labelled '1' and '2' from the TattooMed sheet. Place onto the tattoo, leaving approximately an inch around the tattoo for potential leakage. Peel off sides labelled '3' and '4', smoothing out any air bubbles.",
        },
        {
          name: "Duration",
          description:
            "Leave the new sheet on for up to 5 days, removing it in the same manner as initially done.",
        },
        {
          name: "Post-Film Care",
          description:
            "After removal of the film, continue to moisturise the tattoo with recommended aftercare creams such as Palmers Cocoa Butter, Hustle Butter, or Bepanthen.",
        },
      ],
      important: [
        {
          name: "Reaction to Tattoo Film",
          description:
            "If you experience a reaction to the tattoo film, remove it in the shower and revert to the standard cling film aftercare method.",
        },
      ],
    },
    {
      name: "Alternative solutions",
      href: "/tattoo-aftercare/alternative-solutions",
      resume: "Lorem ips um dolor sit amet, consectetur adipiscing elit.",
      instructions: [
        {
          name: "Initial Removal",
          description:
            "The morning after receiving your tattoo, remove the film in the shower using lukewarm water. Gently peel it off.",
        },
        {
          name: "Cleaning and Drying",
          description:
            "Gently wash away plasma and ink and pat dry with a clean, unused towel.",
        },
        {
          name: "New Sheet Application",
          description:
            "Peel off sides labelled '1' and '2' from the TattooMed sheet. Place onto the tattoo, leaving approximately an inch around the tattoo for potential leakage. Peel off sides labelled '3' and '4', smoothing out any air bubbles.",
        },
        {
          name: "Duration",
          description:
            "Leave the new sheet on for up to 5 days, removing it in the same manner as initially done.",
        },
        {
          name: "Post-Film Care",
          description:
            "After removal of the film, continue to moisturise the tattoo with recommended aftercare creams such as Palmers Cocoa Butter, Hustle Butter, or Bepanthen.",
        },
      ],
      important: [
        {
          name: "Reaction to Tattoo Film",
          description:
            "If you experience a reaction to the tattoo film, remove it in the shower and revert to the standard cling film aftercare method.",
        },
      ],
    },
  ];

  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[9]} />
      <PageHeader
        title="Tattoo aftercare"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
      <div className="relative z-20 margin-x margin-y flex flex-col items-center justify-center gap-20">
        <div className="w-full grid gap-10 grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
          {tattooAftercare.map((item, i) => (
            <div
              key={i}
              className={`group w-full ${
                i === 2 ? "max-lg:col-span-2" : "col-span-1"
              }`}
            >
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center gap-4 text-center px-6 py-12 border border-neutral-500 hover:border-neutral-400 bg-neutral-600/10 hover:bg-neutral-600/20 my-transition hover:scale-95"
              >
                <Image
                  src="/Icon example.svg"
                  width={200}
                  height={200}
                  alt="Tattoo icon"
                  className="h-20 w-auto"
                />
                <h6 className="font-bold my-transition">{item.name}</h6>
                <p>{item.resume}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
