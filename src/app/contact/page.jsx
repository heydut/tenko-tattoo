import ContactFAQ from "./components/ContactFAQ";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import ContactWorkingHours from "./components/ContactWorkingHours";

// ✨ //////////////////////////////

export default function Contact() {
  return (
    <main>
      Contact
      <ContactForm />
      <ContactWorkingHours />
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
