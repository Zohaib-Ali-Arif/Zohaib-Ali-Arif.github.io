"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 650);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 z-40 grid h-11 w-11 place-items-center border border-[#31526e] bg-[#071521] text-[#eaf1f6] shadow-xl hover:border-[#2790ff] hover:text-[#2790ff] sm:bottom-5 sm:right-5 sm:h-12 sm:w-12"
    >
      <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
