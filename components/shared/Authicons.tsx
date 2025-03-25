"use client";
import { useThemeStore } from "@/store/useChatStore";
import Image from "next/image";
import Link from "next/link";

export const Authicons = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Link href="">
        <Image
          width={40}
          height={40}
          alt={"socialMedia.instagram"}
          src={`/footer/soc/inst.svg`}
        />
      </Link>
      <Link href="https://www.facebook.com/share/1A8DScx2Ar/?mibextid=wwXIfr">
        <Image
          width={40}
          height={40}
          alt={"socialMedia.facebook"}
          src={`/footer/soc/face.svg`}
        />
      </Link>

      <Link href="https://x.com/nextfi_labs?s=11">
        <Image
          width={40}
          height={40}
          alt={"socialMedia.twitter"}
          src={`/footer/soc/twitt.svg`}
        />
      </Link>

      <div className="lock-btn">
        <Link href="https://t.me/Nextfi_io">
          <Image
            width={40}
            height={40}
            alt={"socialMedia.telegram"}
            src={`/footer/soc/teleg.svg`}
          />
        </Link>
      </div>
    </>
  );
};
