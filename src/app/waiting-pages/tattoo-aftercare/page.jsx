// import PageBackground from "@/components/UI/PageBackground";
// import PageHeader from "@/components/UI/PageHeader";
// import { DataAftercare } from "@/data/DataAftercare";
// import { DataBackgrounds } from "@/data/DataBackgrounds";
// import Image from "next/image";
// import Link from "next/link";

// // ✨ //////////////////////////////

// export const metadata = {
//   title: "Aftercare | Tenko Tattoo",
//   description:
//     "Is important to take care of your tattoo after getting it done. Here you can find more about the aftercare process and how to take care of your tattoo.",
// };

// // ✨ //////////////////////////////

// export default function TattooAftercare() {
//   return (
//     <main className="relative">
//       <PageBackground data={DataBackgrounds[9]} />
//       <PageHeader
//         title="Tattoo aftercare"
//         text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
//       />
//       <div className="relative z-20 margin-x flex flex-col items-center justify-center gap-20">
//         <div className="w-full grid gap-10 grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col">
//           {DataAftercare.map((item, i) => (
//             <div
//               data-aos="zoom-in-up"
//               key={i}
//               className={`group w-full ${
//                 i === 2 ? "max-lg:col-span-2" : "col-span-1"
//               }`}
//             >
//               <Link
//                 href={item.href}
//                 className="flex flex-col items-center justify-center gap-4 text-center px-6 py-12 border border-neutral-500 hover:border-neutral-400 bg-neutral-600/10 hover:bg-neutral-600/20 my-transition hover:scale-95"
//               >
//                 <Image
//                   src="/Icon example.svg"
//                   width={200}
//                   height={200}
//                   alt="Tattoo icon"
//                   className="h-20 w-auto"
//                 />
//                 <h6 className="font-bold my-transition">{item.name}</h6>
//                 <p>{item.resume}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <p
//         data-aos="zoom-in-up"
//         className="relative z-20 margin-x margin-y text-center"
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit
//         tellus mauris a diam maecenas sed. Varius quam quisque id diam vel quam.
//         Sed nisi lacus sed viverra. Nulla aliquet enim tortor at auctor urna
//         nunc id cursus. Varius sit amet mattis vulputate. Rhoncus urna neque
//         viverra justo nec ultrices dui sapien. Gravida in fermentum et
//         sollicitudin ac. Nisl nisi scelerisque eu ultrices vitae auctor.
//         Fermentum dui faucibus in ornare quam viverra. Imperdiet sed euismod
//         nisi porta lorem. Dignissim cras tincidunt lobortis feugiat vivamus at.
//         Sed enim ut sem viverra. Amet consectetur adipiscing elit duis tristique
//         sollicitudin nibh sit amet. Viverra aliquet eget sit amet tellus cras
//         adipiscing.
//       </p>
//     </main>
//   );
// }
