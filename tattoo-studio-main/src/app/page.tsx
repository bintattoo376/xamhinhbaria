import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Choose from '../components/sections/Choose';
import Contacts from '../components/sections/Contacts';
import Footer from '../components/sections/Footer';

export const metadata = {
  title: 'Xăm Hình & Xỏ Khuyên Bà Rịa Uy Tín - BÀ RỊA INK',
  description: 'Tiệm xăm hình nghệ thuật và xỏ khuyên an toàn hàng đầu tại Bà Rịa Vũng Tàu. Thiết kế độc bản, chuẩn y tế, nghệ sĩ tay nghề cao. Đặt lịch: 0907 879 567.',
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      {/* Thẻ H1 ẩn hoặc hiển thị phục vụ SEO từ khóa chính ngay đầu trang */}
      <div className="sr-only">
        <h1>BÀ RỊA INK - Tiệm Xăm Hình & Xỏ Khuyên Uy Tín Nhất Tại Bà Rịa Vũng Tàu</h1>
      </div>

      {/* Khu vực Hero Section chứa tiêu đề chính và các nút CTA */}
      <Hero />

      {/* Phần giới thiệu studio */}
      <About />

      {/* Các dịch vụ xăm hình và xỏ khuyên */}
      <Services />

      {/* Đoạn văn bản bổ sung tối ưu từ khóa SEO địa phương (Local SEO) */}
      <section className="container mx-auto px-4 py-8 max-w-4xl text-center">
        <h2 className="text-xl sm:text-2xl font-rye text-darkOrange mb-3">
          Địa Chỉ Xăm Nghệ Thuật & Xỏ Khuyên Chuẩn Y Tế Tại Bà Rịa
        </h2>
        <p className="font-playfair text-[#b8b8b8] text-sm sm:text-base leading-relaxed">
          Nếu bạn đang tìm kiếm một <strong>tiệm xăm uy tín tại Bà Rịa</strong> hay địa chỉ <strong>xỏ khuyên an toàn ở Vũng Tàu</strong>, 
          BÀ RỊA INK là điểm đến hàng đầu. Chúng tôi cung cấp dịch vụ xăm độc bản (Custom Tattoo), xử lý cover hình xăm cũ và xỏ khuyên chuẩn y tế với trang sức Titanium cao cấp.
        </p>
      </section>

      {/* Đội ngũ nghệ sĩ */}
      <Team />

      {/* Lý do chọn BR.INK */}
      <Choose />

      {/* Thông tin liên hệ và bản đồ */}
      <Contacts />

      {/* Chân trang */}
      <Footer />
    </main>
  );
}