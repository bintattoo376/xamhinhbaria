export default function JsonLd() {
  const schema = {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}