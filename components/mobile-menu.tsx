"use client";

import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        aria-label="Close navigation menu"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(86vw,320px)] flex-col border-l border-[#233b4d] bg-[#071521] p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#233b4d] pb-5">
          <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#2790ff]">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="grid min-h-11 min-w-11 place-items-center rounded-md text-[#c5d1db] hover:bg-[#102230]"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="border-b border-[#152a39] py-4 text-lg font-medium text-[#dce6ee] hover:text-[#2790ff]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
