'use client';
import { FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Nút Gọi Điện - Tông màu cam đồng bộ */}
      <a
        href="tel:0907879567"
        aria-label="Gọi điện thoại trực tiếp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-darkOrange shadow-lg transition-all duration-300 hover:scale-110 hover:border-darkOrange hover:bg-neutral-800 focus:outline-none"
      >
        <FaPhoneAlt className="h-5 w-5 animate-pulse" />
        <span className="absolute right-14 hidden whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1 text-xs text-white shadow-md group-hover:block border border-neutral-700">
          Gọi: 0907 879 567
        </span>
      </a>

      {/* Nút Nhắn tin Zalo - Tông xám đen phối viền cam */}
      <a
        href="https://zalo.me/84907879567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white font-bold text-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-darkOrange hover:bg-neutral-800 focus:outline-none"
      >
        Zalo
        <span className="absolute right-14 hidden whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1 text-xs text-white shadow-md group-hover:block border border-neutral-700">
          Chat Zalo Tư Vấn
        </span>
      </a>

      {/* Nút Nhắn tin Facebook Messenger - Tông xám đen chủ đạo */}
      <a
        href="https://m.me/tên_facebook_của_bạn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Messenger"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:border-darkOrange hover:bg-neutral-800 focus:outline-none"
      >
        <FaFacebookMessenger className="h-6 w-6 text-neutral-300 group-hover:text-darkOrange transition-colors" />
        <span className="absolute right-14 hidden whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1 text-xs text-white shadow-md group-hover:block border border-neutral-700">
          Chat Facebook
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;