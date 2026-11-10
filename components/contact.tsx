"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("zohaibaliarif.pk@gmail.com");
      setCopyStatus("Email address copied.");
    } catch {
      setCopyStatus("Copy this address: zohaibaliarif.pk@gmail.com");
    }
  }
  return (
    <section id="contact" className="section-shell bg-[#04101a]">
      <div className="site-container">
        <div className="border border-[#234157] bg-[#071521] px-5 py-8 sm:px-10 sm:py-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-14 lg:py-14">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Let’s discuss your next embedded project.</h2>
            <p className="section-copy">
              Hiring for an embedded hardware or firmware role? I’m looking for a full-time opportunity to contribute across circuit design, PCB development, and firmware integration. Based in Grenoble, France, and open to relocation.
            </p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zohaibaliarif.pk%40gmail.com" target="_blank" rel="noreferrer" className="button-primary mt-7 w-full sm:w-auto">
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              Write in Gmail
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <a href="mailto:zohaibaliarif.pk@gmail.com" className="inline-flex min-h-11 items-center text-[#7fc0ff] underline underline-offset-4">Use my email app</a>
              <button type="button" onClick={copyEmail} className="button-secondary">Copy email address</button>
            </div>
            <p role="status" aria-live="polite" className="mt-2 text-sm text-[#bdcbd5]">{copyStatus}</p>
          </div>

          <address className="mt-10 space-y-4 border-t border-[#294459] pt-7 not-italic lg:mt-0 lg:min-w-[300px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <a href="mailto:zohaibaliarif.pk@gmail.com" className="flex min-w-0 items-center gap-3 text-sm text-[#bdcbd5] hover:text-white">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              <span className="break-all">zohaibaliarif.pk@gmail.com</span>
            </a>
            <a href="tel:+33759949586" className="flex items-center gap-3 text-sm text-[#bdcbd5] hover:text-white">
              <PhoneIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              +33 7 59 94 95 86
            </a>
            <p className="flex items-center gap-3 text-sm text-[#bdcbd5]">
              <MapPinIcon className="h-5 w-5 shrink-0 text-[#2790ff]" aria-hidden="true" />
              Grenoble, France
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/zohaib-ali-arif-pk" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center border border-[#31526e] text-[#dce7ef] hover:border-[#2790ff] hover:text-[#2790ff]">
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://github.com/Zohaib-Ali-Arif" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center border border-[#31526e] text-[#dce7ef] hover:border-[#2790ff] hover:text-[#2790ff]">
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
