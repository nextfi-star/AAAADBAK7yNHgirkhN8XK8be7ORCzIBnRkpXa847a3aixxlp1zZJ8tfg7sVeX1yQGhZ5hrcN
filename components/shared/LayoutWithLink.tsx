"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { CloseBtn } from "../ui/CloseBtn";

import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store/useChatStore";
import { useUserStore } from "@/hooks/useUserData";

const LayoutWithLink = () => {
  const { setUser } = useUserStore();
  const {
    setEmail,
    setPhone,
    setPassword,
    setshowVerifWindow,
    showVerifWindow,
  } = useThemeStore();
  const linkHref = showVerifWindow ? `/login` : `/`;
  const clearStorageInputs = () => {
    setEmail("");
    setPhone("");
    setPassword("");
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("profile-store");
    setUser(null);
    setshowVerifWindow(false);
  };

  return (
    <div className="absolute w-full z-[10] top-0 flex items-center justify-end md:justify-between p-[30px]">
      <div className="back_btn !hidden md:!flex">
        <Link href={linkHref} onClick={clearStorageInputs}>
          <Image
            alt="arrow left"
            height={50}
            src={"/form/arrow_left.svg"}
            width={50}
          />
        </Link>
      </div>
      <Link
        className="form__close"
        href={linkHref}
        onClick={clearStorageInputs}
      >
        <CloseBtn />
      </Link>
    </div>
  );
};

export default LayoutWithLink;
