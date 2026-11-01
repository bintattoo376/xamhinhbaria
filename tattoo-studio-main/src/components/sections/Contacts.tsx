'use client';
import ContactForm from '../ui/ContactForm';
import { useLanguage } from '@/context/LanguageContext';

const Contacts = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="contacts" 
      className="section-shell bg-bgAlpha"
      itemScope 
      itemType="https://schema.org/TattooParlor"
    >
      <meta itemProp="name" content="Bà Rịa INK Tattoo Piercing" />
      <meta itemProp="address" content="258 Cách Mạng Tháng 8, P. Phước Hiệp, TP. Bà Rịa" />
      <meta itemProp="telephone" content="+84907879567" />
      <meta itemProp="email" content="Bintatto376@gmail.com" />
      <meta itemProp="priceRange" content="$$" />

      <div className="container">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* Cột trái: Tiêu đề và Form đặt lịch */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
            <h2 className="font-rye text-[32px] leading-tight text-white sm:text-[44px] lg:text-[48px]">
              {t("bookingTitle") || "Đặt lịch hẹn xăm & xỏ khuyên"}
            </h2>
            <p className="mt-4 max-w-[540px] font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
              {t("bookingDesc") || "Hãy chia sẻ ý tưởng hình xăm độc bản hoặc lịch xỏ khuyên của bạn. Bà Rịa INK sẽ phản hồi nhanh chóng để tư vấn chi tiết."}
            </p>
            <div className="mt-6 w-full">
              <ContactForm />
            </div>
          </div>

          {/* Cột phải: Thông tin liên hệ và Bản đồ */}
          <div className="relative min-h-[580px] bg-contactsMobile bg-cover bg-center sm:bg-contactsTablet lg:min-h-full lg:bg-contactsDesktop flex flex-col justify-between">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,12,18,0.94)_0%,rgba(10,12,18,0.76)_48%,rgba(10,12,18,0.18)_100%)]"
            />
            <div className="relative z-10 flex h-full min-h-[580px] max-w-[480px] flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
              <h3 className="font-rye text-[32px] text-white sm:text-[44px] lg:text-[48px]">
                {t("contactTitle") || "Thông tin liên hệ"}
              </h3>
              <address className="mt-6 not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <ul className="flex flex-col gap-3 font-playfair text-[16px] leading-relaxed text-white sm:text-[17px]">
                  <li>
                    <strong className="font-semibold text-darkOrange" itemProp="name">
                      Bà Rịa INK Tattoo Piercing Studio
                    </strong>
                  </li>
                  <li>
                    <span itemProp="streetAddress">258 Cách Mạng Tháng 8</span>, <span itemProp="addressLocality">P. Phước Hiệp, TP. Bà Rịa</span>
                  </li>
                  <li>
                    <a
                      href="mailto:Bintatto376@gmail.com"
                      itemProp="email"
                      className="underline decoration-darkOrange underline-offset-4 transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                    >
                      Bintatto376@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:0907879567"
                      itemProp="telephone"
                      className="underline decoration-darkOrange underline-offset-4 transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                    >
                      0907 879 567
                    </a>
                  </li>
                  <li className="mt-1">
                    <span className="block text-[#b8b8b8]">{t("workingHours") || "Giờ mở cửa"}</span>
                    <time itemProp="openingHours" dateTime="Mo-Su 09:00-21:00">
                      {t("workingTime") || "Thứ Hai – Chủ Nhật, 9:00 AM – 21:00 PM"}
                    </time>
                  </li>
                </ul>
              </address>

              {/* Khung Google Maps tích hợp */}
              <div className="mt-6 w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-white/20 shadow-lg relative z-20">
                <iframe
                  title="Bản đồ chỉ đường tới tiệm xăm Bà Rịa Ink"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0592468919344!2d107.16771971104919!3d10.495995864259628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175734902c49431%3A0x764755143e55334d!2zWMSDbSBIw6xuaCBY4buPIEtodXnDqm4gQsOgIFLhu4thIC0gQlIuSW5r!5e0!3m2!1svi!2s!4v1793540871813!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;