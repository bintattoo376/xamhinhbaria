'use client';
import React, { useState } from 'react';

interface ContactFormProps {
  idPrefix?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix = 'contact' }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mvkkwygn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại!');
      }
    } catch (error) {
      alert('Không thể kết nối tới máy chủ.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success ? (
        <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center text-green-400 font-playfair">
          Cảm ơn bạn! Yêu cầu đặt lịch đã được gửi. Chúng tôi sẽ liên hệ lại sớm nhất.
        </div>
      ) : (
        <>
          <div>
            <label htmlFor={`${idPrefix}-name`} className="sr-only">Họ tên</label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              required
              placeholder="Họ tên của bạn"
              className="w-full rounded-xl bg-black/40 px-4 py-3.5 text-white placeholder-[#888] border border-white/10 focus:border-darkOrange outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-phone`} className="sr-only">Số điện thoại</label>
            <input
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              required
              placeholder="Số điện thoại liên hệ"
              className="w-full rounded-xl bg-black/40 px-4 py-3.5 text-white placeholder-[#888] border border-white/10 focus:border-darkOrange outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-message`} className="sr-only">Ý tưởng / Nội dung</label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              rows={4}
              required
              placeholder="Ý tưởng hình xăm hoặc lịch xỏ khuyên mong muốn..."
              className="w-full rounded-xl bg-black/40 px-4 py-3.5 text-white placeholder-[#888] border border-white/10 focus:border-darkOrange outline-none resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-darkOrange py-4 font-semibold text-white transition-all hover:bg-orange-600 shadow-lg active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;