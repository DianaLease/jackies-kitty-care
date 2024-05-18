import Image from "next/image";
import illustration from '../../public/purr-cats-in-love-rubbing-heads-on-each-other.png'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Jackie&apos;s Kitty Care</h1>
      <Image
        src={illustration}
        height={200}
        alt="illustration of two cats with heart"
        unoptimized
      />
      <p>Website is under construction. Please contact me with any inquiries!</p>
    </div>
  );
}
