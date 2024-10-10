"use client";
import Image from "next/image";
import { ProfilePage_guard } from "../../components/ui/ProfilePage_guard";
import { useThemeStore } from "../../../../store";

const data = [
  {
    title: "Personal Info",
    rowtext: "Nickname",
    rowtext2: "user****@main.ru",
    rowsubtext: "User ID",
    rowsubtext2: "589511219100",
    rowbtn: "Change",
    rowsubbtn: "Copy",
    src: "/main/profile_page/info_icon.svg",
  },
  {
    title: "Verification info",
    rowtext: "Identity cerification",
    rowtext2: "Additional info needed",
    rowsubtext: "Country/Region",
    rowsubtext2: "Russia",
    rowbtn: "View details",
    rowsubbtn: "Change",
    src: "/main/profile_page/accept_icon.svg",
    srcguard: "/main/profile_page/guard.svg",
  },
  {
    title: "Account details",
    rowtext: "Email",
    rowtext2: "user****@main.ru",
    rowsubtext: "Phone",
    rowsubtext2: "****140",
    rowsubtext3: "Trading fee tier",
    rowsubtext4: "Level 1",
    rowsubbtn5: "View details",
    rowbtn: "Change",
    rowsubbtn: "Change",
    src: "/main/profile_page/settings_icon.svg",
  },
];

export default function Page() {
  const { theme } = useThemeStore();
  return (
    <section className="personal">
      <div className="personal-container">
        <h1 className="text-[32px]">Profile</h1>

        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Image
              src={"/main/avatar.png"}
              width={152}
              height={152}
              alt={"avatar"}
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
            />
            <Image
              src={"/main/profile_page/edit_icon.svg"}
              width={53}
              height={53}
              alt={"avatar"}
              className="absolute bottom-0 -right-[10px] object-contain min-h-[20px] min-w-[20px] cursor-pointer"
            />
          </div>

          <div className="flex flex-col w-full gap-[68px]">
            {data &&
              data.map(item => (
                <section key={item.title} className="personal__content flex flex-col w-full">
                  <h1 className="personal__content-title">
                    <Image src={item.src} width={30} height={30} alt="picture" quality={100} />
                    {item.title}
                  </h1>
                  <article className="flex items-center justify-between gap-[5px]">
                    <span>{item.rowtext}</span>
                    <span>
                      {item.srcguard && <ProfilePage_guard color={theme === "dark" ? "#fff" : "#000"} />}
                      {item.rowtext2}
                    </span>
                    <button>{item.rowbtn}</button>
                  </article>
                  <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />
                  <article className="flex items-center justify-between [5px]">
                    <span>{item.rowsubtext}</span>
                    <span>{item.rowsubtext2}</span>
                    <button>{item.rowsubbtn}</button>
                  </article>
                  {item.rowsubbtn5 && <span className="devider w-full h-[1px] bg-slate-100 block my-[24px]" />}
                  {item.rowsubbtn5 && (
                    <article className="flex items-center justify-between [5px]">
                      <span>{item.rowsubtext3}</span>
                      <span>{item.rowsubtext4}</span>
                      {item.rowsubbtn5 && <button>{item.rowsubbtn5}</button>}
                    </article>
                  )}
                </section>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
