'use client'
import { Globe } from 'lucide-react'
import { NextPage } from 'next'

const Locale_Switcher: NextPage = () => {
	// const [isPending, startTransition] = useTransition()
	// const router = useRouter()
	// const localActive = useLocale()
	// const { theme } = useThemeStore()
	// const color = theme === 'dark' ? 'white' : '#0c0c0c'
	// const onSelectChange = (e: any) => {
	// 	const nextLocale = e.target.value

	// 	startTransition(() => {
	// 		router.replace(`/${nextLocale}`)
	// 	})
	// }

	return (
		<div>
			<Globe strokeWidth={1} />
		</div>
	)
}

export default Locale_Switcher
