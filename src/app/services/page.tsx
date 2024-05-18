import Image from "next/image";
import illustration from "../../../public/purr-cat-giving-another-cat-a-massage.png"

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
