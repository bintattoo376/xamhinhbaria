'use client';
import Link from 'next/link';
import ServiceCard from '../ui/ServiceCard';
import { dataServices } from '../../data/dataServices';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section-shell bg-black">
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          {t("servicesTitle")}
        </h2>
        <div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dataServices.map(({ id, imageSrc, title, text, href }) => (
              <ServiceCard
                key={id}
                imageSrc={imageSrc}
                title={title}
                text={text}
                href={href}
              />
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-center font-playfair">
          <Link
            href="/xo-khuyen-piercing"
            className="rounded-lg bg-darkOrange px-6 py-3 text-sm sm:text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Xem Bảng Giá Xỏ Khuyên
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;