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
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Providers } from './providers'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
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
		notFound()
	}
  setRequestLocale(locale);
  
	const messages = await getMessages()
	return (
		<html suppressHydrationWarning lang={locale}>
			<head />
			<body
				className={clsx(
					'min-h-screen font-sans antialiased',
					fontSans.variable
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
							<main className='main'>
								{children}
							</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}