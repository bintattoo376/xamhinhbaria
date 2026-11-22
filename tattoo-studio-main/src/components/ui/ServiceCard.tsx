import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, text, href }) => {
  const cardContent = (
    <>
      <Image src={imageSrc} alt="" className="h-auto w-14" />
      <h3 className="mt-7 font-rye text-[22px] leading-tight text-darkOrange">
        {title}
      </h3>
      <p className="mt-5 font-playfair text-[16px] leading-[1.65] text-[#b8b8b8]">
        {text}
      </p>
      {href && (
        <span className="mt-6 inline-flex items-center font-playfair text-sm font-semibold text-darkOrange transition-transform duration-300 group-hover:translate-x-1">
          Xem chi tiết &rarr;
        </span>
      )}
    </>
  );

  return (
    <li className="group flex min-h-[320px] flex-col rounded-2xl border border-white/10 bg-[#191a22] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-darkOrange/50">
      {href ? (
        <Link href={href} className="flex h-full w-full flex-col items-center px-6 py-8">
          {cardContent}
        </Link>
      ) : (
        <div className="flex h-full w-full flex-col items-center px-6 py-8">
          {cardContent}
        </div>
      )}
    </li>
  );
};

export default ServiceCard;