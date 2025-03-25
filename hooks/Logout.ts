import { useRouter } from "next/navigation";

export const Logout = async (
  csrf: string,
  router: ReturnType<typeof useRouter>,
  locale: string | string[],
  fullLogout = false
) => {
  try {
    const payload = {
      csrf: csrf,
      full: fullLogout ? "true" : "",
    };

    const response = await fetch("https://nextfi.io:5000/api/v1/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (response.ok) {
      sessionStorage.removeItem("userData");
      router.push(`/${locale}/login?error=sessionExpired`);
      return result;
    } else {
      throw new Error(result.message || "Logout failed");
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};
