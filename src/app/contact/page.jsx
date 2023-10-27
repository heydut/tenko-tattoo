import ContactFAQ from "./components/ContactFAQ";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import ContactWorkingHours from "./components/ContactWorkingHours";

// ✨ //////////////////////////////

export const metadata = {
  title: "Get in Touch with Tenko Tattoo",
  description:
    "Have questions or ideas? Reach out to us through our contact page. We're here to make your tattoo experience extraordinary!",
};

// ✨ //////////////////////////////

export default function Contact() {
  return (
    <main>
      <div className="margin-x margin-y">
        Contact
        <ContactForm />
        <ContactWorkingHours />
        <ContactMap />
        <ContactFAQ />
      </div>
    </main>
  );
}
