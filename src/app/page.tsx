import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Jackie&apos;s Kitty Care</h1>
      <Image
        src="/purr-cats-in-love-rubbing-heads-on-each-other.png"
        width={200}
        height={200}
        alt="illustration of two cats with heart"
        unoptimized
      />
      <p>Website is under construction. Please contact me with any inquiries!</p>
    </div>
  );
}
