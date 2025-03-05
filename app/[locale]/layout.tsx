import '@/styles/globals.scss'
import '@/styles/page.scss'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Providers } from './providers'
import { routing } from '@/i18n/routing'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { UserInitializer } from './UserInitializer'
import { AosInitializer } from '@/components/shared/AosInitializer'
import Redirect from './Redirect'

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
	params,
}: {
	children: React.ReactNode
	params: Promise<{locale: string}>;
}) {
	const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    <Redirect />
  }
	const messages = await getMessages()
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
						<UserInitializer />
						<AosInitializer />
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
