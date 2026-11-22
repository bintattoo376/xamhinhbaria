import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Bảng Giá Xỏ Khuyên Bà Rịa Chuẩn Y Khoa | BR.INK Studio",
  description:
    "Bảng giá xỏ khuyên tai, mũi, chân mày, môi, lưỡi, rốn tại BR.INK Bà Rịa. Giá đã gồm khuyên Titanium ASTM chuẩn cấy ghép hoặc nhựa sinh học Bioplast, kim y tế vô trùng.",
  alternates: {
    canonical: "https://xamhinhbaria.com/xo-khuyen-piercing",
  },
  openGraph: {
    title: "Bảng Giá Xỏ Khuyên Bà Rịa Chuẩn Y Khoa | BR.INK Studio",
    description:
      "Xỏ khuyên tai, mũi, chân mày, môi, lưỡi, rốn tại BR.INK Piercing Bà Rịa. Đã bao gồm khuyên và xỏ, lựa chọn khuyên Titanium ASTM hoặc nhựa sinh học Bioplast.",
    url: "https://xamhinhbaria.com/xo-khuyen-piercing",
    type: "website",
  },
};

const piercingGroups = [
  {
    category: "TAI",
    items: [
      {
        name: "Không qua sụn (Lobe)",
        style: "Lỗ xỏ cơ bản trên thùy tai, dễ phối khuyên, hợp mọi phong cách",
        healing: "~6 – 8 tuần",
        price: "299k / 1 lỗ",
      },
      {
        name: "Qua sụn (Helix, Conch, Flat...)",
        style: "Vành tai / sụn tai, cá tính, dễ tạo điểm nhấn",
        healing: "~3 – 6 tháng",
        price: "349k / 1 lỗ",
      },
      {
        name: "Vị trí đặc biệt (Tragus, Daith, Rook)",
        style: "Các vị trí sụn đặc thù, căn chỉnh kỹ theo giải phẫu tai",
        healing: "~3 – 6 tháng",
        price: "449k / 1 lỗ",
      },
    ],
  },
  {
    category: "MŨI",
    items: [
      {
        name: "Cánh mũi (Nostril)",
        style: "Tinh tế, gọn gàng, tôn đường nét gương mặt",
        healing: "~2 – 4 tháng",
        price: "349k / 1 lỗ",
      },
      {
        name: "Septum",
        style: "Vách ngăn mũi, linh hoạt khi giấu hoặc khoe khuyên",
        healing: "~2 – 3 tháng",
        price: "399k / 1 lỗ",
      },
    ],
  },
  {
    category: "CHÂN MÀY",
    items: [
      {
        name: "Xỏ chân mày",
        style: "Đường xỏ dọc hoặc ngang theo cung mày, nổi bật cá tính",
        healing: "~2 – 4 tháng",
        price: "399k / 1 lỗ",
      },
    ],
  },
  {
    category: "MÔI",
    items: [
      {
        name: "Khuyên basic",
        style: "Labret / môi cơ bản, chú ý vệ sinh ăn uống giai đoạn đầu",
        healing: "~2 – 3 tháng",
        price: "349k / 1 lỗ",
      },
      {
        name: "Smiley",
        style: "Vị trí đặc thù phía trong môi trên, cần kiểm tra giải phẫu",
        healing: "~4 – 8 tuần",
        price: "399k / 1 lỗ",
      },
    ],
  },
  {
    category: "LƯỠI",
    items: [
      {
        name: "Xỏ lưỡi",
        style: "Táo bạo, độc đáo, súc miệng vệ sinh đều đặn sau xỏ",
        healing: "~4 – 8 tuần",
        price: "449k / 1 lỗ",
      },
    ],
  },
  {
    category: "RỐN",
    items: [
      {
        name: "Khuyên basic",
        style: "Mẫu khuyên cơ bản, phù hợp người mới xỏ rốn",
        healing: "~6 – 9 tháng",
        price: "349k / 1 lỗ",
      },
      {
        name: "Khuyên tùy chọn",
        style: "Chọn mẫu khuyên theo sở thích, ưu tiên trang phục thoải mái",
        healing: "~6 – 9 tháng",
        price: "399k – 649k / 1 lỗ",
      },
    ],
  },
];

// Lưu ý: Đổi tên 2 file ảnh lưỡi trong public/images/piercing/ thành xo-khuyen-luoi-1.jpg và xo-khuyen-luoi-2.jpg
const piercingGallery = [
  {
    src: "/images/piercing/Xo-khuyen-br-ink-ba-ria-vung-tau-23a.jpg",
    title: "Xỏ Tai Nhiều Lỗ (Lobe & Upper Lobe)",
    material: "Khuyên Titanium ASTM đính đá",
    alt: "Xỏ khuyên tai nhiều lỗ Lobe và Upper Lobe tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/xo-khuyen-br-ink-ba-ria-vung-tau-33a.jpg",
    title: "Xỏ Thùy Tai (Lobe)",
    material: "Khuyên nhựa sinh học Bioplast trong suốt",
    alt: "Xỏ khuyên thùy tai Lobe bằng nhựa sinh học Bioplast tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/Xo-khuyen-br-ink-ba-ria-vung-tau-16a.jpg",
    title: "Xỏ Cánh Mũi (Nostril)",
    material: "Khuyên Titanium ASTM đính đá",
    alt: "Xỏ khuyên cánh mũi Nostril tại BR.INK Piercing Bà Rịa",
  },
  {
    src: "/images/piercing/Xo-khuyen-br-ink-ba-ria-vung-tau-17a.jpg",
    title: "Xỏ Cánh Mũi (Nostril)",
    material: "Khuyên Titanium ASTM chuẩn cấy ghép",
    alt: "Xỏ khuyên cánh mũi chuẩn y khoa tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/XO-CHAN-MAY-BARIA-1A.jpg",
    title: "Xỏ Chân Mày (Eyebrow)",
    material: "Khuyên nhựa sinh học Bioplast",
    alt: "Xỏ khuyên chân mày bằng nhựa sinh học tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/Xo-khuyen-moi--br-ink-ba-ria-vung-tau-1c.jpg",
    title: "Xỏ Môi Dưới (Labret)",
    material: "Khuyên Titanium ASTM đính đá",
    alt: "Xỏ khuyên môi Labret tại BR.INK Piercing Bà Rịa",
  },
  {
    src: "/images/piercing/xo-khuyen-luoi-1.jpg",
    title: "Xỏ Lưỡi & Xỏ Môi",
    material: "Khuyên Titanium ASTM / Bioplast",
    alt: "Xỏ khuyên lưỡi và môi thực tế tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/xo-khuyen-luoi-2.jpg",
    title: "Xỏ Lưỡi (Tongue Piercing)",
    material: "Khuyên Titanium ASTM chuẩn cấy ghép",
    alt: "Xỏ khuyên lưỡi vô trùng bằng kim y tế tại BR.INK Bà Rịa",
  },
  {
    src: "/images/piercing/xo-khuyen--ron-ba-ria-vung-tau-br-ink-3a.jpg",
    title: "Xỏ Rốn (Navel Piercing)",
    material: "Khuyên Titanium ASTM đính đá",
    alt: "Xỏ khuyên rốn thẩm mỹ tại BR.INK Piercing Bà Rịa",
  },
];

const jsonLdServiceAndFaq = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://xamhinhbaria.com/xo-khuyen-piercing#service",
      name: "Dịch Vụ Xỏ Khuyên Chuẩn Y Khoa Tại Bà Rịa",
      serviceType: "Body Piercing",
      provider: {
        "@type": "TattooShop",
        name: "BR.INK Tattoo & Piercing Studio",
        url: "https://xamhinhbaria.com",
        telephone: "+84907879789",
        address: {
          "@type": "PostalAddress",
          streetAddress: "258 Cách Mạng Tháng 8, Phường Bà Rịa",
          addressLocality: "TP. HCM",
          addressRegion: "TP. Hồ Chí Minh",
          countryName: "VN",
        },
      },
      areaServed: {
        "@type": "Place",
        name: "Bà Rịa, TP. HCM",
      },
      url: "https://xamhinhbaria.com/xo-khuyen-piercing",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Bảng giá xỏ khuyên tại BR.INK đã bao gồm khuyên chưa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tất cả mức giá đã bao gồm khuyên và xỏ, bạn được lựa chọn giữa hai chất liệu khuyên Titanium ASTM hoặc nhựa sinh học.",
          },
        },
        {
          "@type": "Question",
          name: "Khuyên Titanium ASTM và nhựa sinh học Bioplast khác nhau thế nào?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Titanium ASTM là chất liệu đạt chuẩn dùng cho việc cấy ghép y tế, bền bỉ và lành tính cho cơ thể. Nhựa sinh học Bioplast nhẹ và có độ dẻo đàn hồi, giảm cảm giác cấn vướng khi vận động hoặc nằm ngủ.",
          },
        },
        {
          "@type": "Question",
          name: "Xỏ khuyên tại BR.INK Bà Rịa có dùng súng bấm không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Không. BR.INK sử dụng kim xỏ y tế vô trùng dùng một lần và căn chỉnh theo giải phẫu thực tế của từng khách hàng.",
          },
        },
        {
          "@type": "Question",
          name: "Sau khi xỏ khuyên cần lưu ý chăm sóc gì?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rửa tay sạch trước khi chạm vào vùng xỏ, vệ sinh đều đặn mỗi ngày, không tự ý xoay hoặc tháo khuyên sớm khi chưa lành hẳn và hạn chế va chạm mạnh hay ngâm nước lâu.",
          },
        },
      ],
    },
  ],
};

export default function PiercingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      {/* Header / Mở đầu trang */}
      <section className="border-b border-white/10 bg-black pt-24 pb-14 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-4 flex justify-center gap-4 font-playfair text-sm text-[#b8b8b8]">
            <Link href="/" className="hover:text-darkOrange transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-darkOrange">Xỏ Khuyên - Piercing</span>
          </div>

          <h1 className="font-rye text-2xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Dịch Vụ Xỏ Khuyên Nghệ Thuật &amp; Chuẩn Y Khoa Tại Bà Rịa
          </h1>

          <p className="mt-5 mx-auto max-w-3xl font-playfair text-base sm:text-lg text-[#b8b8b8] leading-relaxed">
            Thực hiện tại <strong className="text-white">BR.INK Piercing</strong> —{" "}
            <strong className="text-white">258 Cách Mạng Tháng 8, Phường Bà Rịa TP. HCM</strong>.
            Mỗi lỗ xỏ đều được đo đạc căn chỉnh theo giải phẫu thực tế, thao tác vô trùng và{" "}
            <strong className="text-white">giá đã bao gồm khuyên và xỏ</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-playfair">
            <a
              href="https://zalo.me/0907879789"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-darkOrange px-6 py-3 font-semibold text-black transition-opacity hover:opacity-90"
            >
              Đặt Lịch Qua Zalo (090.78.79.789)
            </a>
            <a
              href="tel:0907879789"
              className="rounded-lg border border-white/20 bg-[#191a22] px-6 py-3 text-white transition-colors hover:border-darkOrange"
            >
              Gọi Ngay: 090.78.79.789
            </a>
          </div>
        </div>
      </section>

      {/* Quy trình xỏ vô trùng bằng kim y tế chuyên dụng */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-[#191a22] p-6 sm:p-8">
          <h2 className="font-rye text-2xl sm:text-3xl text-darkOrange">
            Quy Trình Xỏ Vô Trùng Bằng Kim Y Tế Chuyên Dụng
          </h2>
          <p className="mt-4 font-playfair text-[#b8b8b8] leading-relaxed">
            BR.INK Piercing không dùng súng bấm để hạn chế lực ép mạnh làm tổn thương mô và đảm
            bảo vệ sinh tối đa cho từng khách hàng:
          </p>
          <ul className="mt-5 space-y-3 font-playfair text-[#e5e5e5] list-disc pl-5">
            <li>
              <strong>Kim y tế vô trùng dùng một lần:</strong> Mỗi ca xỏ đều sử dụng kim mới vô
              trùng riêng biệt, thao tác sạch sẽ và an toàn.
            </li>
            <li>
              <strong>Không dùng súng bấm:</strong> Đường kim chuẩn xác giúp giảm sưng đau không cần
              thiết và dễ chăm sóc hơn trong giai đoạn đầu.
            </li>
            <li>
              <strong>Căn chỉnh theo giải phẫu thực tế:</strong> Đánh dấu điểm xỏ dựa trên cấu trúc
              tai, mũi, chân mày, môi, lưỡi hoặc rốn của từng người trước khi thực hiện.
            </li>
          </ul>
        </div>
      </section>

      {/* Chất liệu khuyên an toàn */}
      <section className="container mx-auto max-w-5xl px-4 py-6">
        <h2 className="font-rye text-2xl sm:text-3xl text-darkOrange mb-6">
          Chất Liệu Khuyên An Toàn: Titanium ASTM &amp; Nhựa Sinh Học Bioplast
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#191a22] p-6">
            <h3 className="font-rye text-xl text-white">
              Khuyên Titanium ASTM (Chuẩn Dùng Cho Cấy Ghép)
            </h3>
            <p className="mt-3 font-playfair text-[#b8b8b8] leading-relaxed">
              Titanium ASTM là chất liệu đạt tiêu chuẩn dùng cho việc cấy ghép y tế, nổi bật với độ
              tương thích sinh học cao, bền chắc, chống ăn mòn tốt và hạn chế tối đa nguy cơ kích
              ứng cho mô cơ thể trong suốt quá trình đeo khuyên.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#191a22] p-6">
            <h3 className="font-rye text-xl text-white">Khuyên Nhựa Sinh Học Bioplast</h3>
            <p className="mt-3 font-playfair text-[#b8b8b8] leading-relaxed">
              Bioplast là dòng nhựa sinh học chuyên dụng cho piercing có trọng lượng rất nhẹ và độ
              dẻo đàn hồi linh hoạt, giúp giảm cấn vướng khi nằm ngủ, chơi thể thao hoặc vận động
              nhiều ở các vùng sụn tai, mũi, môi hay rốn.
            </p>
          </div>
        </div>
      </section>

      {/* Bảng giá chi tiết phân nhóm theo từng vị trí */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="font-rye text-2xl sm:text-3xl text-darkOrange">
          Bảng Giá Xỏ Khuyên Chi Tiết Tại BR.INK
        </h2>

        <p className="mt-4 rounded-xl border border-darkOrange/50 bg-[#191a22] px-4 py-3.5 font-playfair text-sm sm:text-base text-white leading-relaxed">
          <strong className="font-bold text-white">
            Tất cả mức giá dưới đây đã bao gồm khuyên và xỏ
          </strong>
          , bạn được lựa chọn giữa hai chất liệu khuyên{" "}
          <strong className="font-bold text-darkOrange">Titanium ASTM</strong> hoặc{" "}
          <strong className="font-bold text-darkOrange">nhựa sinh học</strong>.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#191a22]">
          <table className="w-full text-left font-playfair text-sm sm:text-base">
            <thead className="border-b border-white/10 bg-black/50 text-darkOrange">
              <tr>
                <th className="px-4 py-3.5">Vị trí xỏ</th>
                <th className="px-4 py-3.5">Ghi chú &amp; đặc điểm</th>
                <th className="px-4 py-3.5">Thời gian lành</th>
                <th className="px-4 py-3.5">Giá (đã gồm khuyên &amp; xỏ)</th>
              </tr>
            </thead>
            {piercingGroups.map((group) => (
              <tbody key={group.category} className="divide-y divide-white/10 text-[#e5e5e5]">
                <tr className="bg-black/70 border-t border-darkOrange/40">
                  <td
                    colSpan={4}
                    className="px-4 py-2.5 font-rye text-base sm:text-lg tracking-wider text-darkOrange"
                  >
                    {group.category}
                  </td>
                </tr>
                {group.items.map((item) => (
                  <tr key={item.name} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3.5 font-semibold text-white">{item.name}</td>
                    <td className="px-4 py-3.5 text-[#b8b8b8]">{item.style}</td>
                    <td className="px-4 py-3.5">{item.healing}</td>
                    <td className="px-4 py-3.5 text-darkOrange font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </section>

      {/* Hình ảnh thực tế các lỗ xỏ tại studio */}
      <section className="container mx-auto max-w-5xl px-4 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <div>
            <h2 className="font-rye text-2xl sm:text-3xl text-darkOrange">
              Hình Ảnh Các Vị Trí Lỗ Xỏ Thực Tế
            </h2>
            <p className="mt-2 font-playfair text-sm sm:text-base text-[#b8b8b8]">
              Hình ảnh thực tế các vị trí xỏ khuyên được thực hiện trực tiếp tại BR.INK Piercing.
            </p>
          </div>
          <Link
            href="/gallery"
            className="font-playfair text-sm text-darkOrange hover:underline"
          >
            Xem thêm tại Bộ sưu tập &rarr;
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {piercingGallery.map((photo) => (
            <div
              key={photo.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#191a22] transition-colors hover:border-darkOrange/60"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 font-playfair">
                <h3 className="text-base font-semibold text-white">{photo.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-darkOrange">{photo.material}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chăm sóc sau khi xỏ + Liên kết + CTA */}
      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-[#191a22] p-6 sm:p-8">
          <h2 className="font-rye text-2xl sm:text-3xl text-darkOrange">
            Chăm Sóc Sau Khi Xỏ Khuyên
          </h2>
          <ul className="mt-4 space-y-2.5 font-playfair text-[#e5e5e5] list-disc pl-5">
            <li>Rửa tay sạch trước khi chạm vào vùng xỏ và vệ sinh nhẹ nhàng mỗi ngày.</li>
            <li>Không tự ý xoay vặn, tháo hoặc thay khuyên quá sớm khi lỗ xỏ chưa lành hẳn.</li>
            <li>Hạn chế va chạm mạnh, nằm đè trực tiếp hoặc ngâm nước lâu khi mới xỏ.</li>
            <li>
              Nếu thấy sưng đau bất thường, đỏ lan rộng hoặc cần tư vấn thêm, hãy liên hệ ngay
              với BR.INK để được hỗ trợ.
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-darkOrange/40 bg-black/50 p-4 sm:p-5 font-playfair">
            <p className="text-white font-semibold">
              Xem thêm hướng dẫn chăm sóc &amp; mẫu thực tế:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-block rounded-lg border border-darkOrange px-4 py-2 text-sm text-darkOrange hover:bg-darkOrange hover:text-black transition-colors"
              >
                Bài Viết Chăm Sóc Trên Blog
              </Link>
              <Link
                href="/gallery"
                className="inline-block rounded-lg border border-white/15 px-4 py-2 text-sm text-[#e5e5e5] hover:border-darkOrange transition-colors"
              >
                Xem Bộ Sưu Tập Hình Ảnh
              </Link>
            </div>
          </div>

          {/* CTA cuối trang */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="font-playfair">
              <p className="text-white font-semibold">
                BR.INK Piercing — 258 Cách Mạng Tháng 8, Phường Bà Rịa TP. HCM
              </p>
              <p className="text-sm text-[#b8b8b8]">
                Hotline / Zalo: 090.78.79.789 • Giá đã bao gồm khuyên và xỏ
              </p>
            </div>
            <div className="flex gap-3 font-playfair">
              <a
                href="https://zalo.me/0907879789"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-darkOrange px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
              >
                Đặt Lịch Zalo
              </a>
              <Link
                href="/"
                className="rounded-lg border border-white/20 px-5 py-2.5 text-sm text-white hover:border-darkOrange transition-colors"
              >
                Trang Chủ BR.INK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema JSON-LD riêng cho trang dịch vụ & FAQ */}
      <Script
        id="json-ld-piercing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdServiceAndFaq),
        }}
      />

      <Footer />
    </main>
  );
}