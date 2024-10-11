import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.scss";
import "./page.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextFi | Home",
  description: "NextFi - is a crypto trading platform. Invest with confidence. Start trading now.",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = async ({ children, params: { locale } }: RootLayoutProps): Promise<JSX.Element> => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${onest.className}`}>
        <NextIntlClientProvider messages={messages}>
          <main className="main">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
export default RootLayout;
