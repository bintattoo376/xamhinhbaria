import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xamhinhbaria.com"),
  title: {
    default: "BR.INK - Xăm Hình & Xỏ Khuyên Uy Tín Tại Bà Rịa",
    template: "%s | BR.INK Studio",
  },
  description:
    "BR.INK Studio chuyên xăm hình nghệ thuật độc bản, xỏ khuyên an toàn và xử lý cover hình xăm cũ tại 258 Cách Mạng Tháng 8, Phường Phước Hiệp, TP. Bà Rịa, Vũng Tàu.",
  keywords: [
    "xăm hình Bà Rịa",
    "xỏ khuyên Bà Rịa",
    "tiệm xăm uy tín Bà Rịa Vũng Tàu",
    "xăm nghệ thuật Bà Rịa",
    "sửa hình xăm cũ Bà Rịa",
    "BR.INK Tattoo",
  ],
  authors: [{ name: "Trình Nguyễn (Bin)" }],
  creator: "BR.INK Studio",
  publisher: "BR.INK Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://xamhinhbaria.com",
    title: "BR.INK - Xăm Hình & Xỏ Khuyên Uy Tín Tại Bà Rịa",
    description:
      "Studio xăm hình nghệ thuật độc bản và xỏ khuyên chuyên nghiệp hàng đầu tại TP. Bà Rịa, Vũng Tàu.",
    siteName: "BR.INK Tattoo & Piercing Studio",
    images: [
      {
        url: "https://xamhinhbaria.com/logo.png",
        width: 1200,
        height: 630,
        alt: "BR.INK Tattoo & Piercing Studio Bà Rịa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BR.INK - Xăm Hình & Xỏ Khuyên Uy Tín Tại Bà Rịa",
    description:
      "Studio xăm hình nghệ thuật độc bản và xỏ khuyên chuyên nghiệp tại TP. Bà Rịa, Vũng Tàu.",
    images: ["https://xamhinhbaria.com/logo.png"],
  },
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