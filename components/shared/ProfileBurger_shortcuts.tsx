import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const data = [
  {
    src: "/header_icons/profile_burger/support.svg",
    title: "Support",
    tabName: "Profile",
  },
  {
    src: "/header_icons/profile_burger/security.svg",
    title: "Security",
    tabName: "Security",
  },
  {
    src: "/header_icons/profile_burger/verifciation.svg",
    title: "Verification",
    tabName: "Verification",
  },
  {
    src: "/header_icons/profile_burger/devices.svg",
    title: "Devices",
    tabName: "Authorized Devices",
  },
];

interface Props {
  handleShortcutClick: (val: any) => void;
}
export const ProfileBurger_shortcuts: NextPage<Props> = ({
  handleShortcutClick,
}) => {
  return (
    <section className="profile__burger-shortcuts">
      <h5 className="sec__title">Shortcuts</h5>
      <div className="flex items-center justify-between">
        {data &&
          data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center"
              onClick={() => handleShortcutClick(item.tabName)}
            >
              <Image
                priority
                alt={item.title}
                className="w-full"
                height={90}
                quality={100}
                src={item.src}
                width={90}
              />
              {item.title}
            </div>
          ))}
      </div>
    </section>
  );
};
