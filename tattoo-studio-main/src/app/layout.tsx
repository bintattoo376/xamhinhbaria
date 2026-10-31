import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "BR.INK - Xăm Hình Xỏ Khuyên Bà Rịa",
  description:
    "Studio xăm hình nghệ thuật và xỏ khuyên chuyên nghiệp tại 258 Cách Mạng Tháng 8, Phường Phước Hiệp, TP. Bà Rịa",
  icons: [
    {
      url: "/icons/favicon-dark.svg",
      media: "(prefers-color-scheme: light)",
      rel: "icon",
      type: "image/svg",
    },
    {
      url: "/icons/favicon-light.svg",
      media: "(prefers-color-scheme: dark)",
      rel: "icon",
      type: "image/svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cinzel">{children}</body>
    </html>
  );
}