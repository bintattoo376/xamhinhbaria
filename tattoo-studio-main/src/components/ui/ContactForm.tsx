'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();

  return (
    <form className="mt-8 flex flex-col gap-5">
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-1">
          {t("fullName")} *
        </label>
        <input
          type="text"
          required
          className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-darkOrange focus:outline-none"
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-1">
          {t("emailAddress")} *
        </label>
        <input
          type="email"
          required
          className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-darkOrange focus:outline-none"
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-1">
          {t("phoneNumber")} *
        </label>
        <input
          type="tel"
          required
          className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-darkOrange focus:outline-none"
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-1">
          {t("messageContent")} *
        </label>
        <textarea
          rows={4}
          required
          className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-darkOrange focus:outline-none"
          placeholder=""
        />
      </div>

      <p className="text-xs text-[#b8b8b8]">
        {t("formNotice")}
      </p>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-darkOrange py-4 text-[18px] font-semibold text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {t("submitButton")}
      </button>
    </form>
  );
}