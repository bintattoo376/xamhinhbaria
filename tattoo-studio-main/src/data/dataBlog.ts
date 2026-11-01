export interface BlogPost {
  slug: string;
  category: {
    vi: string;
    en: string;
  };
  title: {
    vi: string;
    en: string;
  };
  excerpt: {
    vi: string;
    en: string;
  };
  image: string;
  imageAlt: {
    vi: string;
    en: string;
  };
  date: {
    vi: string;
    en: string;
  };
  dateTime: string;
  readTime: {
    vi: string;
    en: string;
  };
}

export const featuredPost: BlogPost = {
  slug: 'cach-chuan-bi-cho-buoi-xam-hinh-dau-tien',
  category: {
    vi: 'Cẩm nang xăm hình',
    en: 'Tattoo Guide',
  },
  title: {
    vi: 'Cách Chuẩn Bị Cho Buổi Xăm Hình Đầu Tiên Của Bạn',
    en: 'How to Prepare for Your First Tattoo Session',
  },
  excerpt: {
    vi: 'Một buổi xăm suôn sẻ bắt đầu từ trước khi bạn bước chân đến tiệm. Hãy tìm hiểu những vật dụng cần mang theo, cách chăm sóc da trước khi xăm và những điều cần biết khi gặp thợ xăm.',
    en: 'A smooth tattoo session starts before you step into the studio. Learn what to bring, how to care for your skin beforehand, and what to expect when meeting your artist.',
  },
  image: '/images/06-tattoo.jpg',
  imageAlt: {
    vi: 'Tác phẩm xăm nghệ thuật truyền thống trên tay khách hàng',
    en: 'Traditional art tattoo artwork on client arm',
  },
  date: {
    vi: 'Ngày 1 tháng 9, 2026',
    en: 'September 1, 2026',
  },
  dateTime: '2026-09-01',
  readTime: {
    vi: '6 phút đọc',
    en: '6 min read',
  },
};

// Danh sách gốc chứa tất cả các bài viết (sẽ được tự động sắp xếp ở bên dưới)
const rawBlogPosts: BlogPost[] = [
  {
    slug: 'dia-chi-xo-khuyen-ba-ria-an-toan-khong-dau-chuan-y-khoa',
    category: {
      vi: 'Xỏ khuyên chuyên nghiệp',
      en: 'Professional Piercing',
    },
    // Đã tối ưu chuẩn SEO (dưới 60 ký tự, có từ khóa chính "Xỏ Khuyên Bà Rịa")
    title: {
      vi: 'Xỏ Khuyên Bà Rịa An Toàn, Chuẩn Y Khoa | BR.INK',
      en: 'Safe, Painless & Medical-Standard Piercing Address in Ba Ria',
    },
    // Đã tối ưu chuẩn SEO đoạn trích từ 150 - 160 ký tự chứa từ khóa
    excerpt: {
      vi: 'Địa chỉ xỏ khuyên Bà Rịa uy tín, chuẩn y khoa tại BR.INK Studio. Dùng kim dùng 1 lần, chất liệu Titanium cao cấp, xỏ không đau và nhanh lành.',
      en: 'Discover medical-standard piercing procedures, single-use needles, and high-grade Titanium at BR.INK Studio Ba Ria.',
    },
    image: '/images/01-piercing.jpg',
    imageAlt: {
      vi: 'Xỏ khuyên an toàn chuẩn y khoa tại BR.INK Bà Rịa',
      en: 'Safe medical-standard piercing at BR.INK Ba Ria',
    },
    date: {
      vi: 'Ngày 2 tháng 11, 2026',
      en: 'November 2, 2026',
    },
    dateTime: '2026-11-02',
    readTime: {
      vi: '5 phút đọc',
      en: '5 min read',
    },
  },
  {
    slug: 'huong-dan-cham-soc-xo-khuyen-dung-cach',
    category: {
      vi: 'Xỏ khuyên chuyên nghiệp',
      en: 'Professional Piercing',
    },
    title: {
      vi: 'Hướng Dẫn Chăm Sóc Xỏ Khuyên Đúng Cách Tại Nhà',
      en: 'Proper Piercing Aftercare Guide at Home',
    },
    excerpt: {
      vi: 'Quy trình vệ sinh, những điểm cần lưu ý và cách bảo vệ lỗ xỏ khuyên luôn an toàn, nhanh lành, tránh kích ứng.',
      en: 'Cleaning process, important notes, and how to keep your piercing safe, fast-healing, and irritation-free.',
    },
    image: '/images/03-piercing.jpg',
    imageAlt: {
      vi: 'Cận cảnh lỗ xỏ khuyên chuyên nghiệp tại BR.INK',
      en: 'Close-up of professional piercing at BR.INK',
    },
    date: {
      vi: 'Ngày 15 tháng 9, 2026',
      en: 'September 15, 2026',
    },
    dateTime: '2026-09-15',
    readTime: {
      vi: '5 phút đọc',
      en: '5 min read',
    },
  },
  {
    slug: 'cham-soc-hinh-xam-moi-14-ngay-dau-tien',
    category: {
      vi: 'Chăm sóc sau xăm',
      en: 'Tattoo Aftercare',
    },
    title: {
      vi: 'Chăm Sóc Hình Xăm Mới: 14 Ngày Đầu Tiên',
      en: 'New Tattoo Care: The First 14 Days',
    },
    excerpt: {
      vi: 'Quy trình chăm sóc từng ngày đơn giản giúp hình xăm mới mau lành và giữ nét mực luôn sắc sảo, bền màu.',
      en: 'Simple day-by-day care routine to help your new tattoo heal quickly and keep ink lines sharp and vibrant.',
    },
    image: '/images/01-tattoo.jpg',
    imageAlt: {
      vi: 'Hình xăm họa tiết tinh xảo trên cả hai bàn tay',
      en: 'Intricate tattoo design on both hands',
    },
    date: {
      vi: 'Ngày 24 tháng 8, 2026',
      en: 'August 24, 2026',
    },
    dateTime: '2026-08-24',
    readTime: {
      vi: '5 phút đọc',
      en: '5 min read',
    },
  },
  {
    slug: 'lua-chon-phong-cach-xam-the-hien-dung-ca-tinh',
    category: {
      vi: 'Cảm hứng',
      en: 'Inspiration',
    },
    title: {
      vi: 'Lựa Chọn Phong Cách Xăm Thể Hiện Đúng Cá Tính Của Bạn',
      en: 'Choosing the Tattoo Style That Fits Your Personality',
    },
    excerpt: {
      vi: 'Từ phong cách nét mảnh (fine line) đến truyền thống và tả thực (realism), hãy khám phá ngôn ngữ thị đằng sau các phong cách xăm phổ biến.',
      en: 'From fine line to traditional and realism, explore the visual language behind popular tattoo styles.',
    },
    image: '/images/02-tattoo.jpg',
    imageAlt: {
      vi: 'Thợ xăm đang tỉ mỉ thao tác với máy xăm',
      en: 'Tattoo artist meticulously working with a tattoo machine',
    },
    date: {
      vi: 'Ngày 12 tháng 8, 2026',
      en: 'August 12, 2026',
    },
    dateTime: '2026-08-12',
    readTime: {
      vi: '7 phút đọc',
      en: '7 min read',
    },
  },
  {
    slug: 'tu-ban-ve-len-da-hanh-trinh-tao-nen-thiet-ke-doc-ban',
    category: {
      vi: 'Câu chuyện tại Studio',
      en: 'Studio Stories',
    },
    title: {
      vi: 'Từ Bản Vẽ Lên Da: Hành Trình Tạo Nên Một Thiết Kế Độc Bản',
      en: 'From Sketch to Skin: The Journey of Creating a Custom Design',
    },
    excerpt: {
      vi: 'Khám phá cách một ý tưởng biến thành hình xăm duy nhất thông qua các bước tư vấn, phác thảo, căn chỉnh vị trí và hoàn thiện chi tiết.',
      en: 'Discover how an idea turns into a unique tattoo through consultation, sketching, placement alignment, and detailing.',
    },
    image: '/images/10-tattoo.jpg',
    imageAlt: {
      vi: 'Tác phẩm xăm độc bản được chụp lại sau buổi làm việc tại studio',
      en: 'Custom tattoo artwork captured after a studio session',
    },
    date: {
      vi: 'Ngày 30 tháng 7, 2026',
      en: 'July 30, 2026',
    },
    dateTime: '2026-07-30',
    readTime: {
      vi: '4 phút đọc',
      en: '4 min read',
    },
  },
  {
    slug: 'vi-tri-dat-hinh-xam-nhung-dieu-can-can-nhac',
    category: {
      vi: 'Vị trí xăm',
      en: 'Tattoo Placement',
    },
    title: {
      vi: 'Vị Trí Đặt Hình Xăm: Những Điều Cần Cân Nhắc Trước Khi Quyết Định',
      en: 'Tattoo Placement: Things to Consider Before Deciding',
    },
    excerpt: {
      vi: 'Chuyển động cơ thể, độ hiển thị, kích thước và mức độ đau đều rất quan trọng. Đây là cách giúp bạn lựa chọn vị trí xăm một cách tự tin nhất.',
      en: 'Body movement, visibility, size, and pain levels are crucial. Here is how to choose your tattoo placement with confidence.',
    },
    image: '/images/04-tattoo.jpg',
    imageAlt: {
      vi: 'Hình xăm được bố trí ôm sát theo đường nét cơ thể',
      en: 'Tattoo designed to follow body contours',
    },
    date: {
      vi: 'Ngày 18 tháng 7, 2026',
      en: 'July 18, 2026',
    },
    dateTime: '2026-07-18',
    readTime: {
      vi: '6 phút đọc',
      en: '6 min read',
    },
  },
  {
    slug: 'hinh-xam-cu-bien-hoa-thanh-tac-pham-moi',
    category: {
      vi: 'Che hình xăm cũ',
      en: 'Cover-Up',
    },
    title: {
      vi: 'Liệu Hình Xăm Cũ Có Thế Biến Hóa Thành Một Tác Phẩm Mới?',
      en: 'Can an Old Tattoo Be Transformed Into a New Piece?',
    },
    excerpt: {
      vi: 'Điều gì tạo nên một hình xăm che khuyết điểm (cover-up) hoàn hảo, khi nào cần làm lại và vì sao một buổi tư vấn trực tiếp là bước khởi đầu tốt nhất.',
      en: 'What makes a perfect cover-up tattoo, when you need a rework, and why a direct consultation is the best starting point.',
    },
    image: '/images/05-tattoo.jpg',
    imageAlt: {
      vi: 'Hình xăm nét đậm rất phù hợp cho ý tưởng cover-up',
      en: 'Bold line tattoo well-suited for cover-up ideas',
    },
    date: {
      vi: 'Ngày 5 tháng 7, 2026',
      en: 'July 5, 2026',
    },
    dateTime: '2026-07-05',
    readTime: {
      vi: '5 phút đọc',
      en: '5 min read',
    },
  },
  {
    slug: 'bi-quyet-giu-cho-hinh-xam-luon-tuoi-sang',
    category: {
      vi: 'Độ bền',
      en: 'Durability',
    },
    title: {
      vi: 'Bí Quyết Giữ Cho Hình Xăm Luôn Tươi Sáng Theo Thời Gian',
      en: 'Secrets to Keeping Your Tattoo Vibrant Over Time',
    },
    excerpt: {
      vi: 'Chống nắng, cấp ẩm và những thói quen chăm sóc da lâu dài giúp bảo toàn độ tương phản và chi tiết sắc nét cho hình xăm.',
      en: 'Sun protection, hydration, and long-term skincare habits help preserve contrast and sharp details for your tattoo.',
    },
    image: '/images/09-tattoo.jpg',
    imageAlt: {
      vi: 'Hình xăm đã lành với độ tương phản phong phú và chi tiết rõ nét',
      en: 'Healed tattoo with rich contrast and crisp details',
    },
    date: {
      vi: 'Ngày 22 tháng 6, 2026',
      en: 'June 22, 2026',
    },
    dateTime: '2026-06-22',
    readTime: {
      vi: '4 phút đọc',
      en: '4 min read',
    },
  },
];

// Định nghĩa cố định 2 bài chăm sóc luôn ở vị trí 1 và 2 dựa theo slug
const topSlugs = [
  'huong-dan-cham-soc-xo-khuyen-dung-cach',
  'cham-soc-hinh-xam-moi-14-ngay-dau-tien'
];

// Tự động tách và sắp xếp: 2 bài chăm sóc ưu tiên lên đầu, các bài còn lại tự động sắp xếp theo thời gian mới nhất (dateTime)
const topPosts = topSlugs
  .map(slug => rawBlogPosts.find(p => p.slug === slug))
  .filter((p): p is BlogPost => p !== undefined);

const otherPosts = rawBlogPosts
  .filter(p => !topSlugs.includes(p.slug))
  .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

export const blogPosts: BlogPost[] = [...topPosts, ...otherPosts];