import { CpuChipIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="border-t border-[#173044] bg-[#030b12] py-7">
      <div className="site-container flex flex-col items-center gap-3 text-center text-sm text-[#7f919f] sm:flex-row sm:justify-between sm:text-left">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-[#b8c7d2] hover:text-white">
          <CpuChipIcon className="h-5 w-5 text-[#2790ff]" aria-hidden="true" />
          Zohaib Ali Arif
        </a>
        <p>Embedded hardware · PCB design · Firmware</p>
        <p>© {new Date().getFullYear()} Zohaib Ali Arif</p>
      </div>
    </footer>
  );
}
