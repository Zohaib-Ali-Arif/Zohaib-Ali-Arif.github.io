import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  EnvelopeIcon,
  MapPinIcon,
  SignalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import EngineerAvatar from "./engineer-avatar";
import ResumeDownload from "./resume-download";
import EngineeringScene from "./engineering-scene";

const capabilities = [
  { label: "STM32 / PIC", detail: "Embedded C firmware", icon: CpuChipIcon },
  { label: "High-speed PCB", detail: "Up to 12 layers", icon: SignalIcon },
  { label: "GaN Power", detail: "PFC & LLC converters", icon: CubeTransparentIcon },
  { label: "Altium Designer", detail: "Schematic to layout", icon: Squares2X2Icon },
];

const profileHighlights = [
  {
    label: "Based in",
    value: "Grenoble, France",
    icon: MapPinIcon,
  },
  {
    label: "Education",
    value: "Master’s in Embedded Systems Security",
    icon: AcademicCapIcon,
  },
  {
    label: "Core expertise",
    value: "Hardware · Firmware · Power",
    icon: CpuChipIcon,
  },
  {
    label: "Opportunities",
    value: "Full-time roles · Open to relocation",
    icon: BriefcaseIcon,
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-motion relative isolate overflow-hidden border-b border-[#173044] bg-[#06131e] pt-16 sm:pt-[72px]">
      <EngineeringScene />
      <div className="site-container relative py-11 sm:py-14 lg:py-16">
        <div className="grid min-w-0 items-center gap-10 lg:min-h-[470px] lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2790ff]">
                Embedded hardware · PCB design · Firmware
              </p>
              <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#9fb1bd]">
                <span className="h-2 w-2 rounded-full bg-[#49d597]" aria-hidden="true" />
                Open to opportunities
              </p>
            </div>

            <h1 className="mt-6 max-w-full break-words text-[clamp(3rem,14vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.065em] text-white sm:text-[clamp(3.5rem,9vw,7.5rem)]">
              Zohaib Ali Arif
            </h1>
            <p className="mt-7 text-xl font-semibold leading-snug text-[#eef4f8] sm:text-2xl">
              Embedded Systems Engineer
              <span className="block text-[#7fc0ff]">Hardware, PCB Design &amp; Firmware</span>
            </p>
            <p className="mt-4 max-w-[58ch] text-base leading-7 text-[#a8b6c1]">
              I design embedded hardware and the firmware that runs on it. With 3+ years of experience across multilayer PCBs, Ethernet systems, and GaN power converters, I take designs through board bring-up, validation, and production.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start">
              <a href="#work" className="button-primary">
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                View selected work
              </a>
              <ResumeDownload />
              <a href="#contact" className="button-secondary">
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                Contact me
              </a>
            </div>
          </div>

          <div className="profile-motion min-w-0 border border-[#294459] bg-[#071521] p-5 sm:p-6">
            <div className="flex flex-col items-center gap-5 border-b border-[#294459] pb-5">
              <EngineerAvatar size={224} />
              <div className="text-center">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#2790ff]">Engineering profile</p>
                <p className="mt-1 text-sm text-[#899ba8]">3+ years in hardware and firmware</p>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-3 pt-4 min-[380px]:grid-cols-2 lg:block lg:divide-y lg:divide-[#1f3a4e] lg:pt-0">
            {profileHighlights.map(({ label, value, icon: Icon }) => (
              <div key={label} className="grid min-w-0 grid-cols-[1.25rem_minmax(0,1fr)] gap-x-2.5 border border-[#1f3a4e] bg-[#091a27] p-3.5 lg:grid-cols-[1.5rem_1fr] lg:gap-x-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-3.5">
                <Icon className="mt-0.5 h-5 w-5 text-[#2790ff]" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#708797]">{label}</dt>
                  <dd className="mt-1 break-words text-sm font-semibold leading-5 text-[#dce6ee]">{value}</dd>
                </div>
              </div>
            ))}
            </dl>
          </div>
        </div>

        <ul className="mt-10 grid border-l border-t border-[#1f3a4e] sm:grid-cols-2 lg:mt-12 lg:grid-cols-4" aria-label="Core technologies">
          {capabilities.map(({ label, detail, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3 border-b border-r border-[#1f3a4e] px-4 py-3.5 sm:px-5">
              <Icon className="h-5 w-5 shrink-0 text-[#73b7f7]" aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-[#e1eaf1]">{label}</span>
                <span className="mt-0.5 block text-xs text-[#7f929f]">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
