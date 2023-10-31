"use client";
import { DataFAQ } from "@/data/DataFAQ";
import { Accordion, AccordionItem } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function FAQAccordion() {
  return (
    <div className="flex items-start max-lg:flex-col gap-20 max-lg:gap-0">
      {" "}
      <Accordion
        defaultExpandedKeys={["1"]}
        itemClasses={{
          indicator: "text-large",
          variant: {
            splitted: "bg-transparent border-none",
          },
        }}
      >
        {DataFAQ.slice(0, 5).map((item) => (
          <AccordionItem
            key={item.id}
            aria-label="Accordion 1"
            title={<h6 className="font-semibold">{item.question}</h6>}
          >
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion
        itemClasses={{
          indicator: "text-large",
          variant: {
            splitted: "bg-transparent border-none",
          },
        }}
      >
        {DataFAQ.slice(0, 5).map((item) => (
          <AccordionItem
            key={item.id}
            aria-label="Accordion 1"
            title={<h6 className="font-semibold">{item.question}</h6>}
          >
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
