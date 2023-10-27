"use client";
import Btn from "@/components/UI/Btn";
import { Accordion, AccordionItem } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function ContactFAQ() {
  const FAQ = [
    {
      id: 1,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by contacting us via email, phone or social media. We require a deposit to secure your appointment. This can be paid in person or via bank transfer. Please note that deposits are non-refundable. If you need to reschedule your appointment, please let us know at least 48 hours in advance. If you do not show up to your appointment, you will lose your deposit and will be required to pay another deposit to secure another appointment.",
    },
    {
      id: 2,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by contacting us via email, phone or social media. We require a deposit to secure your appointment. This can be paid in person or via bank transfer. Please note that deposits are non-refundable. If you need to reschedule your appointment, please let us know at least 48 hours in advance. If you do not show up to your appointment, you will lose your deposit and will be required to pay another deposit to secure another appointment.",
    },
    {
      id: 3,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by contacting us via email, phone or social media. We require a deposit to secure your appointment. This can be paid in person or via bank transfer. Please note that deposits are non-refundable. If you need to reschedule your appointment, please let us know at least 48 hours in advance. If you do not show up to your appointment, you will lose your deposit and will be required to pay another deposit to secure another appointment.",
    },
  ];

  return (
    <main className="margin-x margin-y flex flex-col items-center justify-center">
      <h1>Frequently Asked Questions</h1>

      <Accordion
        defaultExpandedKeys={["1"]}
        variant="splitted"
        itemClasses={{
          indicator: "text-large",
          variant: {
            splitted: "bg-transparent border-none",
          },
        }}
      >
        {FAQ.slice(0, 3).map((item) => (
          <AccordionItem
            key={item.id}
            aria-label="Accordion 1"
            title={<h5>{item.question}</h5>}
          >
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>

      <Btn text="More FAQ" href="/faq" />
    </main>
  );
}
