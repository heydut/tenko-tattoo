import Image from "next/image";
import BookingForm from "./components/BookingForm";

// ✨ //////////////////////////////

export default function Booking() {
  return (
    <main className="relative">
      <div className="margin-x margin-y flex flex-col items-center">
        <h1>Get in touch today</h1>
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
