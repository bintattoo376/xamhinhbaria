import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/#about', label: 'Về chúng tôi' },
  { href: '/#services', label: 'Dịch vụ' },
  { href: '/#artists', label: 'Nghệ sĩ' },
  { href: '/gallery', label: 'Bộ sưu tập' },
  { href: '/blog', label: 'Bài viết' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          <div className="max-w-[420px]">
            <Link
              href="/"
              aria-label="BÀ RỊA INK Tattoo Studio home"
              className="inline-flex items-center gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
            >
              <div className="relative w-[44px] h-[44px] flex-shrink-0">
                <Image
                  src="/icons/logo.png"
                  alt="BR.INK Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-rye text-[22px] text-white">
                BÀ RỊA INK Tattoo Studio
              </span>
            </Link>
            <p className="mt-5 font-playfair text-[16px] leading-relaxed text-[#a8a8a8]">
              Chuyên xăm nghệ thuật độc bản, xỏ khuyên chuyên nghiệp, xử lý cover hình xăm cũ và tư vấn xóa xăm tại Bà Rịa.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-rye text-[20px] text-white">Khám phá</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-rye text-[20px] text-white">Liên hệ</h2>
            <address className="mt-5 flex flex-col gap-3 not-italic">
              <a
                href="mailto:Bintatto376@gmail.com"
                className="break-all font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
              >
                Bintatto376@gmail.com
              </a>
              <a
                href="tel:0907879567"
                className="font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
              >
                0907 879 567
              </a>
              <span className="font-playfair text-[16px] text-[#b8b8b8]">
                258 Cách Mạng Tháng 8, P. Bà Rịa
              </span>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="font-playfair text-[14px] text-[#888888]">
            © {currentYear} BÀ RỊA INK Tattoo Studio. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;