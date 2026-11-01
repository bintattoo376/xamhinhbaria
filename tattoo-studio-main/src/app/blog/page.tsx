'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { blogPosts, featuredPost } from '@/data/dataBlog';
import { useLanguage } from '@/context/LanguageContext';

export default function Blog() {
  const { t, lang } = useLanguage();

  // Đặt chính xác slug của 2 bài chăm sóc xỏ khuyên và chăm sóc sau xăm lên trên
  const carePostSlugs = [
    'huong-dan-cham-soc-xo-khuyen-dung-cach',
    'cham-soc-hinh-xam-moi-14-ngay-dau-tien',
  ];

  const carePosts = blogPosts.filter((post) => carePostSlugs.includes(post.slug));
  const otherPosts = blogPosts.filter((post) => !carePostSlugs.includes(post.slug));

  return (
    <>
      <main className="min-h-screen bg-bgAlpha">
        <PageHeader
          navigationLabel={t('blogNav')}
          secondaryHref="/gallery"
          secondaryLabel="Gallery"
        />

        <section className="container pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.24em] text-darkOrange sm:text-[16px]">
              {t('blogTagline')}
            </p>
            <h1 className="mt-4 text-balance font-rye text-[42px] leading-tight text-white sm:text-[64px] lg:text-[76px]">
              {t('blogMainTitle')}
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8] sm:text-[20px]">
              {t('blogMainDesc')}
            </p>
          </div>

          {/* Bài viết nổi bật (Cẩm nang xăm hình) */}
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group mt-12 block overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] shadow-card transition-all duration-300 hover:border-darkOrange/50 sm:mt-16 lg:grid lg:grid-cols-[1.12fr_0.88fr]"
          >
            <div className="relative min-h-[320px] sm:min-h-[460px] lg:min-h-[520px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt[lang]}
                fill
                priority
                sizes="(min-width: 1440px) 770px, (min-width: 834px) calc(100vw - 64px), calc(100vw - 32px)"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/25"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full border border-darkOrange/60 bg-lightOrange px-4 py-2 font-playfair text-[14px] font-semibold uppercase tracking-[0.12em] text-darkOrange">
                {featuredPost.category[lang]}
              </span>
              <h2 className="mt-6 text-balance font-rye text-[30px] leading-tight text-white group-hover:text-darkOrange transition-colors sm:text-[40px]">
                {featuredPost.title[lang]}
              </h2>
              <p className="mt-5 text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
                {featuredPost.excerpt[lang]}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-playfair text-[14px] text-[#888888]">
                <time dateTime={featuredPost.dateTime}>
                  {featuredPost.date[lang]}
                </time>
                <span aria-hidden="true">•</span>
                <span>{featuredPost.readTime[lang]}</span>
              </div>
            </div>
          </Link>

          {/* Hai bài chăm sóc hiển thị ngay dưới bài cẩm nang */}
          <div className="mt-8 grid gap-7 lg:grid-cols-2">
            {carePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] shadow-card transition-all duration-300 hover:border-darkOrange/50"
              >
                <div className="relative min-h-[260px] sm:min-h-[300px]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt[lang]}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="w-fit rounded-full border border-darkOrange/60 bg-lightOrange px-3.5 py-1.5 font-playfair text-[13px] font-semibold uppercase tracking-[0.12em] text-darkOrange">
                      {post.category[lang]}
                    </span>
                    <h3 className="mt-4 text-balance font-rye text-[24px] leading-snug text-white group-hover:text-darkOrange transition-colors sm:text-[28px]">
                      {post.title[lang]}
                    </h3>
                    <p className="mt-3 text-pretty font-playfair text-[16px] leading-relaxed text-[#b8b8b8]">
                      {post.excerpt[lang]}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-4 font-playfair text-[13px] text-[#888888]">
                    <time dateTime={post.dateTime}>{post.date[lang]}</time>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime[lang]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/25 py-16 sm:py-20 lg:py-24">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.2em] text-darkOrange">
                  {t('studioStoriesTag')}
                </p>
                <h2 className="mt-3 text-balance font-rye text-[34px] text-white sm:text-[48px]">
                  {t('latestStoriesTitle')}
                </h2>
              </div>
              <p className="max-w-[430px] text-pretty font-playfair text-[16px] leading-relaxed text-[#a8a8a8] sm:text-right">
                {t('latestStoriesDesc')}
              </p>
            </div>

            {/* Danh sách các bài viết còn lại (bao gồm cả bài địa chỉ xỏ khuyên Bà Rịa) */}
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-darkOrange/45"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt[lang]}
                        fill
                        sizes="(min-width: 1440px) 440px, (min-width: 834px) calc(50vw - 46px), calc(100vw - 32px)"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
                      />
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-playfair text-[14px] font-semibold uppercase tracking-[0.12em] text-darkOrange">
                          {post.category[lang]}
                        </span>
                        <h3 className="mt-3 text-balance font-rye text-[24px] leading-snug text-white group-hover:text-darkOrange transition-colors">
                          {post.title[lang]}
                        </h3>
                        <p className="mt-4 text-pretty font-playfair text-[16px] leading-relaxed text-[#a8a8a8]">
                          {post.excerpt[lang]}
                        </p>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-5 font-playfair text-[13px] text-[#888888]">
                        <time dateTime={post.dateTime}>{post.date[lang]}</time>
                        <span aria-hidden="true">•</span>
                        <span>{post.readTime[lang]}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-darkOrange/35 bg-[#191a22] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lightOrange blur-3xl"
            />
            <div className="relative mx-auto max-w-[720px]">
              <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.22em] text-darkOrange">
                {t('ctaTag')}
              </p>
              <h2 className="mt-4 text-balance font-rye text-[32px] leading-tight text-white sm:text-[46px]">
                {t('ctaTitle')}
              </h2>
              <p className="mx-auto mt-5 max-w-[590px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
                {t('ctaDesc')}
              </p>
              <Link
                href="/#contacts"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full border-2 border-darkOrange px-8 font-playfair text-[18px] font-semibold text-darkOrange transition-colors hover:bg-darkOrange hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#191a22]"
              >
                {t('bookConsultation')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}