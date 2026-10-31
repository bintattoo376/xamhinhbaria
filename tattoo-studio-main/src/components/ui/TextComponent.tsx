const paragraphs = [
  'Chào mừng bạn đến với Bà Rịa INK Tattoo Studio, nơi nghệ thuật và mực xăm hòa quyện để tạo nên những kiệt tác khó phai. Studio của chúng tôi là không gian để bạn tự do thể hiện cá tính, nơi chúng tôi tin rằng mỗi hình xăm đều chứa đựng một câu chuyện độc đáo riêng.',
  'Tại Bà Rịa INK Tattoo Studio, chúng tôi hiểu rằng một hình xăm là dấu ấn gắn bó suốt cuộc đời. Vì vậy, chúng tôi luôn dành thời gian lắng nghe ý tưởng của bạn, tư vấn tận tâm để đảm bảo hình xăm không chỉ đơn thuần là một bản thiết kế mà còn phản ánh trọn vẹn câu chuyện, giá trị và khát vọng của bạn.',
  'Chào mừng bạn đến với thế giới của Bà Rịa INK Tattoo Studio, nơi những giấc mơ của bạn hóa thành nghệ thuật trên làn da.',
];

const TextComponent = () => (
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

export default TextComponent;