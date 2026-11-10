"use client";

import { useRef, useState } from "react";
import { Bars3Icon, CpuChipIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import LoadingBar from "./loading-bar";
import MobileMenu from "./mobile-menu";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  return (
    <>
      <LoadingBar />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173044] bg-[#04101a]/95 backdrop-blur-md">
        <div className="site-container flex h-16 items-center justify-between sm:h-[72px]">
          <a href="#home" className="flex items-center gap-3" aria-label="Zohaib Ali Arif — home">
            <CpuChipIcon className="h-7 w-7 text-[#2790ff] sm:h-8 sm:w-8" aria-hidden="true" />
            <span className="text-base font-bold tracking-[0.08em] text-white sm:text-lg">
              ZOHAIB <span className="text-[#2790ff]">ALI ARIF</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex items-center gap-7" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-[#b7c4ce] transition-colors hover:text-white">
                  {item.name}
                </a>
              ))}
            </nav>
            <span className="h-6 w-px bg-[#294459]" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/zohaib-ali-arif-pk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#dbe6ef] transition-colors hover:text-[#2790ff]"
            >
              <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Zohaib-Ali-Arif"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-[#dbe6ef] transition-colors hover:text-[#2790ff]"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="grid min-h-11 min-w-11 place-items-center rounded-md text-[#dbe6ef] hover:bg-[#102230] lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={closeMenu} navItems={navItems} />
    </>
  );
}
