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
  description: "외국인 리뷰가 필요할 땐, VIEWIT.",
  keywords: ["VIEWIT", "뷰잇", "해외마케팅", "틱톡마케팅", "외국인리뷰", "리뷰 영상", "UGC", "영상 제작"],
  authors: [{ name: "VIEWIT" }],
  creator: "VIEWIT",
  publisher: "VIEWIT",
  robots: "index, follow",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "VIEWIT - 외국인 숏폼 리뷰 체험단",
    description: "외국인 리뷰가 필요할 땐, VIEWIT.",
    type: "website",
    locale: "ko_KR",
    url: "https://viewitcorp.netlify.app/",
    siteName: "VIEWIT",
    images: [
      {
        url: "https://viewitcorp.netlify.app/preview.png",
        width: 1200,
        height: 630,
        alt: "VIEWIT 미리보기 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIEWIT - 외국인 숏폼 리뷰 체험단",
    description: "외국인 리뷰가 필요할 땐, VIEWIT.",
    images: ["https://viewitcorp.netlify.app/preview.png"],
  },
  alternates: {
    canonical: "https://viewitcorp.netlify.app/",
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
        <meta name="naver-site-verification" content="c7125725c403cc11c3cc0d6575ae094eeed83143" />
        <meta property="og:image" content="https://viewitcorp.netlify.app/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="VIEWIT 미리보기 이미지" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DRXYTEWHF1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DRXYTEWHF1');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
