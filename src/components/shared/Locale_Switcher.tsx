"use client";
import { NextPage } from 'next'
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

 const Locale_Switcher: NextPage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: any) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2 "
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="text-black" value="en">
          En
        </option>
        <option className="text-black" value="ru">
          Ru
        </option>
      </select>
    </div>
  );
}
export default Locale_Switcher