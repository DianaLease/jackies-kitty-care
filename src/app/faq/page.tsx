import type { Metadata } from "next";
import Image from "next/image";
import illustration from "../../../public/purr-11.png"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Jackie's Kitty Care — in-home cat sitting in Middletown and Monmouth County, NJ.",
  alternates: { canonical: "/faq" },
};

export default function FAQ() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Image
        src={illustration}
        height={200}
        alt="illustration of cat dancing with yarn"
        unoptimized
      />
      <h2>Coming soon!</h2>
    </div>
  );
}
