// import Image from "next/image";
// import BookingForm from "./components/BookingForm";
// import PageHeader from "@/components/UI/PageHeader";
// import { DataBackgrounds } from "@/data/DataBackgrounds";
// import PageBackground from "@/components/UI/PageBackground";

// // ✨ //////////////////////////////

// export const enquiriesMetadata = {
//   title: "Enquiries | Tenko Tattoo",
//   description:
//     "Have questions, ideas, or ready to book your tattoo session? Reach out to us through our enquiries page. We're here to guide you through an extraordinary tattoo experience at Tenko!",
// };

// // ✨ //////////////////////////////

// export default function Booking() {
//   return (
//     <main className="relative">
//       <PageBackground data={DataBackgrounds[2]} />
//       <PageHeader
//         title="Enquiries"
//         text=" Want a tattoo that's as unique as you are? Our artists are set to
//           bring your ideas to life. Get in touch today, and let's get this ink
//           party started!"
//       />

//       <div className="absolute -z-10 flex ">
//         <div className="w-[50vw]" />
//         <Image
//           src="/placeholder.png"
//           alt="Background image"
//           width={1000}
//           height={500}
//           className="w-[50vw] h-[100vh] object-cover"
//         />
//       </div>
//       <section
//         data-aos="zoom-in-up"
//         className="relative z-30 margin-x pb-24 max-sm:pb-16"
//       >
//         <BookingForm />
//       </section>
//     </main>
//   );
// }
