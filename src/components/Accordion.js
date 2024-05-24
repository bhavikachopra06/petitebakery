import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "What are your bakery's operating hours?",
    desc: "Our bakery is open from 09:00 to 22:00 every Day",
  },
  {
    title: "Do you offer delivery services?",
    desc: "Yes, we offer delivery services. You can place your order online or contact us directly for more information.",
  },
  {
    title: "Can I place a custom cake order?",
    desc: "Absolutely! We specialize in custom cakes for birthdays, weddings, and other special occasions. Contact us to discuss your design and flavor preferences.",
  },
  {
    title: "Do you have options for customers with food allergies?",
    desc: "We take food allergies seriously. Please inform us of any allergies when placing your order, and we will do our best to accommodate your needs.",
  },
  {
    title: "How far in advance should I place my order?",
    desc: "We recommend placing orders for specialty items like custom cakes at least 2 Days in advance to ensure availability.",
  },
];

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (index === open) {
      setOpen(false);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="accordion_holder">
        <h1>Need Help? FAQ!</h1>
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          desc={item.desc}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
