import "./globals.css";
import "swiper/css";
import Footer from "@/components/Footer";

import MyNavbar from "@/components/Navbar";
import NextUI from "@/hooks/NextUI";
import NavBanner from "@/components/NavBanner";

export const metadata = {
  title: "Tenko Tattoo",
  description: "Tenko Tattoo | We are a Tatto Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#333132]">
        <NextUI>
          <NavBanner />
          <MyNavbar />
          {children}
          <Footer />
        </NextUI>
      </body>
    </html>
  );
}
