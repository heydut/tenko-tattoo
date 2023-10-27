"use client";
import Btn from "@/components/UI/Btn";
import { DataFAQ } from "@/data/DataFAQ";
import { Accordion, AccordionItem } from "@nextui-org/react";

// ✨ //////////////////////////////

export default function ContactFAQ() {
  return (
    <main className="margin-x margin-y flex max-md:flex-col items-start max-md:items-center justify-center gap-20">
      <div className="mt-4 flex flex-col max-md:items-center">
        <h3 className="font-bold">
          Frequently <br className="max-md:hidden" /> Asked{" "}
          <br className="max-md:hidden" />
          <span className="">Questions</span>
        </h3>
        <div className="h-1 w-20 mt-4 bg-[#ed028c] rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-10">
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
          {DataFAQ.slice(0, 3).map((item) => (
            <AccordionItem
              key={item.id}
              aria-label="Accordion 1"
              title={<h6 className="font-semibold">{item.question}</h6>}
            >
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
        <Btn text="More FAQs" href="/faq" />
      </div>
    </main>
  );
}
