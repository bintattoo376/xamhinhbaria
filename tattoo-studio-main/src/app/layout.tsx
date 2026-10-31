import type { Metadata } from "next";
import Script from "next/script"; // 1. Import Script từ next/script
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
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "TattooShop",
    "name": "BR.INK Tattoo & Piercing Studio",
    "image": "https://xamhinhbaria.com/logo.png",
    "@id": "https://xamhinhbaria.com",
    "url": "https://xamhinhbaria.com",
    "telephone": "+84907879567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "258 Cách Mạng Tháng 8, Phước Hiệp",
      "addressLocality": "Bà Rịa",
      "addressRegion": "Bà Rịa - Vũng Tàu",
      "countryName": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.499,
      "longitude": 107.168
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "priceRange": "$$"
  };

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
      <body className="font-cinzel">
        {children}
        {/* 2. Đặt Script ngay trước khi đóng body với strategy="afterInteractive" hoặc "beforeInteractive" */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </body>
    </html>
  );
}