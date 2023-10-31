// ✨ //////////////////////////////

import Link from "next/link";
import Logo from "./UI/Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { DataStudio } from "@/data/DataStudio";

const navigation = {
  studio: [
    { name: "About our studio", href: "/about" },
    { name: "Enquiries", href: "/enquiries" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  artists: [
    { name: "DorisuTattoo", href: "/artists/dorisu-tattoo" },
    { name: "Join our team", href: "/join-our-team" },
  ],
  important: [
    { name: "Tattoo aftercare", href: "/tattoo-aftercare" },
    { name: "Terms & conditions", href: "/terms-and-conditions" },
    { name: "Cookies policy", href: "/cookies-policy" },
  ],

  social: [
    {
      name: "Facebook",
      href: DataStudio.facebookURL,
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: DataStudio.instagramURL,
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-50 bg-neutral-900">
      <div className="margin-x pt-14 pb-7">
        <div className="flex items-start max-md:flex-col max-md:items-center max-md:gap-16 ">
          <div className="">
            <Logo css="h-auto lg:w-44 max-lg:w-32" />
          </div>
          <div className="w-full flex max-sm:flex-wrap items-start justify-end max-sm:justify-start gap-10 max-sm:gap-x-0 max-sm:gap-y-10 max-md:justify-around">
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="font-title uppercase font-bold tracking-wider text-sm  text-[#ed028c] my-transition">
                Studio
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.studio.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm tracking-wider text-neutral-500 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="font-title uppercase font-bold tracking-wider text-sm  text-[#ed028c] my-transition">
                Artists
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.artists.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm tracking-wider text-neutral-500 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-36 max-sm:w-1/2 max-sm:text-center">
              <h3 className="font-title uppercase font-bold tracking-wider text-sm  text-[#ed028c] my-transition">
                Information
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.important.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm tracking-wider text-neutral-500 hover:text-neutral-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:gap-8 mt-8 border-t border-neutral-200/10 pt-8 select-none">
          <p className="text-xs text-neutral-300 font-light tracking-wider">
            &copy; {new Date().getFullYear()} Tenko Tattoo. All rights reserved.
          </p>
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-neutral-300 hover:text-[#ed028c] my-transition"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
