import { useThemeStore } from "@/store/useChatStore";
import { useParams, useRouter } from "next/navigation";
const { setEmail, setPassword } = useThemeStore();

export const handleLogout = () => {
  const router = useRouter();
  const locale = useParams().locale;
  useThemeStore.getState().clearUser();
  sessionStorage.removeItem("zustand-store");
  setEmail("");
  setPassword("");

  router.push(`/${locale}/login?error=sessionExpired`);
};
