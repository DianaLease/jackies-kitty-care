import Image from "next/image";
import Link from "next/link";
import illustration from '../../public/purr-cats-in-love-rubbing-heads-on-each-other.png'

export default function Home() {
  return (
    <div>
      <header>
      <h1>Welcome to Jackie&apos;s Kitty Care</h1>
      <p className="tagline">Expert in-home cat sitting services in Monmouth County, providing personalized, loving care for your feline family members.</p>
      </header>
      <Image
        src={illustration}
        height={200}
        alt="illustration of two cats with heart"
        unoptimized
      />
      <div>
        <p>At <b>Jackie&apos;s Kitty Care</b>, I understand that your feline friends are part of the family. Based in Middletown, I offer reliable and loving in-home cat sitting services tailored to meet the unique needs of your special kitty. Whether you&apos;re on vacation or simply need a helping hand, you can trust me to provide the highest level of care and attention your cat deserves.</p>
        <p>I travel to you in order to ensure a stress-free and comfortable experience for your pet in the safety and familiarity of their own home.</p>
        <p>I have experience volunteering at the Monmouth County SPCA and have four cats of my own.</p>
        <p>Discover the purr-fect solution for your cat sitting needs with <b>Jackie&apos;s Kitty Care</b>!</p>
      </div>
    </div>
  );
}
