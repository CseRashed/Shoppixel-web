import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import t_shart from './../../assets/BannerSlider/BannerCategory/t-shart.png';
import watche from './../../assets/BannerSlider/BannerCategory/watch.png';
import rolling from './../../assets/BannerSlider/BannerCategory/rolling.png';
import chair from './../../assets/BannerSlider/BannerCategory/chair.png';
import shoe from './../../assets/BannerSlider/BannerCategory/shoe.png';
import bag from './../../assets/BannerSlider/BannerCategory/bag.png';
import xbox from './../../assets/BannerSlider/BannerCategory/xbox.png';
import mobile from './../../assets/BannerSlider/BannerCategory/mobile.png';

export default function BannerCategory() {
  const items = [
    { img: mobile, title: 'Mobile' },
    { img: t_shart, title: 'T-Shirt' },
    { img: watche, title: 'Watch' },
    { img: rolling, title: 'Rolling' },
    { img: chair, title: 'Chair' },
    { img: shoe, title: 'Shoe' },
    { img: bag, title: 'Bag' },
    { img: xbox, title: 'Xbox' },
    { img: xbox, title: 'Xbox' },
    { img: xbox, title: 'Xbox' },
  ];

  return (
    <div className="mt-7 ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white lg:w-[200px] w-[150px] p-3 rounded-md shadow hover:shadow-md transition duration-300">
              <img
                className="w-full h-[100px] object-contain"
                src={item.img}
                alt={item.title}
              />
              <h2 className="text-center text-base font-medium mt-2">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
