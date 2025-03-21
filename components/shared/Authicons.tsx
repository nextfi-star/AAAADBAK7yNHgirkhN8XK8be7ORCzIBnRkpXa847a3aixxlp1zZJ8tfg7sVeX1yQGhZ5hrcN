"use client";
import { useThemeStore } from "@/store/useChatStore";
import Image from "next/image";

export const Authicons = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Image
        width={40}
        height={40}
        className="sm:hidden"
        alt="social icon"
        src={`/form/soc/inst.svg`}
      />
      <Image
        width={40}
        height={40}
        className="sm:hidden"
        alt="social icon"
        src={`/form/soc/face.svg`}
      />
      <Image
        width={40}
        height={40}
        className="sm:hidden"
        alt="social icon"
        src={`/form/soc/twitt.svg`}
      />
      <div className="lock-btn">
        <Image
          width={40}
          height={40}
          className="lock sm:hidden"
          alt="social icon"
          src={`/form/soc/teleg.svg`}
        />
      </div>
      <Image
        width={40}
        height={40}
        className="md:hidden xl:hidden 2xl:hidden"
        alt={"socialMedia.instagra"}
        src={`/footer/soc/inst.svg`}
      />
      <Image
        width={40}
        height={40}
        className="md:hidden xl:hidden 2xl:hidden"
        alt={"socialMedia.faceboo"}
        src={`/footer/soc/face.svg`}
      />
      <Image
        width={40}
        height={40}
        className="md:hidden xl:hidden 2xl:hidden"
        alt={"socialMedia.twitte"}
        src={`/footer/soc/twitt.svg`}
      />
      <div className="lock-btn">
        <Image
          width={40}
          height={40}
          className="lock"
          alt="social icon"
          src={`/form/soc/teleg.svg`}
        />
      </div>
    </>
  );
};
