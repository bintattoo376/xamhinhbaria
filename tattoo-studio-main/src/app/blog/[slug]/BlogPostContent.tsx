'use client';

import { blogPosts, featuredPost } from '@/data/dataBlog';
import Footer from '@/components/sections/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogPostContent() {
  const { t, lang } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const isPiercingCarePost = slug === 'huong-dan-cham-soc-xo-khuyen-dung-cach';
  const isPiercingAddressPost = slug === 'dia-chi-xo-khuyen-ba-ria-an-toan-khong-dau-chuan-y-khoa';
  const isFirstTattooPost = slug === 'cach-chuan-bi-cho-buoi-xam-hinh-dau-tien';

  return (
    <>
      <main className="min-h-screen bg-bgAlpha pb-24">
        <PageHeader
          navigationLabel={t("blogNav")}
          secondaryHref="/blog"
          secondaryLabel={t("backToBlog")}
        />

        <article className="container max-w-[800px] pt-12 sm:pt-16">
          <span className="font-playfair text-[14px] font-semibold uppercase tracking-[0.2em] text-darkOrange">
            {post.category[lang]}
          </span>

          <h1 className="mt-4 text-balance font-rye text-[32px] leading-tight text-white sm:text-[48px] lg:text-[56px]">
            {post.title[lang]}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-[14px] text-[#b8b8b8]">
            <span>{post.date[lang]}</span>
            <span>•</span>
            <span>{post.readTime[lang]}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-card border border-white/10">
            <Image
              src={post.image}
              alt={post.imageAlt[lang]}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-10 font-playfair text-[17px] leading-relaxed text-[#d1d1d1] space-y-8 sm:text-[18px]">
            {isPiercingAddressPost ? (
              /* --- NỘI DUNG BÀI VIẾT: ĐỊA CHỈ XỎ KHUYÊN BÀ RỊA AN TOÀN --- */
              <>
                <p className="font-semibold text-white text-lg">
                  Xỏ khuyên nghệ thuật không chỉ là một điểm nhấn cá tính mà còn đòi hỏi sự chuẩn xác về kỹ thuật y tế để đảm bảo an toàn tối đa cho cơ thể. Tại BR.INK Studio Bà Rịa, mọi quy trình đều được thực hiện theo tiêu chuẩn khắt khe nhất.
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">1. Quy Trình Xỏ Khuyên Chuẩn Y Khoa Tại BR.INK</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li><strong>Sử dụng kim chuyên dụng độc lập:</strong> Mỗi khách hàng sử dụng một kim xỏ mới hoàn toàn, tiệt trùng riêng biệt để loại bỏ tuyệt đối nguy cơ lây nhiễm.</li>
                    <li><strong>Vô khuẩn dụng cụ tối đa:</strong> Kẹp, kìm và các thiết bị hỗ trợ đều trải qua hệ thống lò hấp tiệt trùng chuyên dụng đạt chuẩn y tế.</li>
                    <li><strong>Thao tác nhẹ nhàng:</strong> Kỹ thuật xỏ chuyên nghiệp giúp giảm thiểu tối đa cảm giác đau và hạn chế sưng tấy.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">2. Vì Sao Chất Liệu Khuyên Titanium Là Ưu Tiên Hàng Đầu?</h2>
                  <p className="text-[#d1d1d1]">
                    Chất liệu khuyên đóng vai trò quyết định đến tốc độ lành vết thương. Tại BR.INK, chúng tôi sử dụng độc quyền các dòng khuyên làm từ <strong>Titanium y tế cao cấp</strong>:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Trọng lượng siêu nhẹ, không gây nặng tai hoặc kích ứng da nhạy cảm.</li>
                    <li>Tương thích sinh học tuyệt đối với cơ thể người, không bị oxy hóa hay thôi nhiễm kim loại.</li>
                    <li>Giúp lỗ xỏ nhanh ổn định và rút ngắn thời gian hồi phục đáng kể.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">3. Các Vị Trí Xỏ Khuyên Phổ Biến & Được Yêu Thích Nhất</h2>
                  <p className="text-[#d1d1d1]">
                    Studio hỗ trợ đa dạng các vị trí từ cơ bản đến phức tạp, được đo vẽ tỷ lệ vàng chuẩn xác theo giải phẫu tai từng người:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[#d1d1d1] pt-2">
                    <span>• Lobe (Dái tai)</span>
                    <span>• Helix (Vành tai)</span>
                    <span>• Flat (Phẳng vành tai)</span>
                    <span>• Conch (Hốc tai)</span>
                    <span>• Tragus (Sụn bình tai)</span>
                    <span>• Daith & Rook</span>
                    <span>• Industrial (Xỏ ngang)</span>
                  </div>
                </div>

                {/* Liên kết nội bộ 1: Trỏ qua bài viết hướng dẫn chăm sóc */}
                <div className="rounded-2xl bg-darkOrange/10 border border-darkOrange/40 p-6 space-y-3">
                  <h3 className="font-rye text-xl text-darkOrange">Bí Quyết Giúp Lỗ Xỏ Nhanh Lành</h3>
                  <p className="text-[#d1d1d1]">
                    Bên cạnh tay nghề thợ và chất liệu khuyên, cách vệ sinh hằng ngày quyết định đến 50% sự thành công của lỗ xỏ. Bạn có thể tham khảo chi tiết tại bài viết{' '}
                    <Link href="/blog/huong-dan-cham-soc-xo-khuyen-dung-cach" className="text-darkOrange underline hover:text-white transition-colors font-semibold">
                      Hướng Dẫn Chăm Sóc Xỏ Khuyên Đúng Cách Tại Nhà
                    </Link>{' '}
                    để nắm rõ các bước vệ sinh chuẩn y khoa.
                  </p>
                </div>

                {/* Liên kết nội bộ 2: Trỏ về trang liên hệ/đặt lịch */}
                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h3 className="font-rye text-xl text-white">Sẵn Sàng Thay Đổi Phong Cách Cùng BR.INK?</h3>
                  <p className="text-[#b8b8b8]">
                    Nếu bạn đang tìm kiếm một địa chỉ xỏ khuyên uy tín và an toàn tại Bà Rịa, hãy liên hệ ngay với chúng tôi hoặc{' '}
                    <Link href="/#contacts" className="text-darkOrange underline hover:text-white transition-colors font-semibold">
                      đặt lịch tư vấn trực tiếp tại BR.INK Studio
                    </Link>{' '}
                    để được đội ngũ chuyên viên hỗ trợ chu đáo nhất!
                  </p>
                </div>
              </>
            ) : isPiercingCarePost ? (
              /* --- NỘI DUNG CHĂM SÓC XỎ KHUYÊN --- */
              <>
                <p className="font-semibold text-white text-lg">
                  {t("piercingNotice")}
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">{t("importantNote")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("piercingRule1")}</li>
                    <li>{t("piercingRule2")}</li>
                    <li>{t("piercingRule3")}</li>
                    <li>{t("piercingRule4")}</li>
                    <li>{t("piercingRule5")}</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">{t("cleaningTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("clean1")}</li>
                    <li>{t("clean2")}</li>
                    <li>{t("clean3")}</li>
                    <li>{t("clean4")}</li>
                    <li>{t("clean5")}</li>
                    <li>{t("clean6")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">{t("dontTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("dont1")}</li>
                    <li>{t("dont2")}</li>
                    <li>{t("dont3")}</li>
                    <li>{t("dont4")}</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">{t("envTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("env1")}</li>
                    <li>{t("env2")}</li>
                    <li>{t("env3")}</li>
                    <li>{t("env4")}</li>
                    <li>{t("env5")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-darkOrange">{t("jewelryTitle")}</h2>
                  <p className="text-[#d1d1d1]">
                    {t("jewelryText")}
                  </p>
                  <p className="text-white font-semibold pt-2">{t("dietTitle")}</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                    <li>{t("diet1")}</li>
                    <li>{t("diet2")}</li>
                    <li>{t("diet3")}</li>
                    <li>{t("diet4")}</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">{t("healingTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("heal1")}</li>
                    <li>{t("heal2")}</li>
                    <li>{t("heal3")}</li>
                    <li>{t("heal4")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">{t("locationsTitle")}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[#d1d1d1]">
                    <span>• Helix</span>
                    <span>• Forward Helix</span>
                    <span>• Mid Helix</span>
                    <span>• Outer Helix</span>
                    <span>• Rook</span>
                    <span>• Daith</span>
                    <span>• Tragus</span>
                    <span>• Anti-Tragus</span>
                    <span>• Conch</span>
                    <span>• Orbital</span>
                    <span>• Industrial</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-darkOrange/10 border border-darkOrange/40 p-6 space-y-2">
                  <h3 className="font-rye text-xl text-darkOrange">{t("piercingQuickRuleTitle")}</h3>
                  <p className="text-[#d1d1d1]">
                    {t("piercingQuickRuleDesc")}
                  </p>
                </div>
              </>
            ) : isFirstTattooPost ? (
              /* --- NỘI DUNG BÀI VIẾT: CÁCH CHUẨN BỊ CHO BUỔI XĂM ĐẦU TIÊN --- */
              <>
                <p className="font-semibold text-white text-lg">
                  Buổi xăm hình đầu tiên luôn mang lại nhiều cảm xúc hồi hộp và hào hứng. Tuy nhiên, một tác phẩm hoàn hảo không chỉ đến từ tay nghề của thợ xăm mà còn phụ thuộc rất nhiều vào sự chuẩn bị kỹ lưỡng của bạn trước khi bước chân lên bàn xăm tại BR.INK Studio Bà Rịa.
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">{t("firstTattooTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("firstTattooDesc1")}</li>
                    <li>{t("firstTattooDesc2")}</li>
                    <li>{t("firstTattooDesc3")}</li>
                    <li>{t("firstTattooDesc4")}</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">{t("tabooTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("tabooDesc1")}</li>
                    <li>{t("tabooDesc2")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">{t("bringTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("bringDesc1")}</li>
                    <li>{t("bringDesc2")}</li>
                    <li>{t("bringDesc3")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-darkOrange/10 border border-darkOrange/40 p-6 space-y-2">
                  <h3 className="font-rye text-xl text-darkOrange">{t("firstTattooAdviceTitle")}</h3>
                  <p className="text-[#d1d1d1]">
                    {t("firstTattooAdviceDesc")}
                  </p>
                </div>
              </>
            ) : (
              /* --- NỘI DUNG CHĂM SÓC HÌNH XĂM MẶC ĐỊNH & TỐI ƯU TỪ KHÓA DÀI --- */
              <>
                <p className="font-semibold text-white text-lg">
                  {t("tattooCareIntro")}
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">Hướng Dẫn Vệ Sinh Và Cách Vệ Sinh Hình Xăm Đúng Cách</h2>
                  <ol className="list-decimal pl-5 space-y-2 text-[#d1d1d1]">
                    <li>{t("tattooCareStep1")}</li>
                    <li>{t("tattooCareStep2")}</li>
                    <li>{t("tattooCareStep3")}</li>
                    <li>{t("tattooCareStep4")}</li>
                    <li>{t("tattooCareStep5")}</li>
                    <li>{t("tattooCareStep6")}</li>
                    <li>{t("tattooCareStep7")}</li>
                    <li>{t("tattooCareStep8")}</li>
                    <li>{t("tattooCareStep9")}</li>
                    <li>{t("tattooCareStep10")}</li>
                  </ol>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">{t("roadmapTitle")}</h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">{t("phase1Title")}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>{t("phase1Desc1")}</li>
                        <li>{t("phase1Desc2")}</li>
                        <li>{t("phase1Desc3")}</li>
                        <li>{t("phase1Desc4")}</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">{t("phase2Title")}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>{t("phase2Desc1")}</li>
                        <li>{t("phase2Desc2")}</li>
                        <li>{t("phase2Desc3")}</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">{t("phase3Title")}</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>{t("phase3Desc1")}</li>
                        <li>{t("phase3Desc2")}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-white">{t("tattooDietTitle")}</h2>
                  <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                    <li>{t("dietStickyRice")}</li>
                    <li>{t("dietBeef")}</li>
                    <li>{t("dietChicken")}</li>
                    <li>{t("dietWaterSpinach")}</li>
                    <li>{t("dietSeafood")}</li>
                    <li>{t("dietEggs")}</li>
                    <li>{t("dietAlcohol")}</li>
                    <li>{t("dietSpicy")}</li>
                  </ul>

                  {/* Khung Quy tắc nhớ nhanh màu cam */}
                  <div className="mt-6 rounded-2xl bg-darkOrange/10 border border-darkOrange/40 p-6 space-y-2">
                    <h3 className="font-rye text-xl text-darkOrange">{t("quickRuleTitle")}</h3>
                    <p className="text-white font-semibold">
                      &ldquo;{t("quickRuleDesc")}&rdquo;
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="mt-8 rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="font-rye text-xl text-white mb-2">{t("contactConsultTitle")}</h3>
              <p className="text-[#b8b8b8] text-sm">
                {t("contactConsultDesc")}
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}