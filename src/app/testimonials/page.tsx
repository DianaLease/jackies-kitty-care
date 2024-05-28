import Image from "next/image";
import illustration from "../../../public/purr-24.png";

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
