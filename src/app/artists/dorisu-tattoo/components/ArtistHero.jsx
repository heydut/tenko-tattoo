import Btn from "@/components/UI/Btn";
import { DataArtist } from "@/data/DataArtist";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

// ✨ //////////////////////////////

export default function ArtistHero() {
  const doris = DataArtist[0];
  return (
    <>
      <div className="w-full flex max-lg:flex-col items-center">
        <div className="max-lg:w-full max-lg:items-center max-lg:text-center w-1/2 flex flex-col items-start gap-10">
          <section data-aos="zoom-out-down" className="max-lg:hidden">
            <h5 className="text-[#ed028c] font-black mt-4">
              Cute and neo-traditional tattooist
            </h5>
          </section>
          <div
            data-aos="zoom-out-down"
            className="hidden max-lg:order-2 max-lg:mt-10 max-lg:flex w-full h-auto flex-col items-center gap-12"
          >
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/Doris1.png"
                width={500}
                height={700}
                alt="Doris picture"
                className="relative z-20 object-cover w-4/5 max-lg:w-full h-auto opacity-100"
                draggable={false}
              />
              <div className="absolute h-[40%] w-auto mx-auto aspect-square bg-[#ed028c] rounded-full blur-[100px] animate-pulse" />
            </div>
          </div>
          <div data-aos="zoom-out-down" className="flex gap-4 max-lg:order-4">
            <Btn
              href="#portofolio"
              icon={<FaInstagram className="h-4 w-auto" />}
              outline
            />
            <Btn
              href="#portofolio"
              icon={<FaFacebookSquare className="h-4 w-auto" />}
              outline
            />
          </div>
          <Image
            src="/images/logos/Dorisu (white).svg"
            width={500}
            height={500}
            alt="Dorisu Logo"
            data-aos="zoom-out-down"
            className="h-auto w-3/5 max-lg:w-2/4 max-sm:w-3/4 object-cover max-lg:order-3"
            draggable={false}
          />

          <p data-aos="zoom-out-up" className="max-lg:order-5">
            Meet{" "}
            <a
              href={doris.instagramURL}
              target="_blank"
              className="font-bold text-white hover:text-[#ed028c] my-transition"
            >
              @DorisuTattoo
            </a>
            , co-founder of Tenko Tattoo and a tattooist with 6 years of
            experience under her belt. With a focus on cute, pop
            culture-inspired, and neo-traditional designs, she adds a distinct
            touch to our Preston-based studio. Beyond her work at Tenko,
            DorisuTattoo is a popular guest at esteemed studios throughout the
            UK, with ambitions to take her distinctive designs all around the
            world.
          </p>

          <div data-aos="zoom-out-up" className="flex gap-4 max-lg:order-6">
            <Btn href="/enquiries" text="Book now" />
            <Btn href="/contact" text="Contact me" outline />
          </div>
        </div>
        <div className="max-lg:hidden w-1/2 h-auto flex flex-col items-center gap-6">
          <div
            data-aos="zoom-in-down"
            className="relative flex items-center justify-center"
          >
            <Image
              src="/images/Doris1.png"
              width={500}
              height={700}
              alt="Doris picture"
              className="relative z-20 object-cover w-full h-auto opacity-100"
              draggable={false}
              priority
            />
            <div className="absolute h-[40%] w-auto mx-auto aspect-square bg-[#ed028c] rounded-full blur-[100px] animate-pulse" />
          </div>
          <div className="relative">
            <h1 data-aos="zoom-in-up" className="doris text-6xl">
              Doris Lam
            </h1>
            <span data-aos="fade-left" className="absolute -right-6 top-0">
              ✨
            </span>
            <span data-aos="fade-right" className="absolute -bottom-6 -left-4">
              ✨
            </span>
            <span
              data-aos="fade-right"
              className="absolute bottom-0 -left-8 text-xl"
            >
              💖
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
