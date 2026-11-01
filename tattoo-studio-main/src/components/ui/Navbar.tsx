'use client';

import Link from 'next/link';
import { navLinks } from '../../data/dataLinks';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="hidden sm:flex items-center gap-6 lg:gap-8">
      <nav aria-label="Main navigation">
        <div className="flex items-center gap-8 lg:gap-10">
          {navLinks.map(({ id, href }) => {
            const isExternal = href === 'gallery' || href === 'blog';
            const className =
              'cursor-pointer rounded-sm font-playfair text-[18px] font-medium leading-8 text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black lg:text-[20px]';

            // Ép kiểu (as any) để TypeScript bỏ qua kiểm tra khóa nghiêm ngặt nhưng vẫn chạy mượt mà
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

      {/* Nút chuyển đổi ngôn ngữ VI / EN */}
      <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-2.5 py-1">
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