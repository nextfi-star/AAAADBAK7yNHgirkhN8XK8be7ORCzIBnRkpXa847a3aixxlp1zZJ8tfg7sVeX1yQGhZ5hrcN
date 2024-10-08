import Image from "next/image";
import React from "react";

const data = [
  {
    src: "/header_icons/profile_burger/support.svg",
    title: "Support",
  },
  {
    src: "/header_icons/profile_burger/security.svg",
    title: "Security",
  },
  {
    src: "/header_icons/profile_burger/verifciation.svg",
    title: "Verification",
  },
  {
    src: "/header_icons/profile_burger/devices.svg",
    title: "Devices",
  },
];
export const ProfileBurger_shortcuts = () => {
  return (
    <section className="profile__burger-shortcuts">
      <h5 className="sec__title">Shortcuts</h5>
      <div className="flex items-center justify-between">
        {data &&
          data.map(item => (
            <div key={item.title} className="flex flex-col items-center">
              <Image src={item.src} width={36} height={36} quality={100} priority alt={item.title} className="w-full" />
              <span>{item.title}</span>
            </div>
          ))}
      </div>
    </section>
  );
};
