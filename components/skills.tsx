import {
  BoltIcon,
  CircleStackIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  SignalIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const skillGroups = [
  {
    title: "Firmware & Embedded Security",
    icon: BoltIcon,
    skills: ["Embedded C", "Interrupts & DMA", "Timers / ADC / PWM", "JTAG / SWD Debugging", "AES-256", "Logical Red/Black Separation"],
  },
  {
    title: "Embedded Platforms",
    icon: CpuChipIcon,
    skills: ["STM32", "PIC", "ESP32", "Raspberry Pi", "Marvell Switch ASICs", "i.MX6", "FPGA / Zybo Z7-10"],
  },
  {
    title: "Power, Control & Validation",
    icon: CircleStackIcon,
    skills: ["GaN Power Stages", "Totem-Pole PFC", "LLC Resonant Converters", "BLDC / PID Control", "Board Bring-Up", "Electrical & Thermal Testing"],
  },
  {
    title: "Digital & Peripheral Interfaces",
    icon: SignalIcon,
    skills: ["UART / SPI / I2C", "I2S", "CAN", "USB 3.0", "Ethernet / SFP", "PCIe", "DDR3", "GPS / GSM Integration"],
  },
  {
    title: "Circuit & PCB Design",
    icon: WrenchScrewdriverIcon,
    skills: ["Analog & Mixed-Signal Circuits", "Schematic Capture", "Multilayer PCB Layout", "Controlled-Impedance Routing", "Signal & Power Integrity", "EMI / EMC Debugging", "DFM / IPC-2221"],
  },
  {
    title: "Design & Lab Tools",
    icon: ShieldCheckIcon,
    skills: ["Altium Designer", "LTspice / Multisim", "STM32CubeIDE / MPLAB X", "Python / MATLAB", "VHDL / Verilog", "Git / Linux", "Oscilloscopes & Logic Analyzers", "Power Analyzers & Electronic Loads"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-b border-[#173044] bg-[#04101a]">
      <div className="site-container">
        <span className="section-kicker">Technical skills</span>
        <h2 className="section-title">Embedded design, development &amp; validation</h2>
        <p className="section-copy">
          Practical experience in PCB design, microcontroller firmware, and laboratory testing, complemented by academic work in embedded security and FPGA development.
        </p>
        <div className="mt-8 grid grid-cols-1 border-l border-t border-[#1f3a4e] min-[430px]:grid-cols-2 sm:mt-12 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="min-w-0 border-b border-r border-[#1f3a4e] p-5 sm:p-7 lg:p-8">
              <Icon className="h-8 w-8 text-[#2790ff]" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="border border-[#294459] bg-[#071521] px-2.5 py-1.5 text-xs text-[#afc1ce]">{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
