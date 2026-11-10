import Image from "next/image";

export default function EngineerAvatar({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/images/zohaib-ali-arif.jpeg"
      alt="Zohaib Ali Arif"
      width={size}
      height={size}
      className="aspect-square shrink-0 rounded-full border border-[#3c6685] bg-[#071521] object-cover object-[58%_30%]"
      priority
    />
  );
}
