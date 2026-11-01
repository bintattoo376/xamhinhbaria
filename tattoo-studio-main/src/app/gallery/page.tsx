import GalleryContent from '@/components/ui/GalleryContent';

export const generateMetadata = () => {
  return {
    title: 'Bộ Sưu Tập | BR.INK Studio',
    description: 'Khám phá bộ sưu tập hình xăm nghệ thuật độc bản và xỏ khuyên chuẩn y tế tại BR.INK Bà Rịa Vũng Tàu.',
  };
};

export default function GalleryPage() {
  return <GalleryContent />;
}