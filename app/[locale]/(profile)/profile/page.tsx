'use client';
import Image from "next/image";
import { Profile_accountdetails } from "@/components/shared/Profile_accountdetails";
import { Profile_perosnalinfo } from "@/components/shared/Profile_perosnalinfo";
import { Profile_personalverif } from "@/components/shared/Profile_personalverif";
import { ChangeAvatar } from "@/components/ui/ChangeAvatar";
import { Logo_header } from '@/components/ui/Logo_header'
import { Link } from '@/i18n/routing'
import { useThemeStore } from '@/store/useChatStore'
import { changeUsername } from '@/utils/api'
import { Button } from '@heroui/button'
import { Checkbox, Switch } from '@heroui/react'
import { Spinner } from '@heroui/spinner'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslations } from 'next-intl'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


const Page= () => {
    const t = useTranslations('auth')

    const [isSelected, setIsSelected] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { theme, mode, modeToogle } = useThemeStore()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const params = useParams()
    const locale = params.locale || 'en'
    const togglePasswordVisibility = () => setShowPassword(prev => !prev)
    const onSubmit = async (data: any) => {
      const payload = {
        username: data.username
      }
      setError(null)
      setIsLoading(true)
      try {
        const response = await changeUsername(payload)
        if (response.response === 'success') {
          console.log("success")
        } else {
          setError(response.message)
        }
      } catch (err: any) {
        setError(err.message)
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    }
  return (
    <section className="personal !shadow-medium dark:!shadow-none"
    >
      <div className="personal-container">
        <div className="personal-inner flex flex-row justify-between mt-[20px] gap-[40px]">
          <div className="relative h-fit w-fit">
            <Image
              priority
              alt={"avatar"}
              className="rounded-[50%] object-contain max-w-[152px] max-h-[152px]"
              height={152}
              src={"/main/avatar_noface.png"}
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
