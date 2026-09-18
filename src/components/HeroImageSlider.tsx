"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import img1 from "../../public/images/hero-section-images/1.webp";
import img2 from "../../public/images/hero-section-images/2.webp";
import img3 from "../../public/images/hero-section-images/3.webp";
import img4 from "../../public/images/hero-section-images/4.webp";
import img5 from "../../public/images/hero-section-images/5.webp";

const SLIDES = [
  { src: img1, alt: "A curated arrangement of certified diamonds" },
  { src: img2, alt: "An arrangement of precious coloured gemstones" },
  { src: img3, alt: "A curated arrangement of cut diamonds" },
  { src: img4, alt: "A diamond and platinum necklace" },
  { src: img5, alt: "A luxury Rolex watch with a diamond bezel" },
];

export default function HeroImageSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="hero-swiper"
      style={
        {
          "--swiper-pagination-color": "var(--color-gold)",
          "--swiper-pagination-bullet-inactive-color": "var(--color-line)",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        } as React.CSSProperties
      }
    >
      {SLIDES.map((slide, i) => (
        <SwiperSlide key={slide.src.src}>
          <Image
            src={slide.src}
            alt={slide.alt}
            priority={i === 0}
            className="relative aspect-4/5 h-auto w-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
