"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { ContactCard } from "./contact-button";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.65);

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me at{" "}
        <span className="group relative inline-block">
          <a
            href="mailto:w.rapacz@protonmail.com"
            className="relative z-10 font-semibold text-gray-700"
          >
            w.rapacz@protonmail.com
          </a>
          <span
            className="
            absolute
            bottom-0
            left-0
            w-full
            h-[3px]
            bg-green-300
            transition-all
            duration-300
            ease-out
            group-hover:h-full
        "
          ></span>
        </span>{" "}
        or by using code below.
      </p>
      <div className="flex flex-col items-start justify-center mx-auto p-2 cursor-pointer mt-10">
        <ContactCard text="contact" email="w.rapacz@protonmail.com" />
      </div>
    </section>
  );
}
