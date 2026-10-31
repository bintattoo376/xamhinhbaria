const Team = () => {
  return (
    <section
      id="artists"
      className="section-shell bg-bgAlpha"
    >
      <div className="container">
        <h2 className="mb-10 text-center font-rye text-[32px] text-white sm:mb-12 sm:text-[48px] lg:mb-14">
          Nghệ sĩ xăm hình
        </h2>
        
        <div className="mx-auto flex max-w-[420px] flex-col items-center">
          <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img
              src="/images/artist.jpg" 
              alt="Trình Nguyễn ( BIN )"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <h3 className="mt-6 font-rye text-[28px] text-darkOrange">
            Trình Nguyễn ( BIN )
          </h3>
          <p className="mt-2 text-center font-playfair text-[17px] text-[#b8b8b8]">
            Chuyên gia xăm nghệ thuật độc bản, tận tâm mang đến những tác phẩm mang dấu ấn và câu chuyện riêng của bạn.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;