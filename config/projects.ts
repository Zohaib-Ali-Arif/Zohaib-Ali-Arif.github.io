export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
  image: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "300 W GaN Power Converters",
    eyebrow: "Power Electronics · Wise Integration",
    description:
      "Adapted and validated 300 W GaN Totem-Pole PFC and LLC converters for AC/DC power supplies. The work combined PCB updates, Embedded C control firmware, and electrical and thermal testing, with 97% peak efficiency measured during validation.",
    image: "/images/projects/zohaib-gan.webp",
    details: [
      "At Wise Integration, I worked on adapting existing Totem-Pole PFC and LLC resonant converter platforms for GaN-based AC/DC power conversion. My contribution included schematic updates, component selection, and Altium layouts for two 4-layer WI-7xx power-stage daughter boards.",
      "I adapted the Embedded C digital-control firmware to the reworked boards and supported commissioning, sensing-channel checks, and hardware–software integration. Bring-up and root-cause debugging covered three GaN prototypes and customer boards.",
      "Validation combined electrical measurements with efficiency and thermal characterization across load and line conditions. The 300 W platforms reached 97% peak efficiency, and I documented the measurements and findings in technical reports.",
    ],
    technologies: ["GaN", "PFC / LLC", "Embedded C", "Altium Designer"],
    highlights: [
      "Schematics and 4-layer layouts for two WI-7xx daughter boards",
      "Digital control firmware adapted to reworked hardware",
      "Bring-up and root-cause debugging across three prototypes",
      "Efficiency and thermal characterization across load and line",
    ],
  },
  {
    title: "i.MX6Q Quad-Core Computing Board",
    eyebrow: "Embedded Computing · High-Speed PCB",
    description:
      "Co-designed an NXP i.MX6Q Linux single-board computer with senior engineers. Contributed to schematics, multilayer PCB layout, peripheral communication, and integration of high-speed and sensor interfaces.",
    image: "/images/projects/zohaib-sbc.webp",
    details: [
      "Working alongside senior engineers, I helped develop a custom Linux computing board around the NXP i.MX6Q quad-core processor. The board integrated HDMI, PCIe, USB, Ethernet, I2C, SPI, I2S, and UART to connect sensors and other subsystems.",
      "My contribution spanned schematic creation, PCB layout, high-speed interface routing, and Embedded C peripheral communication. Integration work included power optimization, EMI/EMC considerations, and practical interface checks using an oscilloscope and logic analyzer.",
    ],
    technologies: ["NXP i.MX6Q", "Linux", "PCIe / USB", "Altium Designer"],
  },
  {
    title: "24-Port Managed Ethernet Switch",
    eyebrow: "Networking · Production Hardware",
    description:
      "Owned hardware and firmware for a Marvell-based Layer 2 switch with 24 copper ports and two SFP ports. Implemented VLAN, MAC binding, and port management, while refining high-speed layout and supporting three production revisions.",
    image: "/images/projects/zohaib-switch.webp",
    details: [
      "This Layer 2 managed-switch platform combined Marvell switch ASICs with 24 copper Ethernet ports and two SFP ports. My responsibilities covered schematic design, high-speed PCB layout, and firmware for VLAN configuration, MAC binding, and port management.",
      "Hardware development focused on differential routing, controlled impedance, signal and power integrity, EMI/EMC considerations, and thermal behavior. I supported three revisions through production and worked with manufacturing and field-support teams to diagnose issues and refine the design.",
    ],
    technologies: ["Marvell ASICs", "Ethernet / SFP", "Embedded C", "Signal Integrity"],
  },
  {
    title: "Secure Portable Keyboard",
    eyebrow: "Embedded Security · Hardware Design",
    description:
      "Designed STM32- and ESP32-based hardware for a portable keyboard protecting user data in transmission. Applied AES-256 encryption and logical Red/Black separation, combining secure data handling with embedded hardware integration.",
    image: "/images/projects/zohaib-keyboard-v2.webp",
    details: [
      "The secure portable keyboard was designed to protect user data during transmission using STM32 and ESP32 microcontrollers. I designed the embedded hardware and contributed to integrating the electronics into the portable device.",
      "The design combined AES-256 encryption with logical Red/Black separation of plaintext and encrypted data paths. My contribution connected circuit design and microcontroller integration with the device’s secure data-handling requirements.",
    ],
    technologies: ["STM32", "ESP32", "AES-256", "Red/Black Separation"],
  },
  {
    title: "Underwater Tracking & Audio Feedback",
    eyebrow: "Low-Power Electronics · Sensing",
    description:
      "Developed hardware and firmware for a swimmer-tracking and feedback device designed for an IP68-rated enclosure. Integrated sensors, a Quectel GPS module, audio, and vibration feedback; low-power optimization extended battery life by 35%.",
    image: "/images/projects/zohaib-underwater.webp",
    details: [
      "This swimmer-tracking and feedback device combined an ARM Cortex-M microcontroller, a Quectel GPS module, multiple sensors, and audio and vibration outputs. My work covered schematics, PCB design, and Embedded C firmware for data acquisition and user feedback.",
      "Peripheral integration used I2C/SPI for acquisition, a DAC and amplifier for audio, and PWM/GPIO for feedback control. The device was designed for an IP68-rated enclosure, while low-power hardware and firmware optimization extended battery life by 35%.",
    ],
    technologies: ["Embedded C", "GPS / Sensors", "DAC Audio", "Low-Power Design"],
  },
  {
    title: "14,000 RPM Microcentrifuge",
    eyebrow: "Motor Control · Laboratory Instrumentation",
    description:
      "Developed a compact microcentrifuge with STM32-based BLDC control, Hall-sensor feedback, and a PID speed loop. Integrated safety interlocks and a capacitive-touch GUI, with responsibility spanning circuits, PCB layout, and firmware.",
    image: "/images/projects/zohaib-centrifuge.webp",
    details: [
      "Developed in collaboration with the COMSATS R&D Lab, this compact microcentrifuge used STM32-based BLDC motor control to operate at speeds up to 14,000 RPM. I worked across circuit design, schematics, PCB layout, and embedded firmware.",
      "Hall sensors supplied feedback to a PID speed-control loop. The electronics integrated the motor driver, safety limit switches and interlocks, and a capacitive-touch interface, bringing motion control and user interaction into one embedded system.",
    ],
    technologies: ["STM32", "BLDC / PID", "Hall Sensors", "Safety Interlocks"],
  },
  {
    title: "PC/104-Plus Ethernet Expansion Card",
    eyebrow: "Industrial Computing · Network Hardware",
    description:
      "Designed an Intel ASIC-based PC/104-Plus Ethernet expansion card with five 100 Mbps interfaces for industrial computing applications.",
    image: "/images/projects/zohaib-pc104.webp",
    details: [
      "I designed a compact industrial Ethernet expansion card compliant with the PC/104-Plus form factor. The board used an Intel ASIC and provided five 100 Mbps Ethernet interfaces for integration into an industrial computing stack.",
      "My contribution covered circuit and PCB design within the PC/104-Plus board constraints, integrating five network interfaces into a compact expansion card for industrial systems.",
    ],
    technologies: ["PC/104-Plus", "Intel ASIC", "100 Mbps Ethernet", "PCB Design"],
  },
  {
    title: "GPS / GSM Vehicle Tracker",
    eyebrow: "Connected Devices · Location Monitoring",
    description:
      "Designed hardware for a bus-tracking device in collaboration with the COMSATS R&D Lab. Combined GPS positioning and GSM connectivity to deliver real-time location updates to a mobile application.",
    image: "/images/projects/zohaib-gps.webp",
    details: [
      "Designed in collaboration with the COMSATS R&D Lab, the bus-tracking device combined GPS-based positioning with GSM connectivity. Its purpose was to send real-time vehicle-location updates to a mobile application.",
      "My contribution focused on the device hardware and integration of the GPS and GSM modules, connecting the positioning subsystem to the communication hardware used for remote location updates.",
    ],
    technologies: ["GPS", "GSM", "Microcontrollers", "Hardware Integration"],
  },
  {
    title: "Humanoid Head & Face Tracking",
    eyebrow: "Academic · Prototype in Development",
    description:
      "An academic prototype combining Raspberry Pi facial detection and recognition with Arduino-controlled pan-and-tilt servos. Integrates UART communication, custom electronics, and proportional control to explore responsive head tracking and closed-loop motion.",
    image: "/images/projects/zohaib-humanoid.webp",
    details: [
      "This academic prototype explored real-time facial detection and recognition on a Raspberry Pi using Python and OpenCV. An Arduino controlled the head’s pan-and-tilt servo motors, with UART linking the vision system and motion controller.",
      "Proportional control translated tracking feedback into servo movement. My work included servo-actuation electronics, PCB integration, and Python/C development for the closed-loop system. This is an academic prototype in development.",
    ],
    technologies: ["Raspberry Pi", "OpenCV / Python", "Arduino / C", "Servo Control"],
  },
];
