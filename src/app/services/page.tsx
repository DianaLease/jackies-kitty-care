import type { Metadata } from "next";
import Image from "next/image";
import illustration from "../../../public/purr-cat-giving-another-cat-a-massage.png"

export const metadata: Metadata = {
  title: "Services",
  description:
    "In-home cat sitting services offered by Jackie's Kitty Care in Middletown and Monmouth County, NJ — tailored care for your feline family members.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <Image
        src={illustration}
        height={200}
        alt="illustration of cat giving another cat a massage"
        unoptimized
      />
      <h2>Coming soon!</h2>
    </div>
  );
}
