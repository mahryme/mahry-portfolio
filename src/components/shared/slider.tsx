"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { SwiperOptions } from "swiper/types";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export interface Slide {
  src: string;
  caption?: string;
}

interface SliderProps {
  slides: Slide[];
  speed?: number;    
  direction?: 'ltr' | 'rtl';
  options?: Partial<SwiperOptions>;
}

export function Slider({
  slides,
  speed = 400,    
  options = {},
}: SliderProps) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto" 
        spaceBetween={12}
        breakpoints={{
            768: {
              spaceBetween: 20
            }
        }}
        centeredSlides={false}
        speed={speed}    
        grabCursor={true}
        allowTouchMove={true}
        freeMode={{
            enabled: true,
            momentum: true,
            minimumVelocity: 0.02,
            sticky: false
          }}
        observer={true}
        observeParents={true}
        {...options}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="w-auto max-w-[440px]">
            <div className="flex flex-col gap-3">
                <figure className="bg-cont-secondary p-1 rounded-2xl">
                    <div className="relative w-full aspect-[440/277.68]">
                        <Image
                            src={slide.src}
                            alt={slide.caption ?? `Slide ${i + 1}`}
                            loading="lazy"
                            fill
                            className="object-cover"
                            unoptimized={true}
                        />
                    </div>
                </figure>
                {slide.caption && (
                    <figcaption className="text-label-xs font-semibold text-text-secondary">
                        {slide.caption}
                    </figcaption>
                )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}