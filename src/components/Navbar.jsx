import Link from "next/link";
import Btn from "./UI/Btn";
import NavBanner from "./NavBanner";
import { Navbar, NavbarContent } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function MyNavbar() {
  return (
    <Navbar
      shouldHideOnScroll
      position="static"
      className="bg-[#333132]/80"
      maxWidth="full"
    >
      <NavbarContent className="margin-x">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Home
          </Link>
          <Link
            href="/artists"
            className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Artists
          </Link>
        </div>
        <div className="flex items-center gap-10 w-full justify-end">
          <Link
            href="/contact"
            className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Contact
          </Link>
          <Btn text="Book now" href="/booking" />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
