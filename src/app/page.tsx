import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import illustration from "../../public/purr-cats-in-love-rubbing-heads-on-each-other.png";

export const metadata: Metadata = {
  title: "Jackie's Kitty Care | In-Home Cat Sitting in Monmouth County, NJ",
  description:
    "Reliable, loving in-home cat sitting in Middletown and Monmouth County, NJ. Jackie visits your home so your cat stays comfortable, safe, and stress-free while you're away.",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jackie's Kitty Care",
  description:
    "In-home cat sitting services in Middletown and Monmouth County, NJ.",
  url: "https://www.jackieskittycare.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Monmouth County, NJ",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Middletown",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  serviceType: "Cat Sitting",
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <header>
        <h1>Jackie&apos;s Kitty Care</h1>
        <p className="tagline">
          Expert in-home cat sitting services in Monmouth County, providing
          personalized, loving care for your feline family members.
        </p>
      </header>
      <Image
        src={illustration}
        height={200}
        alt="illustration of two cats with heart"
        unoptimized
      />
      <div>
        <p>
          At <b>Jackie&apos;s Kitty Care</b>, I understand that your feline
          friends are part of the family. Based in Middletown, I offer reliable
          and loving in-home cat sitting services tailored to meet the unique
          needs of your special kitty. Whether you&apos;re on vacation or simply
          need a helping hand, you can trust me to provide the highest level of
          care and attention your cat deserves.
        </p>
        <p>
          I travel to you in order to ensure a stress-free and comfortable
          experience for your pet in the safety and familiarity of their own
          home.
        </p>
        <p>
          I have experience volunteering at the Monmouth County SPCA and have
          four cats of my own.
        </p>
        <p>
          Discover the purr-fect solution for your cat sitting needs with{" "}
          <b>Jackie&apos;s Kitty Care</b>!
        </p>
      </div>
    </div>
  );
}
