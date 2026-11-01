'use client';

import { useLanguage } from '@/context/LanguageContext';

const TextComponent = () => {
  const { t } = useLanguage();

  const paragraphs = [
    t("aboutText1"),
    t("aboutText2"),
    t("aboutText3"),
  ];

  return (
    <>
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="mt-4 font-playfair text-[17px] leading-[1.7] text-[#b8b8b8] sm:text-[19px]"
        >
          {text}
        </p>
      ))}
    </>
  );
};

export default TextComponent;