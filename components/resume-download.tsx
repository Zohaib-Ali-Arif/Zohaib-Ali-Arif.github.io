import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ResumeDownload({ className = "button-secondary" }: { className?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <a href="/Arif_Zohaib_Ali_Resume.pdf" download="Arif_Zohaib_Ali_Resume.pdf" className={className}>
        <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
        Download résumé
      </a>
      <a href="/Arif_Zohaib_Ali_Resume.pdf" target="_blank" rel="noreferrer" className="text-center text-xs text-[#9fb0bc] underline underline-offset-4 hover:text-white">Open PDF in a new tab</a>
    </div>
  );
}
