import Image from "next/image";
import BookingForm from "./components/BookingForm";

// ✨ //////////////////////////////

export default function Booking() {
  return (
    <main className="relative">
      <div className="absolute z-0 w-full -mt-16">
        <Image
          src="/Tattoo Studio/1.png"
          alt="Background image"
          width={1000}
          height={500}
          className="w-full h-[56rem] object-cover opacity-40"
          draggable={false}
        />
        <div className="absolute top-0 left-0 z-10 w-full h-[56rem] bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>

      <div className="relative z-20 margin-x margin-y flex flex-col items-center gap-10">
        <div className="mt-4 flex flex-col items-center text-center">
          <h1>Enquiries</h1>
          <div className="h-1 w-20 mt-4 bg-[#ed028c] rounded-full" />
        </div>
        <p className="w-1/2 text-center">
          Want a tattoo that's as unique as you are? Our artists are set to
          bring your ideas to life. Get in touch today, and let's get this ink
          party started!
        </p>
      </div>
      <div className="absolute -z-10 flex ">
        <div className="w-[50vw]" />
        <Image
          src="/placeholder.png"
          alt="Background image"
          width={1000}
          height={500}
          className="w-[50vw] h-[100vh] object-cover"
        />
      </div>
      <section className="margin-x margin-y">
        <BookingForm />
      </section>
    </main>
  );
}
