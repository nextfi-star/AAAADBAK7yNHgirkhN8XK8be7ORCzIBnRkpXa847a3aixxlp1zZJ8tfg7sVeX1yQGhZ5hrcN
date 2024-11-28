'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { Button } from '@nextui-org/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useThemeStore } from '@/store';
import { verifyCode } from '@/utils/api'; 

const VerifyCode: NextPage = () => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
	const params = useParams()
	const locale = params.locale || 'en'
  const { mode, email, phone, initializeTheme } = useThemeStore();

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
    setError(null); 
    console.log('Entered OTP:', newOtp);
  };

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length < 6) {
      setError('Please enter the complete 6-digit verification code.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        vcode: otp,
        email: mode === 'email' ? email : undefined,
        phone: mode === 'phone' ? phone : undefined,
      };

      const response = await verifyCode(payload);

      if (response.response === 'success') {
        router.push(`/${locale}/login`)
      } else {
        setError(response.message || 'Verification failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during verification.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form__verify w-full">
      <h2>
        Confirm your {mode === 'email' ? 'email address' : 'phone number'}
      </h2>
      <p>
        A 6-digit code has been sent to your{' '}
        {mode === 'email' ? (
          <span className="!text-[#205bc9]">{email}</span>
        ) : (
          <span className="!text-[#205bc9]">+{phone}</span>
        )}
        . The verification code must be entered within 30 minutes.
      </p>
      <span>Enter code: </span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px]"
      >
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={otp}
          onChange={handleOtpChange}
        >
          <InputOTPGroup className="">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                className="border-1 border-solid border-gray-500 text-[16px] p-[25px]"
                index={index}
              />
            ))}
            <InputOTPSeparator />
          </InputOTPGroup>
        </InputOTP>
        {error && <p className="text-danger">{error}</p>}
        <Button
          type="submit"
          disabled={otp.length < 6 || isSubmitting}
          className={`next__btn ${
            otp.length >= 6
              ? '!bg-[#205bc9] !border-[#205bc9]'
              : '!bg-gray-600 !border-gray-600'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Next'}
        </Button>
      </form>

      <span className="form__verify-resend">Didn't receive the code?</span>
    </div>
  );
};

export default VerifyCode;
