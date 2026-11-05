'use client';

import Link from 'next/link';
import { navLinks } from '../../data/dataLinks';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
      {/* Ẩn danh sách menu trên mobile nếu trang web dùng menu mobile riêng (Hamburger), 
          nhưng GIỮ LẠI nút chuyển ngữ bên dưới hiển thị trên mọi thiết bị */}
      <nav aria-label="Main navigation" className="hidden sm:block">
        <div className="flex items-center gap-6 lg:gap-10">
          {navLinks.map(({ id, href }) => {
            const isExternal = href === 'gallery' || href === 'blog';
            const className =
              'cursor-pointer rounded-sm font-playfair text-[16px] lg:text-[18px] font-medium leading-8 text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black';

            const translationKey = href as any;

            return isExternal ? (
              <Link
                key={id}
                href={`/${href}`}
                className={className}
              >
                {t(translationKey)}
              </Link>
            ) : (
              <a
                key={id}
                href={`#${href}`}
                className={className}
              >
                {t(translationKey)}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Nút chuyển đổi ngôn ngữ VI / EN - Luôn hiển thị trên mọi thiết bị (cả PC và điện thoại) */}
      <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1 shadow-sm">
        <button
          onClick={() => setLang("vi")}
          className={`px-2 py-0.5 text-xs font-bold rounded transition-colors ${
            lang === "vi" ? "bg-amber-500 text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          VI
        </button>
        <span className="text-neutral-600">|</span>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 text-xs font-bold rounded transition-colors ${
            lang === "en" ? "bg-amber-500 text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default Navbar;