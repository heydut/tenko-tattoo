import ComingSoon from "./ComingSoon";
// import HomeAbout from "./home/components/HomeAbout";
// import HomeCTASocial from "./home/components/HomeCTASocial";
// import HomeGallery from "./home/components/HomeGallery";
// import HomeHero from "./home/components/HomeHero";
// import HomeServices from "./home/components/HomeServices";
// import HomeTeam from "./home/components/HomeTeam";
// import HomeTestimonial from "./home/components/HomeTestimonial";
// import HomeVideo from "./home/components/HomeVideo";

// ✨ //////////////////////////////

export const metadata = {
  title: "Welcome to Tenko Tattoo",
  description: "Tenko Tattoo | We are a Tattoo Studio based in Preston, UK",
};

// ✨ //////////////////////////////

export default function Home() {
  return (
    <main>
      <ComingSoon />
      {/* <HomeHero />
      <HomeAbout />
      <HomeTeam />
      <HomeGallery />
      <HomeVideo />
      <HomeCTASocial /> */}
      {/* <HomeServices /> */}
      {/* <HomeTestimonial /> */}
    </main>
  );
}
