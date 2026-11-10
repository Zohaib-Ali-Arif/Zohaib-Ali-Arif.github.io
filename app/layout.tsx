import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://Zohaib-Ali-Arif.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zohaib Ali Arif | Embedded Systems Engineer",
  description:
    "Embedded Systems Engineer in Grenoble, France, with 3+ years in multilayer PCB design, Embedded C firmware, Ethernet systems, and GaN power electronics.",
  keywords: [
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "STM32",
    "PIC",
    "Altium Designer",
    "Embedded C",
    "Power Electronics",
    "PCB Design",
  ],
  authors: [{ name: "Zohaib Ali Arif", url: siteUrl }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Zohaib Ali Arif | Embedded Systems Engineer",
    description:
      "From schematic to production: embedded hardware, high-speed PCB design, and firmware. Based in Grenoble, France.",
    url: siteUrl,
    siteName: "Zohaib Ali Arif Portfolio",
    images: [
      {
        url: "/images/projects/zohaib-gan.webp",
        width: 1536,
        height: 1024,
        alt: "Concept illustration of GaN power converter engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohaib Ali Arif | Embedded Systems Engineer",
    description:
      "From schematic to production: embedded hardware, high-speed PCB design, and firmware. Based in Grenoble, France.",
    images: ["/images/projects/zohaib-gan.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/profile-icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/profile-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#04101a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
