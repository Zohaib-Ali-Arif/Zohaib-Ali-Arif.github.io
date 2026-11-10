import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    role: "Embedded Systems Engineer (Master’s Internship)",
    company: "Wise Integration",
    location: "Grenoble, France",
    period: "Feb 2026 – Aug 2026",
    points: [
      "Modified and validated 300 W GaN Totem-Pole PFC and LLC converters for AC/DC supplies achieving 97% peak efficiency.",
      "Adapted Embedded C control firmware and designed schematics and 4-layer Altium PCB layouts for two WI-7xx GaN power-stage daughter boards.",
      "Performed board bring-up and root-cause debugging on three GaN prototypes and customer boards; characterized efficiency and thermal performance across load and line conditions.",
    ],
  },
  {
    role: "Embedded Design Engineer",
    company: "CARE Pvt. Ltd.",
    location: "Islamabad, Pakistan",
    period: "Jul 2022 – Sep 2025",
    points: [
      "Owned hardware and firmware for Marvell-based Layer 2 managed switches, implementing VLAN and MAC binding and shipping three revisions to production.",
      "Collaborated on a 12-layer PCB carrying PCIe, USB 3.0, DDR3, and Ethernet, with controlled impedance, length-matched differential routing, and thermal optimization.",
      "Developed STM32 and PIC firmware for communications, sensors, audio, and motor drivers across three products; designed secure keyboard hardware using STM32/ESP32, AES-256, and logical Red/Black separation.",
      "Led the embedded hardware team on the DSCR system, coordinating design, production, field troubleshooting, and hardware and firmware updates.",
      "Developed custom test jigs and validation tools, and worked with PCB manufacturers to resolve production issues and verify manufacturing quality.",
    ],
  },
  {
    role: "Embedded Hardware R&D",
    company: "COMSATS University Islamabad · R&D Laboratory",
    location: "Islamabad, Pakistan",
    period: "2021 – 2022",
    points: [
      "Designed and assembled Arduino- and ESP32-based research prototypes, from circuit schematics and PCB layouts to Embedded C firmware.",
      "Performed signal and power measurements, hardware debugging, and system-level tests to deliver working prototypes for research and demonstrations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell border-b border-[#173044] bg-[#071521]">
      <div className="site-container grid gap-10 sm:gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="section-kicker">Professional experience</span>
          <h2 className="section-title">Engineering from design to deployment</h2>
          <p className="section-copy">
            Hardware and firmware development across networking, secure devices, and power electronics, supported by board-level testing, manufacturing collaboration, and field troubleshooting.
          </p>
          <div className="mt-7 flex w-full items-center gap-3 border border-[#294459] bg-[#0a1b28] p-4 text-sm leading-6 text-[#b9c8d3] sm:mt-8 sm:w-auto sm:inline-flex">
            <BriefcaseIcon className="h-6 w-6 text-[#2790ff]" aria-hidden="true" />
            Experience spans industrial R&amp;D and academic prototyping.
          </div>
        </div>

        <ol className="grid min-w-0 gap-4 md:block md:border-l md:border-[#31526e] md:pl-10">
          {experiences.map((experience) => (
            <li key={`${experience.company}-${experience.period}`} className="relative min-w-0 border border-[#294459] bg-[#091a27] p-5 md:border-0 md:bg-transparent md:p-0 md:pb-12 md:last:pb-0">
              <span className="absolute -left-[2.78rem] top-1 hidden h-3 w-3 rounded-full border-2 border-[#2790ff] bg-[#071521] md:block" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#2790ff]">{experience.period}</p>
              <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">{experience.role}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-[#b9d9f2]">{experience.company}</span>
                <span className="flex items-center gap-1 text-[#8093a1]">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {experience.points.map((point) => (
                  <li key={point} className="relative pl-5 text-sm leading-6 text-[#a6b4bf] before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-[#5e83a0]">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
