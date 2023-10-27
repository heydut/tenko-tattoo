"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

// ✨ //////////////////////////////

export default function NavBanner() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="relative z-50 group flex items-center gap-x-6 bg-[#ed028c] hover:bg-white px-6 py-2.5 before:flex-1 my-transition">
          <a
            href="/contact"
            className="text-sm font-title uppercase font-bold tracking-wider text-neutral-100  group-hover:text-[#ed028c] my-transition"
          >
            Book a free consultation
            <span aria-hidden="true" className="ml-4">
              &rarr;
            </span>
          </a>

          <div className="flex flex-1 justify-end">
            <button type="button" onClick={() => setShow(!show)}>
              <XMarkIcon
                className="h-5 w-5 text-white group-hover:text-[#ed028c]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
