import Btn from "@/components/UI/Btn";
import InstagramFeed from "./InstagramFeed";
import Gradient from "@/components/UI/Gradient";
import Image from "next/image";
import { DataStudio } from "@/data/DataStudio";
import PageHeader from "@/components/UI/PageHeader";
import Script from "next/script";
import { FaInstagram } from "react-icons/fa";

// ✨ //////////////////////////////

export default function HomeCTASocial() {
  return (
    <main>
      <section className="relative z-20 pt-24 max-sm:pt-16">
        {/* <Gradient left xl />
        <Image
          src="/placeholder.png"
          alt="Background image"
          width={1000}
          height={500}
          className="absolute z-0 w-full h-[100%] object-cover"
        /> */}
        <div className="margin-x pb-24 max-sm:pb-16 flex flex-col gap-20 ">
          <div className="w-full">
            <div className="relative z-20 flex flex-col items-center text-center gap-10">
              <div data-aos="zoom-in">
                <FaInstagram className="text-4xl text-[#ed028c]" />
              </div>
              <div data-aos="zoom-in" className="flex flex-col items-center">
                <h1>Follow us on Instagram</h1>

                <div className="h-1 w-20 mt-4 bg-[#ed028c]" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <Script
              src="https://static.elfsight.com/platform/platform.js"
              data-use-service-core
              defer
            />
            <div
              className="elfsight-app-3df43858-5983-4dcd-9237-e64f98bd6594"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </section>
      {/* <InstagramFeed /> */}
    </main>
  );
}
