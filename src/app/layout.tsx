import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIEWIT - 외국인 숏폼 리뷰 체험단",
  description: "외국인 리뷰가 필요할 땐, VIEWIT ",
  keywords: "VIEWIT, 뷰잇, 해외마케팅, 틱톡마케팅, 외국인리뷰, 리뷰 영상, UGC, 영상 제작",
  authors: [{ name: "VIEWIT" }],
  creator: "VIEWIT",
  publisher: "VIEWIT",
  robots: "index, follow",
  openGraph: {
    title: "VIEWIT - 외국인 숏폼 리뷰 체험단",
    description: "외국인 리뷰가 필요할 땐, VIEWIT",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="google-site-verification" content="E9r0acTDiaXKyoAHBBA2U6YHlFv3l60jPDABvjH4wS4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
