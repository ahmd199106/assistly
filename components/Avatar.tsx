import Image from "next/image";
import { createAvatar } from "@dicebear/core";
import { rings } from "@dicebear/collection";

function Avatar({ seed, classname }: { seed: string; classname?: string }) {
  const avatar = createAvatar(rings, {
    seed,
  });

  const svg = avatar.toString();

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    "base64"
  )}`;

  return (
    <Image
      src={dataUrl}
      className={classname}
      alt="User Avatar"
      width={100}
      height={100}
    />
  );
}

export default Avatar;
