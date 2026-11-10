"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ProjectDetails({ title, details }: { title: string; details: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <div className="mt-5">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={detailsId}
        aria-label={`${expanded ? "Show less about" : "More about"} ${title}`}
        onClick={() => setExpanded(!expanded)}
        className="inline-flex min-h-11 items-center gap-2 border border-[#294459] bg-[#0b1d2a] px-3 py-2 text-left text-sm font-semibold text-[#2790ff] hover:border-[#2790ff] hover:text-[#7fc0ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fc0ff]"
      >
        {expanded ? "Show less" : "More about this project"}
        <ChevronDownIcon className={`h-4 w-4 shrink-0 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div id={detailsId} hidden={!expanded} className="mt-4 space-y-3 border-t border-[#294459] pt-4 text-sm leading-6 text-[#a9b6c0]">
        {details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  );
}
