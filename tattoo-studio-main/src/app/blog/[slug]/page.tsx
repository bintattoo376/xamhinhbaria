import { blogPosts, featuredPost } from '@/data/dataBlog';
import Footer from '@/components/sections/Footer';
import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const allPosts = [featuredPost, ...blogPosts];
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Kiểm tra chính xác slug của bài xỏ khuyên
  const isPiercingPost = resolvedParams.slug === 'huong-dan-cham-soc-xo-khuyen-dung-cach';

  return (
    <>
      <main className="min-h-screen bg-bgAlpha pb-24">
        <PageHeader
          navigationLabel="Điều hướng blog"
          secondaryHref="/blog"
          secondaryLabel="Quay lại Blog"
        />

        <article className="container max-w-[800px] pt-12 sm:pt-16">
          <span className="font-playfair text-[14px] font-semibold uppercase tracking-[0.2em] text-darkOrange">
            {post.category}
          </span>

          <h1 className="mt-4 text-balance font-rye text-[32px] leading-tight text-white sm:text-[48px] lg:text-[56px]">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-[14px] text-[#b8b8b8]">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-card border border-white/10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-10 font-playfair text-[17px] leading-relaxed text-[#d1d1d1] space-y-8 sm:text-[18px]">
            {isPiercingPost ? (
              /* --- NỘI DUNG CHĂM SÓC XỎ KHUYÊN --- */
              <>
                <p className="font-semibold text-white text-lg">
                  Lỗ xỏ mới cần được chăm sóc đúng cách trong suốt quá trình hồi phục. Lưu ý, trang này không cung cấp chẩn đoán y tế.
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">CHÚ Ý QUAN TRỌNG</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Không tự ý tháo hoặc thay khuyên.</li>
                    <li>Rửa tay trước khi chạm vào lỗ xỏ.</li>
                    <li>Không xoay, kéo hoặc xê dịch khuyên không cần thiết.</li>
                    <li>Giữ lỗ xỏ sạch và khô.</li>
                    <li>Tránh va chạm, ma sát và nằm đè lên vị trí xỏ.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">VỆ SINH LỖ XỎ</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Vệ sinh 2-3 lần mỗi ngày trong 15-30 ngày đầu.</li>
                    <li>Rửa tay sạch trước khi vệ sinh.</li>
                    <li>Dùng dung dịch vệ sinh chuyên dụng theo hướng dẫn của BR.INK.</li>
                    <li>Làm sạch nhẹ nhàng xung quanh lỗ xỏ, không chà xát mạnh.</li>
                    <li>Không cạy hoặc bóc phần dịch khô, không xoay khuyên khi vệ sinh.</li>
                    <li>Sau khi vệ sinh giữ vùng xỏ sạch và khô.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">NHỮNG ĐIỀU KHÔNG NÊN LÀM</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Không sờ tay khi chưa rửa tay.</li>
                    <li>Không xoay hoặc kéo khuyên, không tự ý tháo hay thay khuyên quá sớm.</li>
                    <li>Không dùng cồn, oxy già hoặc hóa chất mạnh, không bôi sản phẩm không rõ nguồn gốc.</li>
                    <li>Không để tóc, quần áo, khẩu trang, tai nghe hoặc mũ bảo hiểm cọ vào lỗ xỏ.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">SINH HOẠT & MÔI TRƯỜNG</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Hạn chế vận động mạnh và ra quá nhiều mồ hôi, tránh va đập hoặc kéo vào khuyên.</li>
                    <li>Không nằm đè lên vị trí xỏ, giữ gối, khăn và quần áo sạch.</li>
                    <li>Hạn chế tai nghe hoặc vật dụng tạo áp lực lên lỗ xỏ.</li>
                    <li>Hạn chế ngâm nước lâu và bơi khi lỗ xỏ chưa hồi phục.</li>
                    <li>Không để mỹ phẩm, nước hoa hoặc hóa chất tiếp xúc trực tiếp với lỗ xỏ. Sau khi tắm nhớ làm khô nhẹ nhàng.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-darkOrange">TRANG SỨC & KIÊNG CỮ</h2>
                  <p className="text-[#d1d1d1]">
                    <strong className="text-white">Trang sức:</strong> BR.INK ưu tiên sử dụng Titanium phù hợp cho lỗ xỏ mới. Không tự ý thay đổi trang sức. Nếu khuyên quá chật, bị lún vào da hoặc có dấu hiệu bất thường, hãy liên hệ BR.INK.
                  </p>
                  <p className="text-white font-semibold pt-2">Ăn uống và kiêng cữ:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                    <li>Ăn đủ protein, rau xanh, trái cây và uống đủ nước.</li>
                    <li><strong className="text-white">Thịt bò, đồ nếp, hải sản:</strong> Kiêng 1–2 tuần (hải sản đặc biệt kiêng nếu có tiền sử dị ứng).</li>
                    <li><strong className="text-white">Rau muống:</strong> Kiêng 2–4 tuần.</li>
                    <li>Hạn chế rượu bia trong giai đoạn đầu.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">HỒI PHỤC & DẤU HIỆU CẦN LƯU Ý</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[#d1d1d1]">
                    <li><strong className="text-white">Thời gian hồi phục:</strong> Phụ thuộc vào vị trí xỏ, cơ địa, chất liệu trang sức. Không tự ý thay khuyên chỉ vì bên ngoài nhìn có vẻ lành.</li>
                    <li><strong className="text-white">Biểu hiện thường gặp:</strong> Đỏ nhẹ, sưng nhẹ, hơi đau, nhạy cảm, ngứa nhẹ hoặc có một lượng nhỏ dịch trong/dịch khô. Không nặn, bóp hoặc cạy.</li>
                    <li><strong className="text-white">Dấu hiệu cần liên hệ BR.INK:</strong> Sưng/đau tăng dần, đỏ lan rộng, dịch bất thường, khuyên lún vào da, xuất hiện cục bất thường hoặc nghi ngờ dị ứng.</li>
                    <li><strong className="text-white">Khi nào cần hỗ trợ y tế:</strong> Đau dữ dội, sưng nhiều, đỏ lan nhanh, có mủ, sốt hoặc ớn lạnh, khó thở. Không tự ý dùng kháng sinh hoặc thuốc chống viêm.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-3">
                  <h2 className="font-rye text-2xl text-white">CÁC VỊ TRÍ XỎ TẠI BR.INK</h2>
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
                  <h3 className="font-rye text-xl text-darkOrange">QUY TẮC NHỚ NHANH</h3>
                  <p className="text-[#d1d1d1]">
                    Rửa tay trước khi chạm • Vệ sinh đúng cách • Không xoay khuyên • Không tháo khuyên quá sớm • Tránh va chạm và ma sát • Giữ vùng xỏ sạch và khô • Kiên nhẫn trong suốt quá trình hồi phục.
                  </p>
                </div>
              </>
            ) : (
              /* --- NỘI DUNG CHĂM SÓC HÌNH XĂM (GIỮ NGUYÊN) --- */
              <>
                <p className="font-semibold text-white text-lg">
                  Chào mừng bạn đến với trang Chăm sóc hình xăm của BR.INK. Hãy làm theo hướng dẫn của nghệ sĩ và chăm sóc nhẹ nhàng để giữ cho hình xăm luôn đẹp và an toàn. Lưu ý, trang này không cung cấp chẩn đoán y tế.
                </p>

                <div className="rounded-2xl bg-black/40 border border-darkOrange/30 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-darkOrange">CHÚ Ý QUAN TRỌNG SAU KHI XĂM</h2>
                  <ol className="list-decimal pl-5 space-y-2 text-[#d1d1d1]">
                    <li>Ngay sau buổi xăm giữ băng gạc trong 6 giờ</li>
                    <li>Sau 6 giờ tháo băng</li>
                    <li>Rửa nhẹ bằng nước sạch hoặc nước muối sinh lý vô khuẩn</li>
                    <li>Làm sạch hoàn toàn mực thừa, máu và dịch đọng trên bề mặt</li>
                    <li>Không chà xát hoặc kỳ hình xăm</li>
                    <li>Dùng giấy sạch thấm nhẹ cho khô hoàn toàn</li>
                    <li>Sau khi lau khô chưa bôi Aftercare ngay</li>
                    <li>Chờ 24-48 giờ rồi mới bôi sản phẩm Aftercare do BR.INK cung cấp</li>
                    <li>Khi bôi chỉ dùng một lớp thật mỏng</li>
                    <li>Không bôi quá nhiều kem vì có thể làm hình xăm quá ẩm và gây khó chịu trong quá trình lành</li>
                  </ol>
                </div>

                <div className="space-y-6">
                  <h2 className="font-rye text-2xl text-white pt-2">Lộ Trình Phục Hồi Theo Từng Giai Đoạn</h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">NGÀY 0-3: GIAI ĐOẠN ĐẦU</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>Giữ hình xăm luôn sạch sẽ và khô ráo</li>
                        <li>Rửa tay kỹ trước khi chạm vào vùng hình xăm</li>
                        <li>Vệ sinh nhẹ nhàng khi cần thiết, tránh chà xát mạnh</li>
                        <li>Không gãi, cạy, bóc hoặc chà xát lên hình xăm</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">NGÀY 4-7: GIAI ĐOẠN BONG DA</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>Da có thể khô, ngứa và bắt đầu bong, để da bong tự nhiên</li>
                        <li>Không kéo hoặc bóc phần da đang bong, không cạy vảy</li>
                        <li>Tiếp tục dưỡng ẩm mỏng bằng kem Aftercare do nghệ sỹ cung cấp</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-darkOrange pl-4 space-y-2">
                      <h3 className="text-white font-semibold text-xl font-rye">SAU 30 NGÀY: CHĂM SÓC LÂU DÀI</h3>
                      <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                        <li>Giữ da sạch và đủ ẩm, bảo vệ hình xăm khỏi tia UV kéo dài</li>
                        <li>Dùng kem chống nắng trên vùng da xăm đã lành hoàn toàn</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-4">
                  <h2 className="font-rye text-2xl text-white">ĂN UỐNG VÀ KIÊNG CỮ</h2>
                  <ul className="list-disc pl-5 space-y-1 text-[#d1d1d1]">
                    <li><strong className="text-white">Đồ nếp, thịt bò, gà, hải sản:</strong> Kiêng 1-2 tuần đầu</li>
                    <li><strong className="text-white">Rau muống:</strong> Kiêng 2-4 tuần</li>
                    <li><strong className="text-white">Rượu bia, đồ chua (chanh/cam/tắc):</strong> Tránh trong 1 tuần đầu</li>
                  </ul>
                </div>
              </>
            )}

            <div className="mt-8 rounded-2xl bg-black/40 border border-white/10 p-6">
              <h3 className="font-rye text-xl text-white mb-2">Cần tư vấn trực tiếp?</h3>
              <p className="text-[#b8b8b8] text-sm">
                Liên hệ ngay với đội ngũ BR.INK qua số điện thoại <span className="text-darkOrange font-semibold">0907 879 567</span> hoặc ghé trực tiếp studio tại 258 Cách Mạng Tháng 8, Phước Hiệp, TP. Bà Rịa nhé!
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}