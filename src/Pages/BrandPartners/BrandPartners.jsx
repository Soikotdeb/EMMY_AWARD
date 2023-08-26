
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../assets/images/Codemanbd-logo.webp';
import image3 from '../../assets/images/HiTech.png';
import image2 from '../../assets/images/creation.jpeg';
import image4 from '../../assets/images/greenTrust.jpeg';
import image5 from '../../assets/images/Nishans-Media.svg';


const BrandPartners = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,

    ];

    return (
        <div className="py-10 px-10 bg-white">
            <p className='text-black font-semibold flex justify-center mb-5'>আমাদের পার্টনার</p>
            <Swiper
                className="relative w-full h-full" 
                spaceBetween={25}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    // When window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                loop={true} // Enable continuous sliding
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center border p-1 rounded-lg bg-gray-50">
                        <img src={image} alt={`Slide ${index}`} className="w-50 h-52 rounded-lg shadow-md flex mx-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandPartners;
