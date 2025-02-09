import '@/styles/globals.scss'
import '@/styles/page.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Providers } from './providers'
import { routing } from '@/i18n/routing'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	if (!routing.locales.includes(locale as any)) {
		redirect(`/${routing.defaultLocale}`)
	}
	const messages = await getMessages()
	setRequestLocale(locale)
	return (
		<html suppressHydrationWarning lang={locale} className='!bg-[#0c0c0c]'>
			<body
				className={clsx(
					'min-h-screen font-sans antialiased',
					fontSans.variable
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
						<main className='main'>{children}</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}
