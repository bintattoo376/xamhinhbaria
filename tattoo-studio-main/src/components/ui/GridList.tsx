import Image from 'next/image';
import { tattooImages } from '../../data/dataGallery';

export default function GridList() {
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
      {tattooImages.map(({ src, text }, index) => (
        <li
          key={typeof src === 'string' ? src : (src as any).src || index}
          className="mb-4 sm:mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-card transition-transform duration-500 hover:scale-[1.01]"
        >
          <div className="relative w-full">
            <Image
              src={src as any}
              alt={text}
              width={600}
              height={800}
              priority={index === 0}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          {/* Phần chú thích bên dưới ảnh giúp bố cục gọn gàng và thẩm mỹ hơn */}
          <div className="p-4 bg-black/60">
            <p className="font-playfair text-[15px] text-[#b8b8b8] text-center">
              {text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}