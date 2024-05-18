import Image from "next/image";
import illustration from "../../../public/purr-11.png"

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
