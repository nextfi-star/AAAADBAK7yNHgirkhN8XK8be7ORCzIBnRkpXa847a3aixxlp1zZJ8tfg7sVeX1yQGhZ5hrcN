'use client'
import Image from "next/image"
import { useUserStore } from '@/hooks/useUserData'


interface Props {
    width: number,
    height: number,
    className: string
}

export const Avatar = ({width, height, className}: Props) => {
    const user = useUserStore((state) => state.user)
    return (
        <Image
            priority
            alt={"avatar"}
            className={className}
            height={height}
            src={user?.logo ? `https://nextfi.io:5000/uploads/${user.logo}` : '/main/avatar_noface.png'}
            width={width}
        />
    )
}
