import PageBackground from "@/components/UI/PageBackground";
import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";

// ✨ //////////////////////////////

export const metadata = {
  title: "Cookies policy | Tenko Tattoo",
  description:
    "Here you can find more about our cookies policy. We are a tattoo studio based in Preston, UK.",
};

// ✨ //////////////////////////////

export default function CookiesAndPolicies() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[11]} />
      <PageHeader
        title="Cookies policy"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
    </main>
  );
}
