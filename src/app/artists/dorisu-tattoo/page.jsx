import Btn from "@/components/UI/Btn";
import ArtistInstagramFeed from "./components/ArtistInstagramFeed";
import { DataArtist } from "@/data/DataArtist";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import "../../snow.css";
import SnowBackground from "./components/SnowBackground";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

// ✨ //////////////////////////////

export const metadata = {
  title: "Meet Dorisu Tattoo ✨",
  description:
    "Find more about Dorisu Tattoo, an artist from Tenko Tattoo | We are a Tatto Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function DorisuTattoo() {
  const doris = DataArtist[0];
  return (
    <main>
      <SnowBackground />

      <div className="relative z-10 margin-x pb-24 max-sm:pb-16 space-y-20">
        <div className="flex flex-col items-start">
          <Link
            href="/artists"
            className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 my-transition mt-4"
          >
            <ArrowLeftIcon className="text-neutral-400 h-4 w-auto" />
            <p className="">Back to all artists page</p>
          </Link>
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
                  />
                  <div className="absolute h-[40%] w-auto mx-auto aspect-square bg-[#ed028c] rounded-full blur-[100px] animate-pulse" />
                </div>
              </div>
              <div
                data-aos="zoom-out-down"
                className="flex gap-4 max-lg:order-4"
              >
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
                culture-inspired, and neo-traditional designs, she adds a
                distinct touch to our Preston-based studio. Beyond her work at
                Tenko, DorisuTattoo is a popular guest at esteemed studios
                throughout the UK, with ambitions to take her distinctive
                designs all around the world.
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
                <span
                  data-aos="fade-right"
                  className="absolute -bottom-6 -left-4"
                >
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
        </div>
        <div className="">
          {/* <ArtistInstagramFeed /> */}
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-3df43858-5983-4dcd-9237-e64f98bd6594"
            data-elfsight-app-lazy
          ></div>
          <div className="w-full flex justify-between mt-8">
            <Link
              href={doris.instagramURL}
              target="_blank"
              className="flex items-center gap-4"
            >
              <Image
                src="/images/Instagram logo.webp"
                width={50}
                height={50}
                alt="Instagram logo"
                className="h-12 w-auto"
              />
              <p className="doris text-4xl hover:text-neutral-300 my-transition">
                {doris.instagram}
              </p>
            </Link>
            <Btn
              text="Follow me"
              href={doris.instagramURL}
              target="blank_"
              outline
            />
          </div>
        </div>
      </div>
    </main>
  );
}
