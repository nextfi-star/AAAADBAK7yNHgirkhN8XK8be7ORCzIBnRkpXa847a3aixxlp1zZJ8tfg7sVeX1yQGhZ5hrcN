"use client";
import Image from "next/image";
import ArrowBracket from "../../../../components/ui/ArrowBracket";
import { useThemeStore } from "../../../../store";
import { NextPage } from "next";

const data = [
  {
    src: "/main/profile_security/auth_app.svg",
    title: "Authenticator app",
    desc: "Use authentication codes when managing assets and other functions",
    btn: "Change authenticator app",
  },
  {
    src: "/main/profile_security/phone.svg",
    title: "Phone authentication",
    desc: "Get authentication codes via SMS, WhatsApp, or calls when managing assets and other functions",
    btn: "Change phone number",
    contain: "****140",
  },
  {
    src: "/main/profile_security/email.svg",
    title: "Email authentication",
    desc: "Get authentication codes via email for login and other functions",
    btn: "Change email",
    contain: "zya***@rambler.ru",
  },
  {
    src: "/main/profile_security/login_pass.svg",
    title: "Login password",
    desc: "Use this password for account login",
    btn: "Change password",
    contain: "********",
  },
];
const data2 = [
  {
    src: "/main/profile_security/account_freeze.svg",
    title: "Freeze account",
    desc: "Your account will be frozen temporarily. To unfreeze it, start by logging in again.",
    unic: "2",
  },
  {
    src: "/main/profile_security/account_close.svg",
    title: "Close account",
    desc: "Once you close your account, it is permanent and can't be restored",
  },
];
const Page: NextPage = () => {
  const { theme } = useThemeStore();
  return (
    <section className="security">
      <div className="security-container">
        <h1>Security center</h1>
        <span className="block w-full bg-gray-200 min-h-[1px] my-[24px]"></span>
        <div className="security__content">
          <h1>Authentication methods</h1>
          {data &&
            data.map(item => (
              <>
                <article key={item.title} className="security__content__item">
                  <div className="security__content__item__list">
                    <div className="flex items-start">
                      <Image src={item.src} width={30} height={30} quality={100} alt="icon" />
                      <div className="flex flex-col gap-[8px]">
                        <p className="flex items-center gap-[11px]">{item.title}</p>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      {item.contain && <p>{item.contain}</p>}
                      <button>{item.btn}</button>
                    </div>
                  </div>
                </article>
                <span className="block w-full bg-gray-200 min-h-[1px] my-[24px]"></span>
              </>
            ))}
        </div>
        <div className="security__content">
          <h1>Authentication methods</h1>
          {data2 &&
            data2.map(item => (
              <article key={item.title} className="security__content__item">
                <div className="security__content__item__list">
                  <div className="flex items-start">
                    <Image src={item.src} width={30} height={30} quality={100} alt="icon" />
                    <div className="flex flex-col gap-[8px]">
                      <p className="flex items-center gap-[11px]">{item.title}</p>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                  <div className="flex gap-[12px] items-center">
                    <ArrowBracket
                      color={theme === "dark" ? "white" : "black"}
                      width={25}
                      height={25}
                      className={"-rotate-90"}
                    />
                  </div>
                </div>
                {item.unic && <span className="block w-full bg-gray-200 min-h-[1px] my-[24px]"></span>}
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Page;