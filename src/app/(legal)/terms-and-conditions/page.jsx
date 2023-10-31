import PageBackground from "@/components/UI/PageBackground";
import PageHeader from "@/components/UI/PageHeader";
import { DataBackgrounds } from "@/data/DataBackgrounds";

// ✨ //////////////////////////////

export const metadata = {
  title: "Terms and conditions | Tenko Tattoo",
  description:
    "Here you can find more about our terms and conditions. We are a tattoo studio based in Preston, UK.",
};

// ✨ //////////////////////////////

export default function TermsAndConditions() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[10]} />
      <PageHeader
        title="Terms and conditions"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptatem voluptate quos dolorum quae voluptatibus quas."
      />
    </main>
  );
}
