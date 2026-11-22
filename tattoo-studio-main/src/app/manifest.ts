import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BÀ RỊA INK - Xăm Hình & Xỏ Khuyên',
    short_name: 'BR.INK',
    description:
      'Tiệm xăm hình nghệ thuật và xỏ khuyên chuẩn y tế tại Bà Rịa - Vũng Tàu. Đặt lịch: 0907 879 567.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}