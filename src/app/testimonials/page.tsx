import type { Metadata } from "next";
import Image from "next/image";
import illustration from "../../../public/purr-24.png";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what cat owners in Monmouth County say about Jackie's Kitty Care — trusted in-home cat sitting in Middletown, NJ.",
  alternates: { canonical: "/testimonials" },
};

export default function Testimonials() {
  return (
    <div>
      <h1>What My Clients Are Saying</h1>
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
