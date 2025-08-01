import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";

import img1 from "../assets/17 New star.png";
import img2 from "../assets/40 create party.png";
import img3 from "../assets/46 click lock.png";
import img4 from "../assets/14 gifting classic.png";
import img5 from "../assets/11 live screen 1.png";
import img6 from "../assets/10 Get started.png";
import img7 from "../assets/34 Party event.png";
import img8 from "../assets/81 expplore     all.png";
import img9 from "../assets/live stream 2.png";
import img10 from "../assets/stream feed 1.png";

const sliderData = [
  { img: img1, text: "Enjoy The Live Streaming Fun" },
  { img: img2, text: "Create your own room" },
  { img: img3, text: "Earn while in a room" },
  { img: img4, text: "In Stream Gifting rewards" },
  { img: img5, text: "In Stream chat with fans" },
  { img: img6, text: "See Top Streamers and Events" },
  { img: img7, text: "Enjoy the Party Feel here" },
  { img: img8, text: "Connect and find friends Worldwide" },
  { img: img9, text: "Come on Live with One Tap" },
  { img: img10, text: "Explore the World of Live Streamers" },
];

export default function Front() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black slid">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="slider-container"
        breakpoints={{
          320: { slidesPerView: 2 }, // Mobile portrait
          480: { slidesPerView: 3 }, // Mobile landscape
          768: { slidesPerView: 4 }, // Tablet
          1024: { slidesPerView: 5 }, // Small desktop
          1280: { slidesPerView: 6 }, // Large desktop
        }}
      >
        {sliderData.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide key={index}>
              <div
                className={`slide-image-wrapper ${
                  isActive ? "active-slide" : "inactive-slide"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="main-slide-image"
                />
                {isActive && (
                  <div className="slide-text-overlay">
                    <h2>{slide.text}</h2>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Thumbnails */}
      <div className="thumbnail-container flex gap-3 overflow-x-auto scrollbar-hide px-4 md:justify-center">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail flex-shrink-0 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => swiperRef.current.slideToLoop(index)}
          >
            <img
              src={slide.img}
              alt={slide.text}
              className="w-16 h-16 object-cover rounded-lg border border-gray-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
