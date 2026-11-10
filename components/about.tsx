import { AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ResumeDownload from "./resume-download";

const education = [
  {
    degree: "International Master in Embedded Systems Security",
    school: "Grenoble INP – Esisar, Valence, France",
    period: "2025 – 2026",
  },
  {
    degree: "B.S. Electrical & Electronics Engineering",
    school: "COMSATS University Islamabad",
    period: "2018 – 2022",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell border-b border-[#173044] bg-[#071521]">
      <div className="site-container grid gap-11 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <span className="section-kicker">About</span>
          <h2 className="section-title">Hardware and firmware, developed together</h2>
          <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-[#a9b6c0] sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              My work connects circuit design, PCB layout, and Embedded C development. At CARE, I worked on managed Ethernet switches, secure devices, and microcontroller-based products. At Wise Integration, I applied that experience to GaN power converters and digital control.
            </p>
            <p>
              I enjoy the practical work of turning a design into a dependable product: bringing up a new board, tracing a signal-integrity issue, debugging a peripheral, or verifying performance under different operating conditions.
            </p>
            <p>
              Working with manufacturing partners and field-support teams has shaped how I approach testing, documentation, and maintainability. My academic background adds embedded security, applied cryptography, and FPGA-based cryptographic modules to that practical foundation.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ResumeDownload className="button-primary w-full sm:w-auto" />
            <div className="flex min-h-11 items-center gap-2 px-1 text-sm text-[#9fb0bc] sm:px-2">
              <GlobeAltIcon className="h-5 w-5 text-[#2790ff]" aria-hidden="true" />
              English C1 · French A1 (learning)
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 border-b border-[#31526e] pb-4">
            <AcademicCapIcon className="h-7 w-7 text-[#2790ff]" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:block lg:divide-y lg:divide-[#1f3a4e]">
            {education.map((item) => (
              <article key={item.degree} className="min-w-0 border border-[#294459] bg-[#091a27] p-5 lg:border-0 lg:bg-transparent lg:px-0 lg:py-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2790ff]">{item.period}</p>
                <h4 className="mt-2 text-lg font-bold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm text-[#9eacb7]">{item.school}</p>
              </article>
            ))}
          </div>
          <div className="border border-[#294459] bg-[#091a27] p-5 text-sm leading-6 text-[#a9b6c0]">
            Master’s focus: secure embedded architectures, applied cryptography, side-channel and fault-injection attacks, and secure firmware. Additional training: Advanced Circuit and PCB Design using Altium Designer.
          </div>
        </div>
      </div>
    </section>
  );
}
