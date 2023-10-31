import Image from "next/image";
import ContactFAQ from "./components/ContactFAQ";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import ContactWorkingHours from "./components/ContactWorkingHours";
import { DataBackgrounds } from "@/data/DataBackgrounds";
import PageHeader from "@/components/UI/PageHeader";
import PageBackground from "@/components/UI/PageBackground";

// ✨ //////////////////////////////

export const metadata = {
  title: "Get in Touch with Tenko Tattoo",
  description:
    "Have questions or ideas? Reach out to us through our contact page. We're here to make your tattoo experience extraordinary!",
};

// ✨ //////////////////////////////

export default function Contact() {
  return (
    <main className="relative">
      <PageBackground data={DataBackgrounds[0]} />
      <PageHeader
        title="Contact us"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book."
      />
      <ContactWorkingHours />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
