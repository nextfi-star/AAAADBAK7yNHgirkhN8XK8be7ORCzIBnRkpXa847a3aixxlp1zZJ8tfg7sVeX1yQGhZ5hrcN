"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routing } from '@/i18n/routing'

export default function Redirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace(`/${routing.locales[0]}`);
    }, []);

    return null;
}
