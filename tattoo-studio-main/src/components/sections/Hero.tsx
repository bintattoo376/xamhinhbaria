'use client';
import { useState } from 'react';
import { TbMenuDeep } from 'react-icons/tb';
import Navbar from '../ui/Navbar';
import Logo from '../../../public/icons/logo.png';
import Modal from '../ui/Modal';
import MobileMenu from '../ui/MobileMenu';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <section className="relative isolate min-h-[780px] w-full overflow-hidden bg-heroMobile bg-cover bg-center sm:min-h-[1024px] sm:bg-heroTablet lg:min-h-[860px] lg:bg-heroDesktop">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,11,17,0.94)_0%,rgba(7,11,17,0.76)_34%,rgba(7,11,17,0.16)_68%,rgba(7,11,17,0.08)_100%)]"
      />
      <div className="container relative z-10">
        <header className="flex h-20 items-center justify-between lg:h-24">
          <a
            href="#"
            aria-label="BÀ RỊA INK Tattoo Studio home"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <img src="/icons/logo.png" alt="BR.INK Logo" width={44} height={44} className="object-contain" aria-hidden="true" />
          </a>
          <Navbar />
          <button
            className="rounded-sm text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange sm:hidden"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation"
          >
            <TbMenuDeep className="text-white hover:text-darkOrange w-[40px] h-[40px]" />
          </button>
        </header>

        <div className="mx-auto flex max-w-[850px] flex-col items-center pt-[340px] text-center sm:mx-0 sm:items-start sm:pt-[460px] sm:text-left lg:pt-24">
          {/* Tiêu đề chính chuẩn SEO chứa thương hiệu và dịch vụ cốt lõi */}
          <h1 className="font-rye text-[32px] font-normal leading-tight text-white sm:max-w-[700px] sm:text-[56px] sm:leading-[1.1] lg:max-w-[850px] lg:text-[72px]">
            <span className="text-darkOrange">BÀ RỊA</span> INK - Studio Xăm Nghệ Thuật & Xỏ Khuyên Chuyên Nghiệp
          </h1>

          {/* Mô tả phụ mở rộng từ khóa địa phương và dịch vụ */}
          <p className="mt-6 max-w-[500px] font-playfair text-[18px] leading-relaxed text-neutral-300 sm:mt-6 sm:text-[20px] lg:text-[22px]">
            {t("heroDesc")}
          </p>

          {/* Cụm nút CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto lg:mt-10">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex min-h-14 w-full sm:w-auto sm:min-w-[240px] items-center justify-center rounded-full border-2 border-darkOrange bg-darkOrange px-8 text-[20px] text-black font-semibold transition-colors hover:bg-transparent hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black lg:text-[22px]"
            >
              {t("bookNow")}
            </button>

            <a
              href="/gallery"
              className="flex min-h-14 w-full sm:w-auto sm:min-w-[240px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-[20px] text-white font-semibold transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black lg:text-[22px]"
            >
              {t("viewGallery")}
            </a>
          </div>
        </div>
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
};

export default Hero;