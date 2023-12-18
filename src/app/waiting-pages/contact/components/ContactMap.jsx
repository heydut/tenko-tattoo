import { DataStudio } from "@/data/DataStudio";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// ✨ //////////////////////////////

export default function ContactMap() {
  return (
    <div className="py-24 max-sm:py-16 max-md:pt-0 max-sm:pt-0">
      <main className="relative w-full border-t border-b border-neutral-500/50">
        <div
          data-aos="zoom-in-up"
          className="absolute z-10 w-1/2 max-md:w-full h-full max-md:h-96 top-0 left-0 max-md:bottom-0 max-md:top-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.737578041351!2d-2.7039709999999997!3d53.758555699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b727afa2e7683%3A0xc3969a5205dc2182!2s4-6%2C%204-6%20Fox%20St%2C%20Preston%20PR1%202AB!5e0!3m2!1sen!2suk!4v1698746571582!5m2!1sen!2suk"
            width="100%"
            allowFullScreenreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full max-md:h-96"
          />
        </div>
        <div
          data-aos="zoom-in-up"
          className="flex max-md:flex-col-reverse margin-x margin-y"
        >
          <div className="w-1/2 max-md:w-full max-md:h-96"></div>
          <div className="w-1/2 max-md:w-full pl-20 pr-10 max-lg:pl-10 max-lg:pr-5 max-md:pr-0 max-md:pl-0 space-y-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Get in touch</h2>
              <div className="h-1 w-20 mt-4 bg-[#ed028c]" />
            </div>
            <p className="">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="space-y-4 text-base leading-7 text-neutral-600">
              <div className="flex  gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-neutral-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd className="font-sans text-neutral-400 leading-8">
                  {DataStudio.street}, <br />
                  {DataStudio.city}, {DataStudio.postcode}
                </dd>
              </div>
              <div className="flex items-center gap-x-4 group">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-neutral-400 group-hover:text-white my-transition"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="font-sans text-neutral-400 leading-8 group-hover:text-white my-transition"
                    href="tel:+1 (555) 234-5678"
                  >
                    {DataStudio.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-x-4 group">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-neutral-400 group-hover:text-white my-transition"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="font-sans leading-8 text-neutral-400 group-hover:text-white my-transition"
                    href="mailto:hello@example.com"
                  >
                    {DataStudio.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  );
}
