import { useEffect } from "react";
import { useUserStore } from "@/hooks/useUserData";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";

interface AppInitializerProps {
  children: React.ReactNode;
}

export default function ValidateUser({ children }: AppInitializerProps) {
  const { user, loadUser } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale || "en";

  useEffect(() => {
    if (pathname === `/${locale}/login` || pathname === `/${locale}/signup`) {
      return;
    }
    if (!user) {
      loadUser();
      return;
    }
    if (!user.uid || !user.csrf) {
      console.log("ОШИБКА");
      sessionStorage.removeItem("userData");
      sessionStorage.removeItem("profile-store");
      router.push(`/${locale}/login?error=sessionExpired`);
    } else {
      // console.log('Пользователь авторизован:', user);
    }
  }, [user, loadUser, pathname, locale, router]);

  return <>{children}</>;
}
