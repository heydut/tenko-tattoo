import HomeAbout from "./home/components/HomeAbout";
import HomeCTASocial from "./home/components/HomeCTASocial";
import HomeHero from "./home/components/HomeHero";
import HomeServices from "./home/components/HomeServices";
import HomeTeam from "./home/components/HomeTeam";
import HomeTestimonial from "./home/components/HomeTestimonial";
import HomeVideo from "./home/components/HomeVideo";

// ✨ //////////////////////////////

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeTeam />
      <HomeVideo />
      <HomeTestimonial />
      <HomeCTASocial />
    </main>
  );
}
