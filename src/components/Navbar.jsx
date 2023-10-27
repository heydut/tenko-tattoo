"use client";
import Link from "next/link";
import Btn from "./UI/Btn";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

// ✨ //////////////////////////////

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Enquiries", href: "#" },
    { name: "About our studio", href: "/about" },
    { name: "Tattoo aftercare", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    // <Navbar shouldHideOnScroll className="bg-[#333132]/30" maxWidth="full">
    //   <NavbarContent className="margin-x">
    //     <NavbarItem className="flex items-center gap-10">
    //       <Link
    //         href="/"
    //         className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         href="/artists"
    //         className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
    //       >
    //         Artists
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem className="flex items-center gap-10 w-full justify-end">
    //       <Link
    //         href="/contact"
    //         className="font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
    //       >
    //         Contact
    //       </Link>
    //       <Btn text="ENQUIRIES" href="/enquiries" />
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>

    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#333132]/30 "
      shouldHideOnScroll
      maxWidth="full"
    >
      <NavbarContent className="px-8 mx-auto max-w-7xl max-xl:px-0">
        <NavbarItem className="flex items-center gap-10">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white h-12 w-12 -ml-2"
          />
          <Link
            href="/"
            className="max-md:hidden font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Home
          </Link>
          <Link
            href="/artists"
            className="max-md:hidden font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Artists
          </Link>
        </NavbarItem>
        <NavbarItem className="flex items-center gap-10 w-full justify-end">
          <Link
            href="/contact"
            className="max-md:hidden font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
          >
            Contact
          </Link>
          <Btn text="ENQUIRIES" href="/enquiries" />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#333132]/30">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`} className="pb-3">
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full font-title uppercase font-semibold tracking-wide text-neutral-100  hover:text-[#ed028c] my-transition"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
