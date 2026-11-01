'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';
import PageHeader from '@/components/ui/PageHeader';
import ImageModal from '@/components/ui/ImageModal';
import { useLanguage } from '@/context/LanguageContext';

// Danh sách tác phẩm đã được sắp xếp chuẩn xác 100% theo đúng tên file ảnh bạn cung cấp
const galleryItems = [
  {
    id: 1,
    src: '/images/06-tattoo.jpg',
    alt: {
      vi: 'Hình xăm chân dung em bé trai phong cách màu sắc',
      en: 'Baby boy portrait tattoo in color style',
    },
    caption: {
      vi: 'Hình xăm chân dung em bé trai phong cách màu sắc đầy cảm xúc.',
      en: 'Emotional and colorful baby boy portrait tattoo.',
    },
  },
  {
    id: 2,
    src: '/images/08-tattoo.jpg',
    alt: {
      vi: 'Hình xăm chân dung bé gái đáng yêu',
      en: 'Adorable baby girl portrait tattoo',
    },
    caption: {
      vi: 'Hình xăm chân dung màu bé gái đáng yêu tại BR.INK Studio.',
      en: 'Adorable baby girl color portrait tattoo at BR.INK Studio.',
    },
  },
  {
    id: 3,
    src: '/images/01-tattoo.jpg',
    alt: {
      vi: 'Hình xăm mini dễ thương với ba chú mèo trong hộp giấy',
      en: 'Cute mini tattoo with three cats in a paper box',
    },
    caption: {
      vi: 'Hình xăm mini dễ thương với ba chú mèo trong hộp giấy.',
      en: 'Cute mini tattoo with three cats in a paper box.',
    },
  },
  {
    id: 4,
    src: '/images/03-piercing.jpg',
    alt: {
      vi: 'Dịch vụ xỏ khuyên tai chuyên nghiệp chuẩn y tế',
      en: 'Professional medical-grade ear piercing service',
    },
    caption: {
      vi: 'Dịch vụ xỏ khuyên chuyên nghiệp, sử dụng trang sức Titanium cao cấp.',
      en: 'Professional piercing service using high-end Titanium jewelry.',
    },
  },
  {
    id: 5,
    src: '/images/04-tattoo.jpg',
    alt: {
      vi: 'Tác phẩm xăm chân dung Tượng Nữ thần Tự do tả thực đen xám',
      en: 'Statue of Liberty black and grey realism tattoo artwork',
    },
    caption: {
      vi: 'Tác phẩm xăm chân dung Tượng Nữ thần Tự do tả thực đen xám sắc nét.',
      en: 'Statue of Liberty black and grey realism tattoo masterpiece.',
    },
  },
  {
    id: 6,
    src: '/images/05-tattoo.jpg',
    alt: {
      vi: 'Tác phẩm cover hình xăm cũ thành mẫu mới hoàn hảo',
      en: 'Flawless cover-up tattoo transforming old work',
    },
    caption: {
      vi: 'Giải pháp cover-up và xử lý hình xăm cũ hoàn hảo tại BR.INK.',
      en: 'Flawless cover-up and old tattoo restoration at BR.INK.',
    },
  },
  {
    id: 7,
    src: '/images/09-tattoo.jpg',
    alt: {
      vi: 'Tác phẩm cover hình xăm cũ thành Phượng hoàng lửa và hoa mẫu đơn',
      en: 'Cover-up tattoo transforming old work into Fire Phoenix and peony',
    },
    caption: {
      vi: 'Tác phẩm cover hình xăm cũ thành Phượng hoàng lửa và hoa mẫu đơn sắc nét.',
      en: 'Sharp cover-up transforming old work into Fire Phoenix and peony flowers.',
    },
  },
  {
    id: 8,
    src: '/images/10-tattoo.jpg',
    alt: {
      vi: 'Hình xăm nhân vật Trư Bát Giới độc bản',
      en: 'Unique Zhu Bajie character tattoo',
    },
    caption: {
      vi: 'Hình xăm nhân vật Trư Bát Giới kết hợp các mốc năm sinh ý nghĩa.',
      en: 'Zhu Bajie character tattoo combined with meaningful milestones.',
    },
  },
  {
    id: 9,
    src: '/images/07-tattoo.jpg',
    alt: {
      vi: 'Hình xăm tả thực đầu sư tử trắng đen full lưng',
      en: 'Lion head black and grey realism full back tattoo',
    },
    caption: {
      vi: 'Hình xăm tả thực đầu sư tử trắng đen full lưng dũng mãnh tại BR.INK Studio.',
      en: 'Lion head black and grey realism full back tattoo at BR.INK Studio.',
    },
  },
  {
    id: 10,
    src: '/images/02-tattoo.jpg',
    alt: {
      vi: 'Hình xăm chữ nghệ thuật phong cách 3D ở cổ độc đáo',
      en: 'Unique 3D style lettering tattoo on the neck',
    },
    caption: {
      vi: 'Hình xăm chữ nghệ thuật phong cách 3D tại vùng cổ độc đáo.',
      en: 'Unique 3D style artistic lettering tattoo on the neck.',
    },
  },
  {
    id: 11,
    src: '/images/03-tattoo.jpg',
    alt: {
      vi: 'Hình xăm thanh gươm và chữ ký fine-line tinh xảo trên cẳng tay',
      en: 'Intricate fine-line sword and signature tattoo on forearm',
    },
    caption: {
      vi: 'Hình xăm thanh gươm và chữ ký fine-line tinh xảo trên cẳng tay.',
      en: 'Intricate fine-line sword and signature tattoo on forearm.',
    },
  },
  {
    id: 12,
    src: '/images/11-tattoo.jpg',
    alt: {
      vi: 'Hình xăm thần biển Poseidon phong cách tả thực đen xám kín tay',
      en: 'Poseidon full sleeve black and grey realism tattoo',
    },
    caption: {
      vi: 'Hình xăm thần biển Poseidon phong cách tả thực đen xám kín tay đẳng cấp.',
      en: 'Poseidon full sleeve black and grey realism tattoo masterpiece.',
    },
  },
  {
    id: 13,
    src: '/images/12-tattoo.jpg',
    alt: {
      vi: 'Hình xăm nhân vật Joker tả thực phối màu độc đáo',
      en: 'Joker character realistic tattoo with unique color blending',
    },
    caption: {
      vi: 'Hình xăm nhân vật Joker tả thực phối màu độc đáo trên tay.',
      en: 'Realistic Joker character tattoo with unique color blending.',
    },
  },
];

export default function GalleryContent() {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <>
      <main className="min-h-screen bg-bgAlpha">
        <PageHeader
          navigationLabel="Điều hướng bộ sưu tập"
          secondaryHref="/blog"
          secondaryLabel="Bài viết"
        />

        <section className="container pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto mb-10 max-w-[720px] text-center sm:mb-14">
            <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.24em] text-darkOrange sm:text-[16px]">
              Tác Phẩm Nổi Bật
            </p>
            <h1 className="mt-4 text-balance font-rye text-[42px] leading-tight text-white sm:text-[64px] lg:text-[76px]">
              Bộ Sưu Tập
            </h1>
            <p className="mx-auto mt-6 max-w-[600px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8] sm:text-[20px]">
              Cái nhìn cận cảnh về đường nét, cá tính và tâm huyết đằng sau những tác phẩm xăm mới nhất của chúng tôi.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage({
                  src: item.src,
                  alt: item.alt[lang] || item.alt.vi,
                  caption: item.caption[lang] || item.caption.vi,
                })}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] cursor-pointer shadow-card transition-all duration-300 hover:border-darkOrange/50"
              >
                <Image
                  src={item.src}
                  alt={item.alt[lang] || item.alt.vi}
                  fill
                  sizes="(min-width: 1440px) 440px, (min-width: 834px) calc(50vw - 46px), calc(100vw - 32px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <span className="font-playfair text-white text-base font-medium translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    {item.caption[lang] || item.caption.vi}
                  </span>
                  <span className="font-playfair text-darkOrange text-xs mt-1 uppercase tracking-wider">
                    {lang === 'vi' ? 'Click để phóng to xem chi tiết' : 'Click to zoom in'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        caption={selectedImage?.caption || ''}
      />

      <Footer />
    </>
  );
}