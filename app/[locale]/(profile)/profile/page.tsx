"use client";
import { Profile_accountdetails } from "@/components/shared/Profile_accountdetails";
import { Profile_perosnalinfo } from "@/components/shared/Profile_perosnalinfo";
import { Profile_personalverif } from "@/components/shared/Profile_personalverif";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import { useThemeStore } from "@/store/useChatStore";
import { changeUsername } from "@/utils/api";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/hooks/useUserData";
import { Avatar } from "@/components/shared/Avatar";

const Page = () => {
  const user = useUserStore((state) => state.user);

  const t = useTranslations("auth");

  const [showPassword, setShowPassword] = useState(false);
  const { theme, mode, modeToogle } = useThemeStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "en";
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const onSubmit = async (data: any) => {
    const payload = {
      username: data.username,
    };
    setError(null);
    setIsLoading(true);
    try {
      const response = await changeUsername(payload);
      if (response.response === "success") {
        console.log("success");
      } else {
        setError(response.message);
      }
    } catch (err: any) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="personal !shadow-medium dark:!shadow-none">
      <div className="personal-container">
        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Avatar
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
              height={152}
              width={152}
            />
            <ChangeAvatar />
          </div>

          <div className="flex flex-col w-full gap-[68px]">
            <Profile_perosnalinfo />
            <Profile_personalverif />
            <Profile_accountdetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
