import { blogPosts, featuredPost } from '@/data/dataBlog';
import BlogPostContent from './BlogPostContent';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Tạo Metadata chuẩn SEO động cho Server
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Không Tìm Thấy Bài Viết | BR.INK Studio Bà Rịa',
      description: 'Nội dung bài viết không tồn tại hoặc đã bị gỡ bỏ.',
    };
  }

  const titleText = typeof post.title === 'object' ? post.title.vi : post.title;
  const excerptText = typeof post.excerpt === 'object' ? post.excerpt.vi : post.excerpt;

  return {
    title: `${titleText} | BR.INK Xăm Hình & Xỏ Khuyên Bà Rịa`,
    description: excerptText || 'Hướng dẫn chăm sóc hình xăm và xỏ khuyên chuyên nghiệp chuẩn y khoa tại BR.INK Studio Bà Rịa.',
    openGraph: {
      title: `${titleText} | BR.INK Studio`,
      description: excerptText,
      images: [post.image],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === slug);

  // 2. Định nghĩa Dữ liệu có cấu trúc (Schema JSON-LD) cho bài viết blog
  const jsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: typeof post.title === 'object' ? post.title.vi : post.title,
    image: post.image,
    datePublished: `${post.dateTime}T00:00:00+07:00`,
    dateModified: `${post.dateTime}T00:00:00+07:00`,
    author: {
      '@type': 'Organization',
      name: 'BR.INK Xăm Hình Xỏ Khuyên Chuyên Nghiệp Bà Rịa',
      url: 'https://xamhinhbaria.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'BR.INK Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://xamhinhbaria.com/logo.png'
      }
    },
    description: typeof post.excerpt === 'object' ? post.excerpt.vi : post.excerpt,
  } : null;

  return (
    <>
      {/* Nhúng đoạn mã JSON-LD Schema vào thẻ script để Google bot nhận diện */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {/* Hiển thị giao diện nội dung bài viết */}
      <BlogPostContent />
    </>
  );
}