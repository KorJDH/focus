import type { Metadata } from "next";
import { Exo_2, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/lib/content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const display = Exo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: `${siteInfo.name} | 볼링 클럽(인천 크라운 볼링센터)`,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="grain" />
        <SiteHeader />
        <main className="relative z-10 pb-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
