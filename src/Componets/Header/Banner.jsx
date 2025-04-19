import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide1 from './../../assets/BannerSlider/sample-1.jpg';
import slide2 from './../../assets/BannerSlider/sample-2.jpg';
import subSlider1 from './../../assets/BannerSlider/sub-banner-1.jpg';
import subSlider2 from './../../assets/BannerSlider/sub-banner-2.jpg';
import BannerCategory from './BannerCategory';

export default function Banner() {
  const slideText = (
    <div className="absolute top-5 left-5 md:top-10 md:left-[100px] lg:left-[150px] bg-white/80 p-2 md:p-4 rounded-md shadow-md max-w-[90%] sm:max-w-[70%] md:max-w-[60%]">
      <p className="text-sm md:text-lg">Big Saving Days Sale</p>
      <h2 className="text-base md:text-2xl font-semibold leading-snug">Women Solid Round Green T-Shirt</h2>
      <p className="mt-1 text-sm md:text-base">
        Starting At Only <span className="text-orange-500 font-bold">$58.00</span>
      </p>
      <button className="mt-2 md:mt-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 md:px-5 md:py-2 rounded">
        Shop Now
      </button>
    </div>
  );

  return (
  <div className='bg-[#eee3e3] py-5 mt-5'>
      <div className="container mx-auto px-4 ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Slider */}
        <div className="relative w-full lg:w-3/4">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide1}
                  alt="Slide 1"
                  className="w-full h-auto rounded-md transition-all duration-300 ease-in-out hover:scale-[1.02]"
                />
                {slideText}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide2}
                  alt="Slide 2"
                  className="w-full h-auto rounded-md transition-all duration-300 ease-in-out hover:scale-[1.02]"
                />
                {slideText}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Sub Sliders */}
        <div className="w-full relative lg:w-1/4  flex justify-between flex-col gap-5">
        <div className="w-full relative rounded-md overflow-hidden group">
  <img
    src={subSlider1}
    alt="Sub 1"
    className="w-full object-cover rounded-md transition-all duration-300 ease-in-out group-hover:scale-105"
  />
  
  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start p-4 ">
    <p className="text-sm md:text-base">Limited Offer</p>
    <h3 className="text-lg md:text-xl font-semibold">Stylish Denim Jacket</h3>
    <button className="mt-2 bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-sm md:text-base">
      Shop Now
    </button>
  </div>
</div>
<div className="w-full relative rounded-md overflow-hidden group">
  <img
    src={subSlider2}
    alt="Sub 2"
    className="w-full object-cover rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
  />

  <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-8">
    <div className="  p-2 md:p-4 rounded-md max-w-[70%] md:max-w-[50%]">
      <p className="text-sm md:text-base">Limited Offer</p>
      <h3 className="text-lg md:text-xl font-semibold">Stylish Denim Jacket</h3>
      <button className="mt-2 bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-sm md:text-base">
        Shop Now
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
      {/*  */}
      <div>
        <BannerCategory></BannerCategory>
      </div>
    </div>
  </div>
  );
}
