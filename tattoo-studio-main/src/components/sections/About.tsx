'use client';
import ImageComponent from '../ui/AboutImage';
import TextComponent from '../ui/TextComponent';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-shell bg-bgAlpha"
    >
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          {t("aboutTitle")}
        </h2>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-24">
          <ImageComponent />
          <div className="max-w-[580px]">
            <h3 className="font-rye text-[26px] text-darkOrange sm:text-[30px]">
              {t("aboutHeading")}
            </h3>
            <TextComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;