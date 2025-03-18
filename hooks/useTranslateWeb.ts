"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (newLocale: string) => {
    if (newLocale !== currentLocale) {
      // Формируем новый путь, заменяя текущую локаль
      const newPathname = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
      router.push(newPathname);
    }
  };
}
