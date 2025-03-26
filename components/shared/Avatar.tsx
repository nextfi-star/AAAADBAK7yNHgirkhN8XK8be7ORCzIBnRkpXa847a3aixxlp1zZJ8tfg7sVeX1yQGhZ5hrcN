"use client";
import Image from "next/image";
import { useUserStore } from "@/hooks/useUserData";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";

interface Props {
  width: number;
  height: number;
  className: string;
}

export const Avatar = ({ width, height, className }: Props) => {
  const { user, loadUser } = useUserStore();
  //   const [loading, setLoading] = useState<boolean>(true);
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      loadUser();
      setLogo(null);
      try {
        console.log(user);
        if (!user?.logo) {
          setLogo("/main/avatar_noface.png");
          return;
        }

        const response = await fetch(
          `https://nextfi.io:5000/uploads/${user.logo}`
        );

        const blob = await response.blob();

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => setLogo(reader.result as string);
      } catch (e) {
        console.error(e);
        setLogo("/main/avatar_noface.png");
      }
    };

    fetchAvatar();
  }, [user?.logo]);

  return (
    <div className="relative h-fit w-fit" style={{ aspectRatio: "1 / 1" }}>
      {!logo ? (
        <span
          style={{
            minWidth: "100%",
            minHeight: "100%",
            width,
            height,
          }}
          className="flex justify-center items-center border-white border rounded-full"
        >
          <Spinner />
        </span>
      ) : (
        <Image
          priority
          alt={"avatar"}
          className={className}
          loading={"eager"}
          height={height}
          src={logo}
          width={width}
        />
      )}
    </div>
  );
};
