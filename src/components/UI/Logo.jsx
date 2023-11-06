import Image from "next/image";
import Link from "next/link";

// ✨ //////////////////////////////

export default function Logo({ black, css }) {
  return (
    <main>
      <Link href="/">
        <Image
          src={
            black
              ? "/images/logos/Tenko SVG Black.svg"
              : "/images/logos/Tenko SVG White.svg"
          }
          alt="Tenko Tattoo Logo"
          width={400}
          height={400}
          className={`object-cover ${css} w-auto select-none`}
          draggable={false}
          priority
        />
      </Link>
    </main>
  );
}
