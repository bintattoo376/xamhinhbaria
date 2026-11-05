"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  vi: {
    // Menu & Chung
    home: "Trang chủ",
    about: "Giới thiệu",
    artists: "Nghệ sĩ",
    services: "Dịch vụ",
    gallery: "Bộ sưu tập",
    articles: "Bài viết",
    contact: "Liên hệ",
    bookNow: "Đặt lịch hẹn",
    viewGallery: "Xem Bộ Sưu Tập",
    blogNav: "Điều hướng blog",
    backToBlog: "Quay lại Blog",
    
    // Hero Section
    heroTitle: "BÀ RỊA INK - Studio Xăm Nghệ Thuật & Xỏ Khuyên Chuyên Nghiệp",
    heroDesc: "Không gian xăm hình nghệ thuật đỉnh cao, thiết kế độc bản theo câu chuyện của bạn và dịch vụ xỏ khuyên an toàn, uy tín tại Bà Rịa.",
    
    // About Section
    aboutTitle: "Về chúng tôi",
    aboutHeading: "Phong cách & Không gian",
    aboutText1: "Chào mừng bạn đến với Bà Rịa INK Tattoo Studio, nơi nghệ thuật và mực xăm hòa quyện để tạo nên những kiệt tác khó phai. Studio của chúng tôi là không gian để bạn tự do thể hiện cá tính, nơi chúng tôi tin rằng mỗi hình xăm đều chứa đựng một câu chuyện độc đáo riêng.",
    aboutText2: "Tại Bà Rịa INK Tattoo Studio, chúng tôi hiểu rằng một hình xăm là dấu ấn gắn bó suốt cuộc đời. Vì vậy, chúng tôi luôn dành thời gian lắng nghe ý tưởng của bạn, tư vấn tận tâm để đảm bảo hình xăm không chỉ đơn thuần là một bản thiết kế mà còn phản ánh trọn vẹn câu chuyện, giá trị và khát vọng của bạn.",
    aboutText3: "Chào mừng bạn đến với thế giới của Bà Rịa INK Tattoo Studio, nơi những giấc mơ của bạn hóa thành nghệ thuật trên làn da.",
    
    // Services Section
    servicesTitle: "Dịch vụ của chúng tôi",
    service1Title: "Xăm hình nghệ thuật độc bản",
    service1Desc: "Thiết kế hình xăm nguyên bản dựa trên câu chuyện, phong cách và vị trí mong muốn của bạn.",
    service2Title: "Xỏ khuyên chuyên nghiệp",
    service2Desc: "Tư vấn vị trí xỏ tinh tế, trải nghiệm xỏ khuyên an toàn, sạch sẽ và tỉ mỉ từ đầu đến cuối.",
    service3Title: "Sửa và phủ hình xăm cũ",
    service3Desc: "Làm mới hình xăm cũ hoặc biến hóa chúng thành một tác phẩm che khuyết điểm hoàn hảo.",
    
    // Artists / Team Section
    artistsTitle: "Nghệ sĩ xăm hình",
    artistName: "Trình Nguyễn ( BIN )",
    artistDesc: "Chuyên gia xăm nghệ thuật độc bản, tận tâm mang đến những tác phẩm mang dấu ấn và câu chuyện riêng của bạn.",

    // Why Choose Us Section
    whyChooseUsTitle: "Tại sao chọn chúng tôi",
    stat1Label: "Hình xăm hoàn thành",
    stat2Label: "Khách hàng hài lòng",
    stat3Label: "Giải thưởng đạt được",
    stat4Label: "Lượt xỏ khuyên",

    // Gallery Page
    galleryPageTitle: "Bộ Sưu Tập",
    gallerySubtitle: "Cái nhìn cận cảnh về đường nét, cá tính và tâm huyết đằng sau những tác phẩm xăm mới nhất của chúng tôi.",

    // Blog & Articles Page
    blogPageTitle: "Bài Viết & Chia Sẻ",
    blogSubtitle: "Tổng hợp các kiến thức, kinh nghiệm và hướng dẫn chăm sóc hình xăm, xỏ khuyên chuyên nghiệp.",
    blogTagline: "Câu chuyện, nghệ thuật & chăm sóc",
    blogMainTitle: "Nhật Ký May Mắn",
    blogMainDesc: "Lời khuyên xăm hình chân thành, cảm hứng sáng tạo và những câu chuyện từ bên trong studio của chúng tôi.",
    studioStoriesTag: "Từ studio",
    latestStoriesTitle: "Bài viết mới nhất",
    latestStoriesDesc: "Kiến thức thực tế giúp bạn cảm thấy tự tin trước, trong và sau buổi xăm.",
    ctaTag: "Ý tưởng của bạn bắt đầu từ đây",
    ctaTitle: "Sẵn sàng lên kế hoạch cho hình xăm tiếp theo?",
    ctaDesc: "Hãy chia sẻ ý tưởng của bạn và chúng tôi sẽ giúp bạn chọn đúng nghệ sĩ, phong cách và vị trí phù hợp.",
    bookConsultation: "Đặt lịch tư vấn",
    contactConsultTitle: "Cần tư vấn trực tiếp?",
    contactConsultDesc: "Liên hệ ngay với đội ngũ BR.INK qua số điện thoại 0907 879 567 hoặc ghé trực tiếp studio tại 258 Cách Mạng Tháng 8, Phước Hiệp, TP. Bà Rịa nhé!",
    
    // Blog Post: Chăm sóc hình xăm mới 14 ngày đầu tiên
    tattooCareTitle: "Chăm Sóc Hình Xăm Mới: 14 Ngày Đầu Tiên",
    tattooCareSubtitle: "Chào mừng bạn đến với trang Chăm sóc hình xăm của BR.INK. Hãy làm theo hướng dẫn của nghệ sĩ và chăm sóc nhẹ nhàng để giữ cho hình xăm luôn đẹp và an toàn. Lưu ý, trang này không cung cấp chẩn đoán y tế.",
    tattooCareIntro: "Chào mừng bạn đến với trang Chăm sóc hình xăm của BR.INK. Hãy làm theo hướng dẫn của nghệ sĩ và chăm sóc nhẹ nhàng để giữ cho hình xăm luôn đẹp và an toàn. Lưu ý, trang này không cung cấp chẩn đoán y tế.",
    tattooCareImportant: "CHÚ Ý QUAN TRỌNG SAU KHI XĂM",
    tattooCareStep1: "Ngay sau buổi xăm giữ băng gạc trong 6 giờ",
    tattooCareStep2: "Sau 6 giờ tháo băng",
    tattooCareStep3: "Rửa nhẹ bằng nước sạch hoặc nước muối sinh lý vô khuẩn",
    tattooCareStep4: "Làm sạch hoàn toàn mực thừa, máu và dịch đọng trên bề mặt",
    tattooCareStep5: "Không chà xát hoặc kỳ hình xăm",
    tattooCareStep6: "Dùng giấy sạch thấm nhẹ cho khô hoàn toàn",
    tattooCareStep7: "Sau khi lau khô chưa bôi Aftercare ngay",
    tattooCareStep8: "Chờ 24-48 giờ rồi mới bôi sản phẩm Aftercare do BR.INK cung cấp",
    tattooCareStep9: "Khi bôi chỉ dùng một lớp thật mỏng",
    tattooCareStep10: "Không bôi quá nhiều kem vì có thể làm hình xăm quá ẩm và gây khó chịu trong quá trình lành",

    roadmapTitle: "Lộ Trình Phục Hồi Theo Từng Giai Đoạn",
    phase1Title: "NGÀY 0-3: GIAI ĐOẠN ĐẦU",
    phase1Desc1: "Giữ hình xăm luôn sạch sẽ và khô ráo",
    phase1Desc2: "Rửa tay kỹ trước khi chạm vào vùng hình xăm",
    phase1Desc3: "Vệ sinh nhẹ nhàng khi cần thiết, tránh chà xát mạnh",
    phase1Desc4: "Không gãi, cạy, bóc hoặc chà xát lên hình xăm",
    
    phase2Title: "NGÀY 4-7: GIAI ĐOẠN BONG DA",
    phase2Desc1: "Da có thể khô, ngứa và bắt đầu bong, để da bong tự nhiên",
    phase2Desc2: "Không kéo hoặc bóc phần da đang bong, không cạy vảy",
    phase2Desc3: "Tiếp tục dưỡng ẩm mỏng bằng kem Aftercare do nghệ sỹ cung cấp",

    phase3Title: "SAU 30 NGÀY: CHĂM SÓC LÂU DÀI",
    phase3Desc1: "Giữ da sạch và đủ ẩm, bảo vệ hình xăm khỏi tia UV kéo dài",
    phase3Desc2: "Dùng kem chống nắng trên vùng da xăm đã lành hoàn toàn",

    dietTattooTitle: "ĂN UỐNG VÀ KIÊNG CỮ",
    dietTattoo1: "Đồ nếp, thịt bò, gà, hải sản: Kiêng 1-2 tuần đầu",
    dietTattoo2: "Rau muống: Kiêng 2-4 tuần",
    dietTattoo3: "Rượu bia, đồ chua (chanh/cam/tắc): Tránh trong 1 tuần đầu",

    // Phần Kiêng Ăn Tiếng Việt Chi Tiết
    tattooDietTitle: "Xăm Hình Xong Kiêng Ăn Gì Và Xăm Hình Ăn Trứng Được Không?",
    dietStickyRice: "ĐỒ NẾP: Kiêng 1–2 tuần. Không ăn xôi, bánh chưng, bánh rán và các món từ gạo nếp.",
    dietBeef: "THỊT BÒ: Kiêng 1–2 tuần. Hạn chế thịt bò trong thời gian hình xăm đang hồi phục để tránh sẹo.",
    dietChicken: "THỊT GÀ, VỊT: Kiêng 1–2 tuần. Hạn chế thịt gà và vịt trong giai đoạn đầu sau khi xăm.",
    dietWaterSpinach: "RAU MUỐNG: Kiêng 2–4 tuần. Không ăn rau muống trong thời gian da đang tái tạo tránh bị lồi.",
    dietSeafood: "HẢI SẢN: Kiêng 1–2 tuần. Hạn chế tôm, cua, ghẹ, mực và các loại hải sản trong giai đoạn đầu. Nếu có tiền sử dị ứng cần đặc biệt lưu ý.",
    dietEggs: "TRỨNG: Kiêng 3–7 ngày. Hạn chế trứng gà và trứng vịt trong những ngày đầu để màu xăm đều đẹp.",
    dietAlcohol: "RƯỢU BIA: Kiêng ít nhất 1 tuần. Không uống rượu bia trong giai đoạn hình xăm đang hồi phục.",
    dietSpicy: "ĐỒ CAY NÓNG VÀ NHIỀU DẦU MỠ: Hạn chế trong tuần đầu.",
    quickRuleTitle: "Quy Tắc Nhớ Nhanh Dinh Dưỡng Sau Khi Xăm",
    quickRuleDesc: "“Nếp, Bò, Gà kiêng 1-2 tuần; Rau muống 2-4 tuần; Hải sản, Trứng, Rượu bia tạm ngưng; Cay nóng bớt ngay tuần đầu.”",

    // Blog Post: Chăm sóc xỏ khuyên
    piercingNotice: "Lỗ xỏ mới cần được chăm sóc đúng cách trong suốt quá trình hồi phục. Lưu ý, trang này không cung cấp chẩn đoán y tế.",
    importantNote: "CHÚ Ý QUAN TRỌNG",
    piercingRule1: "Không tự ý tháo hoặc thay khuyên.",
    piercingRule2: "Rửa tay trước khi chạm vào lỗ xỏ.",
    piercingRule3: "Không xoay, kéo hoặc xê dịch khuyên không cần thiết.",
    piercingRule4: "Giữ lỗ xỏ sạch và khô.",
    piercingRule5: "Tránh va chạm, ma sát và nằm đè lên vị trí xỏ.",
    
    cleaningTitle: "VỆ SINH LỖ XỎ",
    clean1: "Vệ sinh 2-3 lần mỗi ngày trong 15-30 ngày đầu.",
    clean2: "Rửa tay sạch trước khi vệ sinh.",
    clean3: "Dùng dung dịch vệ sinh chuyên dụng theo hướng dẫn của BR.INK.",
    clean4: "Làm sạch nhẹ nhàng xung quanh lỗ xỏ, không chà xát mạnh.",
    clean5: "Không cạy hoặc bóc phần dịch khô, không xoay khuyên khi vệ sinh.",
    clean6: "Sau khi vệ sinh giữ vùng xỏ sạch và khô.",

    dontTitle: "NHỮNG ĐIỀU KHÔNG NÊN LÀM",
    dont1: "Không sờ tay khi chưa rửa tay.",
    dont2: "Không xoay hoặc kéo khuyên, không tự ý tháo hay thay khuyên quá sớm.",
    dont3: "Không dùng cồn, oxy già hoặc hóa chất mạnh, không bôi sản phẩm không rõ nguồn gốc.",
    dont4: "Không để tóc, quần áo, khẩu trang, tai nghe hoặc mũ bảo hiểm cọ vào lỗ xỏ.",

    envTitle: "SINH HOẠT & MÔI TRƯỜNG",
    env1: "Hạn chế vận động mạnh và ra quá nhiều mồ hôi, tránh va đập hoặc kéo vào khuyên.",
    env2: "Không nằm đè lên vị trí xỏ, giữ gối, khăn và quần áo sạch.",
    env3: "Hạn chế tai nghe hoặc vật dụng tạo áp lực lên lỗ xỏ.",
    env4: "Hạn chế ngâm nước lâu và bơi khi lỗ xỏ chưa hồi phục.",
    env5: "Không để mỹ phẩm, nước hoa hoặc hóa chất tiếp xúc trực tiếp với lỗ xỏ. Sau khi tắm nhớ làm khô nhẹ nhàng.",

    jewelryTitle: "TRANG SỨC & KIÊNG CỮ",
    jewelryText: "BR.INK ưu tiên sử dụng Titanium phù hợp cho lỗ xỏ mới. Không tự ý thay đổi trang sức. Nếu khuyên quá chật, bị lún vào da hoặc có dấu hiệu bất thường, hãy liên hệ BR.INK.",
    dietTitle: "Ăn uống và kiêng cữ:",
    diet1: "Ăn đủ protein, rau xanh, trái cây và uống đủ nước.",
    diet2: "Thịt bò, đồ nếp, hải sản: Kiêng 1–2 tuần (hải sản đặc biệt kiêng nếu có tiền sử dị ứng).",
    diet3: "Rau muống: Kiêng 2–4 tuần.",
    diet4: "Hạn chế rượu bia trong giai đoạn đầu.",

    healingTitle: "HỒI PHỤC & DẤU HIỆU CẦN LƯU Ý",
    heal1: "Thời gian hồi phục: Phụ thuộc vào vị trí xỏ, cơ địa, chất liệu trang sức. Không tự ý thay khuyên chỉ vì bên ngoài nhìn có vẻ lành.",
    heal2: "Biểu hiện thường gặp: Đỏ nhẹ, sưng nhẹ, hơi đau, nhạy cảm, ngứa nhẹ hoặc có một lượng nhỏ dịch trong/dịch khô. Không nặn, bóp hoặc cạy.",
    heal3: "Dấu hiệu cần liên hệ BR.INK: Sưng/đau tăng dần, đỏ lan rộng, dịch bất thường, khuyên lún vào da, xuất hiện cục bất thường hoặc nghi ngờ dị ứng.",
    heal4: "Khi nào cần hỗ trợ y tế: Đau dữ dội, sưng nhiều, đỏ lan nhanh, có mủ, sốt hoặc ớn lạnh, khó thở. Không tự ý dùng kháng sinh hoặc thuốc chống viêm.",

    locationsTitle: "CÁC VỊ TRÍ XỎ TẠI BR.INK",
    quickRuleTitle: "QUY TẮC NHỚ NHANH",
    quickRuleDesc: "Rửa tay trước khi chạm • Vệ sinh đúng cách • Không xoay khuyên • Không tháo khuyên quá sớm • Tránh va chạm và ma sát • Giữ vùng xỏ sạch và khô • Kiên nhẫn trong suốt quá trình hồi phục.",

    // Contact & Booking Section
    contactTitle: "Liên hệ",
    bookingTitle: "Đặt lịch hẹn",
    bookingDesc: "Hãy chia sẻ ý tưởng của bạn. Chúng tôi thường phản hồi trong vòng một ngày làm việc để trao đổi chi tiết.",
    workingHours: "Giờ mở cửa",
    workingTime: "Thứ Hai – Chủ Nhật, 9:00 AM – 21:00 PM",

    // Contact Form Fields
    fullName: "Họ và tên",
    emailAddress: "Địa chỉ Email",
    phoneNumber: "Số điện thoại",
    messageContent: "Nội dung ý tưởng / Yêu cầu đặt lịch",
    formNotice: "Bằng cách gửi biểu mẫu này, bạn đồng ý để chúng tôi liên hệ về yêu cầu đặt lịch của bạn.",
    submitButton: "Gửi yêu cầu",
  },
  en: {
    // Menu & Common
    home: "Home",
    about: "About",
    artists: "Artists",
    services: "Services",
    gallery: "Gallery",
    articles: "Articles",
    contact: "Contact",
    bookNow: "Book Now",
    viewGallery: "View Gallery",
    blogNav: "Blog navigation",
    backToBlog: "Back to Blog",
    
    // Hero Section
    heroTitle: "BÀ RỊA INK - Professional Tattoo & Piercing Studio",
    heroDesc: "High-end art tattooing space, custom designs tailored to your story, and safe, trusted piercing services in Ba Ria.",
    
    // About Section
    aboutTitle: "About Us",
    aboutHeading: "Style & Space",
    aboutText1: "Welcome to Ba Ria INK Tattoo Studio, where art and ink blend to create unforgettable masterpieces. Our studio is a space for you to freely express your personality, where we believe every tattoo holds a unique story.",
    aboutText2: "At Ba Ria INK Tattoo Studio, we understand that a tattoo is a lifelong mark. Therefore, we always take the time to listen to your ideas and consult with dedication to ensure your tattoo reflects your complete story, values, and aspirations.",
    aboutText3: "Welcome to the world of Ba Ria INK Tattoo Studio, where your dreams turn into art on your skin.",
    
    // Services Section
    servicesTitle: "Our Services",
    service1Title: "Custom Art Tattoo",
    service1Desc: "Original tattoo designs based on your story, style, and desired placement.",
    service2Title: "Professional Piercing",
    service2Desc: "Sophisticated piercing consultation and a safe, clean, and meticulous piercing experience.",
    service3Title: "Cover-up & Tattoo Fix",
    service3Desc: "Refresh old tattoos or transform them into a flawless cover-up piece.",
    
    // Artists / Team Section
    artistsTitle: "Tattoo Artists",
    artistName: "Trình Nguyễn ( BIN )",
    artistDesc: "Custom art tattoo expert dedicated to bringing you works that carry your own mark and story.",

    // Why Choose Us Section
    whyChooseUsTitle: "Why choose us",
    stat1Label: "Tattoos completed",
    stat2Label: "Happy clients",
    stat3Label: "Awards won",
    stat4Label: "Piercings completed",

    // Gallery Page
    galleryPageTitle: "Gallery",
    gallerySubtitle: "A close-up look at the lines, personality, and dedication behind our latest tattoo works.",

    // Blog & Articles Page
    blogPageTitle: "Articles & News",
    blogSubtitle: "Professional insights, experiences, and care guides for tattoos and piercings.",
    blogTagline: "Stories, craft & care",
    blogMainTitle: "The Good Luck Journal",
    blogMainDesc: "Honest tattoo advice, creative inspiration, and stories from inside our studio.",
    studioStoriesTag: "From the studio",
    latestStoriesTitle: "Latest stories",
    latestStoriesDesc: "Practical knowledge to help you feel informed before, during, and after your appointment.",
    ctaTag: "Your idea starts here",
    ctaTitle: "Ready to plan your next tattoo?",
    ctaDesc: "Tell us about your idea and we will help you choose the right artist, style, and placement.",
    bookConsultation: "Book a consultation",
    contactConsultTitle: "Need direct consultation?",
    contactConsultDesc: "Contact the BR.INK team immediately via phone at 0907 879 567 or visit our studio directly at 258 Cach Mang Thang 8, Phuoc Hiep, Ba Ria!",

    // Blog Post: Chăm sóc hình xăm mới 14 ngày đầu tiên
    tattooCareTitle: "New Tattoo Care: The First 14 Days",
    tattooCareSubtitle: "Welcome to BR.INK's tattoo care guide. Follow your artist's instructions carefully for the best and safest healing process. Note: This page does not provide medical diagnosis.",
    tattooCareIntro: "Welcome to BR.INK's tattoo care guide. Follow your artist's instructions carefully for the best and safest healing process. Note: This page does not provide medical diagnosis.",
    tattooCareImportant: "IMPORTANT AFTERCARE NOTICE",
    tattooCareStep1: "Keep bandage on for 6 hours immediately after the session",
    tattooCareStep2: "Remove bandage after 6 hours",
    tattooCareStep3: "Gently wash with clean water or sterile saline solution",
    tattooCareStep4: "Completely clean away excess ink, blood, and plasma",
    tattooCareStep5: "Do not scrub or rub the tattoo",
    tattooCareStep6: "Pat dry completely with clean paper towel",
    tattooCareStep7: "Do not apply aftercare ointment immediately after drying",
    tattooCareStep8: "Wait 24-48 hours before applying BR.INK aftercare product",
    tattooCareStep9: "Apply a very thin layer only",
    tattooCareStep10: "Do not over-apply ointment as it can over-moisturize and cause discomfort during healing",

    roadmapTitle: "Stage-by-Stage Healing Roadmap",
    phase1Title: "DAY 0-3: INITIAL STAGE",
    phase1Desc1: "Keep the tattoo clean and dry",
    phase1Desc2: "Wash hands thoroughly before touching the tattoo area",
    phase1Desc3: "Clean gently when needed, avoid heavy rubbing",
    phase1Desc4: "Do not scratch, peel, pick, or rub the tattoo",
    
    phase2Title: "DAY 4-7: PEELING STAGE",
    phase2Desc1: "Skin may feel dry, itchy and start peeling; let it peel naturally",
    phase2Desc2: "Do not pull or peel off flaking skin, do not pick scabs",
    phase2Desc3: "Continue thin moisturization with Aftercare cream provided by the artist",

    phase3Title: "AFTER 30 DAYS: LONG-TERM CARE",
    phase3Desc1: "Keep skin clean and moisturized, protect tattoo from prolonged UV exposure",
    phase3Desc2: "Use sunscreen on fully healed tattooed skin",

    dietTattooTitle: "DIET AND RESTRICTIONS",
    dietTattoo1: "Sticky rice, beef, chicken, seafood: Avoid for the first 1-2 weeks",
    dietTattoo2: "Water spinach: Avoid for 2-4 weeks",
    dietTattoo3: "Alcohol, acidic foods (lemon/orange/kumquat): Avoid during the first week",

    // Phần Kiêng Ăn Tiếng Anh Chi Tiết
    tattooDietTitle: "What to Avoid Eating After Getting a Tattoo & Can You Eat Eggs?",
    dietStickyRice: "STICKY RICE: Avoid for 1–2 weeks. Do not eat sticky rice, chung cake, and sticky rice dishes.",
    dietBeef: "BEEF: Avoid for 1–2 weeks. Limit beef during recovery to prevent scarring.",
    dietChicken: "CHICKEN & DUCK: Avoid for 1–2 weeks during the initial healing stage.",
    dietWaterSpinach: "WATER SPINACH: Avoid for 2–4 weeks. Do not eat water spinach while the skin is regenerating to prevent raised scars.",
    dietSeafood: "SEAFOOD: Avoid for 1–2 weeks. Limit shrimp, crab, squid, and seafood during early stages, especially if you have allergies.",
    dietEggs: "EGGS: Avoid for 3–7 days. Limit eggs in the first few days to ensure even and beautiful pigmentation.",
    dietAlcohol: "ALCOHOL: Avoid for at least 1 week while the tattoo is healing.",
    dietSpicy: "SPICY & OILY FOODS: Limit during the first week.",
    quickRuleTitle: "Quick Nutrition Rule After Tattooing",
    quickRuleDesc: "Sticky rice, beef, chicken for 1-2 weeks; Water spinach 2-4 weeks; Seafood, eggs, alcohol on hold; Spicy foods cut down the first week.",

    // Blog Post: Chăm sóc xỏ khuyên
    piercingNotice: "New piercings need proper care throughout the healing process. Note: This page does not provide medical diagnosis.",
    importantNote: "IMPORTANT NOTICE",
    piercingRule1: "Do not remove or change jewelry on your own.",
    piercingRule2: "Wash your hands before touching the piercing.",
    piercingRule3: "Do not twist, pull, or move the jewelry unnecessarily.",
    piercingRule4: "Keep the piercing clean and dry.",
    piercingRule5: "Avoid bumps, friction, and sleeping on the piercing.",
    
    cleaningTitle: "PIERCING CLEANING",
    clean1: "Clean 2-3 times daily for the first 15-30 days.",
    clean2: "Wash hands thoroughly before cleaning.",
    clean3: "Use specialized cleaning solution as directed by BR.INK.",
    clean4: "Gently clean around the piercing without heavy scrubbing.",
    clean5: "Do not pick or peel dried discharge, do not twist jewelry while cleaning.",
    clean6: "Keep the piercing area clean and dry after cleaning.",

    dontTitle: "THINGS TO AVOID",
    dont1: "Do not touch without washing hands first.",
    dont2: "Do not twist or pull jewelry, do not remove or change too early.",
    dont3: "Do not use alcohol, hydrogen peroxide, or harsh chemicals, do not apply unknown products.",
    dont4: "Do not let hair, clothes, masks, headphones, or helmets rub against the piercing.",

    envTitle: "LIFESTYLE & ENVIRONMENT",
    env1: "Limit heavy workouts and excessive sweating, avoid impacts or pulling the jewelry.",
    env2: "Do not sleep on the piercing, keep pillows, towels, and clothes clean.",
    env3: "Limit headphones or items putting pressure on the piercing.",
    env4: "Limit prolonged water soaking and swimming until healed.",
    env5: "Do not let cosmetics, perfumes, or chemicals directly contact the piercing. Gently dry after showering.",

    jewelryTitle: "JEWELRY & RESTRICTIONS",
    jewelryText: "BR.INK prioritizes Titanium suitable for new piercings. Do not change jewelry arbitrarily. If the jewelry is too tight, sinks into the skin, or shows abnormal signs, contact BR.INK.",
    dietTitle: "Diet and Restrictions:",
    diet1: "Eat adequate protein, greens, fruits, and drink enough water.",
    diet2: "Beef, sticky rice, seafood: Avoid for 1-2 weeks (avoid seafood strictly if allergic).",
    diet3: "Water spinach: Avoid for 2-4 weeks.",
    diet4: "Limit alcohol during the early stage.",

    healingTitle: "HEALING & SIGNS TO WATCH",
    heal1: "Healing time: Depends on placement, body condition, jewelry material. Do not change jewelry just because the outside looks healed.",
    heal2: "Common symptoms: Mild redness, mild swelling, slight pain, sensitivity, mild itching, or small amount of clear/dried discharge. Do not squeeze or pick.",
    heal3: "Signs to contact BR.INK: Increasing swelling/pain, spreading redness, abnormal discharge, jewelry sinking into skin, abnormal lumps or allergy suspicion.",
    heal4: "When to seek medical help: Severe pain, heavy swelling, rapidly spreading redness, pus, fever or chills, breathing difficulty. Do not self-prescribe antibiotics or anti-inflammatory drugs.",

    locationsTitle: "PIERCING PLACEMENTS AT BR.INK",
    quickRuleTitle: "QUICK REMINDER RULES",
    quickRuleDesc: "Wash hands before touching • Clean properly • Do not twist jewelry • Do not remove jewelry too early • Avoid bumps and friction • Keep area clean and dry • Be patient throughout healing.",

    // Contact & Booking Section
    contactTitle: "Contact Us",
    bookingTitle: "Book An Appointment",
    bookingDesc: "Share your ideas with us. We typically respond within one business day to discuss details.",
    workingHours: "Opening Hours",
    workingTime: "Monday – Sunday, 9:00 AM – 21:00 PM",

    // Contact Form Fields
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    messageContent: "Idea Details / Appointment Request",
    formNotice: "By submitting this form, you agree to let us contact you regarding your appointment request.",
    submitButton: "Submit Request",
  },
};

type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations.vi) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("br_ink_lang") as Language;
      if (savedLang && translations[savedLang]) {
        return savedLang;
      }
    }
    return "vi";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("br_ink_lang", newLang);
    }
  };

  const t = (key: keyof typeof translations.vi) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}