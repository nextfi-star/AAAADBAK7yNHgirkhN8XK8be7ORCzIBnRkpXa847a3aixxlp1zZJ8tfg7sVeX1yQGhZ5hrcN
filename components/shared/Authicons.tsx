"use client";
import { useThemeStore } from "@/store/useChatStore";
import Image from "next/image";
import Link from "next/link";

export const Authicons = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Link href="https://www.instagram.com/nextfi.io?igsh=MWJxeW1jczN4dWMwZg==">
        <Image
          width={40}
          height={40}
          alt={"socialMedia.instagra"}
          src={`/footer/soc/inst.svg`}
        />
      </Link>
      <Image
        width={40}
        height={40}
        alt={"socialMedia.faceboo"}
        src={`/footer/soc/face.svg`}
      />
      <Image
        width={40}
        height={40}
        alt={"socialMedia.twitte"}
        src={`/footer/soc/twitt.svg`}
      />
      <div className="lock-btn">
        <Image
          width={40}
          height={40}
          alt="social icon"
          src={`/footer/soc/teleg.svg`}
        />
      </div>
    </>
  );
};
