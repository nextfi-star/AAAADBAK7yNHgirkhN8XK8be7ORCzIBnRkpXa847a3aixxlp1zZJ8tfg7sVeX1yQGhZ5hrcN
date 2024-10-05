import React from "react";

import { Qr } from "../ui/Qr.js";

import GooglePlay from "../ui/GooglePlay.js";

export const Profile_qr = () => {
  return (
    <div className="profile_qr">
      <div className="profile_qr-mobile flex flex-col justify-center m-auto max-w-[296px] gap-[24px] text-center h-[292px]  rounded-[30px]">
        <h2 className="text-[18px]">
          Download app <br /> and trade on the go
        </h2>
        <div className="flex justify-center items-center gap-[12px] w-full">
          <div className="flex justify-center shadow bg-[#3c3c3c66] w-[88px] h-[88px] rounded-[15px]">
            <GooglePlay />
          </div>
          <div className="flex justify-center shadow bg-[#3c3c3c66] w-[88px] h-[88px] rounded-[15px]">
            <GooglePlay />
          </div>
          <div className="flex justify-center shadow bg-[#3c3c3c66] w-[88px] h-[88px] rounded-[15px]">
            <GooglePlay />
          </div>
        </div>
        <p className="text-[20px]">NextFi App</p>
      </div>

      <div className="profile_qr-into">
        <span>Download app and trade on the go</span>
        <div className="profile_qr-link">
          <Qr />
          <div className="profile_qr-link-desk">
            <h3>NextFi App</h3>
            <p>Scan to download</p>
          </div>
        </div>
      </div>
    </div>
  );
};
