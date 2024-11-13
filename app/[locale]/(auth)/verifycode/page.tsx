"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Button } from "@nextui-org/button";

import { OTPInput } from "@/components/shared/OTPInput";
import { Link } from "@/i18n/routing";
import { useThemeStore } from "@/store";

const VerifyCode: NextPage = () => {
  const [otp, setOtp] = useState<string>("");
  const { mode, email, phone, initializeTheme } = useThemeStore();

  const handleOtpChange = (newOtp: any) => {
    setOtp(newOtp);
    console.log("Entered OTP:", newOtp);
  };
  const handleSubmit = () => {
    console.log(`verify code - ${otp}`);
  };

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className="form__verify w-full">
      <h2>
        Confirm your {mode === "email" ? "email address" : "phone number"}
      </h2>
      <p>
        A 6-digit code has been sent to your{" "}
        {mode === "email" ? (
          <span className="!text-[#205bc9]">{email}</span>
        ) : (
          <span className="!text-[#205bc9]">+{phone}</span>
        )}
        . The verification code must be entered within 30 minutes.
      </p>
      <span>Enter code: </span>
      <div className="form__verify-input">
        <OTPInput length={6} onChange={handleOtpChange} />
      </div>

      <Link className="w-full" href="/over">
        <Button
          className={
            otp.length < 6
              ? "next__btn !bg-gray-600 !border-gray-600"
              : "next__btn bg-[#205bc9] !border-[#205bc9]"
          }
          disabled={!otp.length}
        >
          Next
        </Button>
      </Link>
      <span className="form__verify-resend">Didn't receive the code?</span>
    </div>
  );
};

export default VerifyCode;
