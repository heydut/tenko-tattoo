"use client";
import { NextUIProvider } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function NextUI({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
