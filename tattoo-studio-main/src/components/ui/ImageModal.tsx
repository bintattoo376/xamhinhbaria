'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, caption }: ImageModalProps) {
  // Khóa cuộn trang khi mở modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Chặn sự kiện click xuyên thấu đóng modal
      >
        {/* Nút đóng */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-darkOrange hover:text-black transition-colors font-bold text-xl shadow-md"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Khung chứa ảnh lớn: Dùng chiều cao linh hoạt (h-[60vh] tới h-[70vh]) giúp ảnh hiển thị to rõ */}
        <div className="relative h-[60vh] sm:h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl mb-4 bg-black/40">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority
          />
        </div>

        {/* Chú thích chi tiết */}
        <div className="text-center sm:text-left shrink-0">
          <p className="font-playfair text-white text-base sm:text-lg font-medium">
            {caption}
          </p>
          <p className="font-playfair text-darkOrange text-xs sm:text-sm mt-1 uppercase tracking-wider">
            BÀ RỊA INK Tattoo Studio • 258 Cách Mạng Tháng 8, TP. Bà Rịa
          </p>
        </div>
      </div>
    </div>
  );
}