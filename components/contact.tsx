"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { ContactCard } from './contact-button';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.65);

  return ( 
  <section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28'>
    <SectionHeading>Contact me</SectionHeading>
    <p className='text-gray-700 -mt-6'>
        Please contact me at <a className='underline' href="mailto:w.rapacz@protonmail.com">w.rapacz@protonmail.com</a> or by using code below.
    </p>
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start justify-center mx-auto p-2 h-[30rem]">
    <ContactCard className='mt-10' text="contact" email='w.rapacz@protonmail.com'/>
    </div>

  </section>
  )
}
