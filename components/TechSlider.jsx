"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const techs = [
    { name: "GitHub", src: "/images/github.png" },
    { name: "Bootstrap", src: "/images/bootstrap.png" },
    { name: "React", src: "/images/react.png" },
    { name: "Next.js", src: "/images/nextjs.png" },
    { name: "JavaScript", src: "/images/node.png" },
    { name: "Tailwind", src: "/images/tailwindcss.png" },
    { name: "WordPress", src: "/images/wordpress.png" },
];

export default function TechSlider() {
    return (
        <>
            <div className="px-6 md:px-10 lg:px-20 bg-linear-to-r from-[#B18325]/50 via-[#0000]/55 to-[black]/60 py-12 border-y border-[#B18325]/10 backdrop-blur-sm">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={30}
                    speed={3000}
                    slidesPerView={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="flex items-center"
                >
                    {techs.map((tech, i) => (
                        <SwiperSlide key={i} className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <Image src={tech.src} alt={tech.name} width={130} height={130} className="filter grayscale invert brightness-200" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
