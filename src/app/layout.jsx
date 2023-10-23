import "./globals.css";

export const metadata = {
  title: "Tenko Tattoo",
  description: "Tenko Tattoo | We are a Tatto Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
