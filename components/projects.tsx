"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowTopRightOnSquareIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { projects } from "@/config/projects";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const project = projects[active];
  const number = (index: number) => String(index + 1).padStart(2, "0");

  const select = useCallback((index: number) => {
    const next = (index + projects.length) % projects.length;
    activeRef.current = next;
    setActive(next);
    setDetailsOpen(false);
    spotlightRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;
    let distance = 0, lastEvent = 0, lockedUntil = 0;
    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 650px) and (hover: hover) and (pointer: fine)");
    const reset = () => { distance = 0; lastEvent = 0; lockedUntil = 0; };
    const wheel = (event: WheelEvent) => {
      if (!desktop.matches || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;
      if (event.target instanceof Element && event.target.closest('.project-detail-panel')) return;
      const bounds = showcase.getBoundingClientRect();
      // Let the page bring the showcase into view before taking over.
      if (bounds.top > 160 || bounds.bottom < innerHeight * 0.65) return;
      const panel = spotlightRef.current;
      const direction = Math.sign(event.deltaY);
      // Expanded descriptions must remain readable before changing projects.
      if (panel && ((direction > 0 && panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2) || (direction < 0 && panel.scrollTop > 2))) return;
      const now = performance.now();
      if (now < lockedUntil) { event.preventDefault(); lastEvent = now; return; }
      const next = activeRef.current + direction;
      // Release the page at either end; there is no scroll trap or wraparound.
      if (next < 0 || next >= projects.length) { reset(); return; }
      event.preventDefault();
      if (Math.abs(bounds.top - 84) > 2) window.scrollBy({ top: bounds.top - 84, behavior: "instant" });
      if (now - lastEvent > 180 || Math.sign(distance) !== direction) distance = 0;
      lastEvent = now;
      distance += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      if (Math.abs(distance) < 80) return;
      distance = 0;
      lockedUntil = now + 550;
      select(next);
    };
    showcase.addEventListener("wheel", wheel, { passive: false });
    showcase.addEventListener("pointerleave", reset);
    return () => { showcase.removeEventListener("wheel", wheel); showcase.removeEventListener("pointerleave", reset); };
  }, [select]);

  return (
    <section id="work" className="section-shell border-b border-[#173044] bg-[#04101a]">
      <div className="site-container">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Explore the engineering.</h2>
        <p className="section-copy">
          From power conversion to secure devices. Explore the hardware, firmware, and engineering decisions behind each project.
        </p>

        <div ref={showcaseRef} className="project-showcase mt-9 sm:mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#294459] px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#b4c9d8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6ac9ff]" aria-hidden="true" />
              Engineering portfolio
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => select(active - 1)} aria-label="Previous project" className="project-arrow"><ChevronLeftIcon className="h-4 w-4" aria-hidden="true" /></button>
              <button type="button" onClick={() => select(active + 1)} aria-label="Next project" className="project-arrow"><ChevronRightIcon className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          </div>
          <p className="project-scroll-hint border-b border-[#294459] px-6 py-2 text-xs leading-5 text-[#8fabbf]">Scroll over the project to explore. Move your pointer outside this panel to continue down the page.</p>

          <div className={`showcase-body min-w-0 ${detailsOpen ? "has-project-details" : ""}`}>
            <div ref={spotlightRef} id="project-spotlight" className="min-w-0" role="region" aria-label="Project showcase" tabIndex={0}>
              <p className="sr-only" role="status" aria-live="polite">{project.title}</p>
              <article key={project.title} className="project-stage min-w-0">
                <div className="project-visual">
                  <div className="project-image-caption"><span>Project illustration</span><span aria-hidden="true">{number(active)}</span></div>
                  <Image src={project.image} alt={`Concept illustration of ${project.title}`} width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 700px" style={{ width: "100%", height: "auto", objectFit: "contain" }} priority={active === 0} />
                </div>
                <div className="project-summary px-5 pb-7 pt-3 sm:px-8 sm:pb-9">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#62b9ff]">{project.eyebrow}</p>
                  <h3 className="mt-3 max-w-[22ch] text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-[75ch] text-sm leading-7 text-[#a9bdcc]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2" aria-label="Project technologies">
                    {project.technologies.map(technology => <span key={technology} className="border border-[#294459] bg-[#0b2030] px-2.5 py-1.5 text-[0.7rem] text-[#b3d2e8]">{technology}</span>)}
                  </div>
                  <button ref={detailsButtonRef} type="button" onClick={() => setDetailsOpen(!detailsOpen)} aria-expanded={detailsOpen} aria-controls="project-detail-panel" className="button-secondary mt-5">
                    {detailsOpen ? "Hide project details" : "More about this project"}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </div>
            <aside id="project-detail-panel" hidden={!detailsOpen} className="project-detail-panel" aria-labelledby="project-detail-heading" tabIndex={0} onKeyDown={event => {
              if (event.key === "Escape") { setDetailsOpen(false); detailsButtonRef.current?.focus(); }
            }}>
              <div className="flex items-start justify-between gap-3 border-b border-[#294459] pb-5">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#62b9ff]">Inside the project</p>
                  <h4 id="project-detail-heading" className="mt-3 text-xl font-bold leading-snug text-white">{project.title}</h4>
                </div>
                <button type="button" onClick={() => { setDetailsOpen(false); detailsButtonRef.current?.focus(); }} aria-label="Close project details" className="project-arrow shrink-0"><XMarkIcon className="h-5 w-5" aria-hidden="true" /></button>
              </div>
              <div className="mt-5 space-y-5 text-sm leading-7 text-[#afc1ce]">
                {project.details.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {project.highlights && <div className="mt-6 border-t border-[#294459] pt-5">
                <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-[#62b9ff]">Key contributions</h5>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#afc1ce]">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
              </div>}
            </aside>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="https://www.linkedin.com/in/zohaib-ali-arif-pk/" target="_blank" rel="noreferrer" className="button-secondary w-full sm:w-auto">
            Explore my LinkedIn profile
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
