import Image from "next/image";
import React from "react";

const data = [
  {
    src: "/header_icons/profile_burger/deposit.svg",
    title: "Deposit",
  },
  {
    src: "/header_icons/profile_burger/withdraw.svg",
    title: "Witharaw",
  },
  {
    src: "/header_icons/profile_burger/swap.svg",
    title: "Swap",
  },
  {
    src: "/header_icons/profile_burger/commission.svg",
    title: "Commission",
		subtitle: 'level'
  },
];
export const ProfileBurger_assets = () => {
  return (
    <section className="profile__burger-assets">
      <h5 className="sec__title">Manage Assets</h5>
      <div className="flex items-center justify-between">
        {data &&
          data.map(item => (
            <div key={item.title} className="flex flex-col items-center">
              <Image src={item.src} width={36} height={36} quality={100} priority alt={item.title} className="w-full" />
              <span className='text-center'>{item.title} <br /> {item.subtitle} </span>
            </div>
          ))}
      </div>
    </section>
  );
};
