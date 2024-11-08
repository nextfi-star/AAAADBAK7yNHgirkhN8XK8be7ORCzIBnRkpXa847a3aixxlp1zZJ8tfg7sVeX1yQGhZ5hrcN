'use client'
import { useThemeStore } from '@/store'
import { NextPage } from 'next'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

const Locale_Switcher: NextPage = () => {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const localActive = useLocale()
	const { theme } = useThemeStore()
	const color = theme === 'dark' ? 'white' : '#0c0c0c'
	const onSelectChange = (e: any) => {
		const nextLocale = e.target.value

		startTransition(() => {
			router.replace(`/${nextLocale}`)
		})
	}

	return (
		<div>
			{/* <select
        className="bg-transparent py-2 "
        defaultValue={localActive}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option className="text-black" value="en">
          En
        </option>
        <option className="text-black" value="ru">
          Ru
        </option>
      </select> */}
			<svg
				width='20.000000'
				height='20.000000'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<defs />
				<path
					id='Vector'
					d='M13.74 18.75C12.13 18.75 10.82 17.44 10.82 15.83C10.82 14.22 12.13 12.91 13.74 12.91L15.41 12.91C15.64 12.91 15.82 13.1 15.82 13.33C15.82 13.56 15.64 13.75 15.41 13.75L13.74 13.75C12.59 13.75 11.66 14.68 11.66 15.83C11.66 16.98 12.59 17.91 13.74 17.91C13.97 17.91 14.16 18.1 14.16 18.33C14.16 18.56 13.97 18.75 13.74 18.75Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M17.08 18.75L15.41 18.75C15.18 18.75 15 18.56 15 18.33C15 18.1 15.18 17.91 15.41 17.91L17.08 17.91C18.23 17.91 19.16 16.98 19.16 15.83C19.16 14.68 18.23 13.75 17.08 13.75C16.85 13.75 16.66 13.56 16.66 13.33C16.66 13.1 16.85 12.91 17.08 12.91C18.69 12.91 20 14.22 20 15.83C20 17.44 18.69 18.75 17.08 18.75Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M14.16 14.99C14.06 14.99 13.95 14.95 13.87 14.87C13.71 14.71 13.71 14.45 13.87 14.28L14.82 13.33L13.87 12.37C13.71 12.21 13.71 11.95 13.87 11.78C14.03 11.62 14.29 11.62 14.46 11.78L15.71 13.03C15.87 13.2 15.87 13.46 15.71 13.62L14.46 14.87C14.38 14.95 14.27 14.99 14.16 14.99Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M16.66 20C16.56 20 16.45 19.96 16.37 19.87L15.12 18.62C14.96 18.46 14.96 18.2 15.12 18.03L16.37 16.78C16.53 16.62 16.79 16.62 16.96 16.78C17.12 16.95 17.12 17.21 16.96 17.37L16 18.33L16.96 19.28C17.12 19.45 17.12 19.71 16.96 19.87C16.88 19.96 16.77 20 16.66 20Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M9.58 19.16C4.29 19.16 0 14.86 0 9.58C0 4.29 4.29 0 9.58 0C14.86 0 19.16 4.29 19.16 9.58C19.16 9.64 19.16 11.1 18.71 12.23C18.64 12.44 18.39 12.55 18.17 12.47C17.96 12.38 17.85 12.14 17.94 11.93C18.25 11.14 18.33 10.05 18.33 9.58C18.33 4.75 14.4 0.83 9.58 0.83C4.75 0.83 0.83 4.75 0.83 9.58C0.83 14.4 4.75 18.33 9.58 18.33C9.9 18.33 10.22 18.31 10.54 18.27C10.77 18.25 10.97 18.41 11 18.64C11.03 18.87 10.86 19.08 10.63 19.1C10.26 19.14 9.92 19.16 9.58 19.16Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M9.58 19.16C6.55 19.16 4.17 14.95 4.17 9.58C4.17 4.2 6.55 0 9.58 0C12.62 0 15 4.2 15 9.58C15 9.81 14.82 10 14.58 10C14.35 10 14.17 9.81 14.17 9.58C14.17 4.84 12.07 0.83 9.58 0.83C7.1 0.83 5 4.84 5 9.58C5 14.32 7.1 18.33 9.58 18.33C9.82 18.33 10 18.52 10 18.75C10 18.98 9.82 19.16 9.58 19.16Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M9.58 19.16C9.35 19.16 9.17 18.98 9.17 18.75L9.17 0.41C9.17 0.18 9.35 0 9.58 0C9.82 0 10 0.18 10 0.41L10 18.75C10 18.98 9.82 19.16 9.58 19.16Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M18.75 10L0.41 10C0.18 10 0 9.81 0 9.58C0 9.35 0.18 9.16 0.41 9.16L18.75 9.16C18.98 9.16 19.16 9.35 19.16 9.58C19.16 9.81 18.98 10 18.75 10Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M17.08 5L2.08 5C1.85 5 1.67 4.81 1.67 4.58C1.67 4.35 1.85 4.16 2.08 4.16L17.08 4.16C17.32 4.16 17.5 4.35 17.5 4.58C17.5 4.81 17.32 5 17.08 5Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M9.58 15L2.08 15C1.85 15 1.67 14.81 1.67 14.58C1.67 14.35 1.85 14.16 2.08 14.16L9.58 14.16C9.82 14.16 10 14.35 10 14.58C10 14.81 9.82 15 9.58 15Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
				<path
					id='Vector'
					d='M14.58 10.83C14.35 10.83 14.17 10.64 14.17 10.41L14.17 9.58C14.17 9.35 14.35 9.16 14.58 9.16C14.82 9.16 15 9.35 15 9.58L15 10.41C15 10.64 14.82 10.83 14.58 10.83Z'
					fill={color}
					fillOpacity='1.000000'
					fillRule='nonzero'
				/>
			</svg>
		</div>
	)
}

export default Locale_Switcher
