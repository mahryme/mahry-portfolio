"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import MediaFrame from "@/components/site/media-frame";

import "swiper/css";
import "swiper/css/free-mode";

export type MediaSlide = {
    src: string;
    alt: string;
    caption?: string;
};

export default function MediaSlider({ slides }: { slides: MediaSlide[] }) {
    return (
        <div className="w-full overflow-hidden">
            <Swiper
                modules={[FreeMode]}
                slidesPerView="auto"
                spaceBetween={16}
                grabCursor
                freeMode={{ enabled: true, momentum: true }}
                observer
                observeParents
                className="w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.src}
                        className="!w-[664px] max-w-[88%]"
                    >
                        <MediaFrame
                            src={slide.src}
                            alt={slide.alt}
                            caption={slide.caption}
                            sizes="664px"
                            className="w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
