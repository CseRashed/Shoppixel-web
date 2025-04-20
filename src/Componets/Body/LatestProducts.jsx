import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function LatestProducts() {
      const [category, setCategory] = useState("Fashion");
    
    const allProducts = {
        Fashion: new Array(15).fill().map((_, i) => ({
          id: i,
          name: "T-Shirt",
          brand: "Zara",
          price: 19.99,
        })),
        Electronics: new Array(15).fill().map((_, i) => ({
          id: i + 100,
          name: "Headphones",
          brand: "Sony",
          price: 79.99,
        })),
        Furniture: new Array(15).fill().map((_, i) => ({
          id: i + 200,
          name: "Chair",
          brand: "Ikea",
          price: 39.99,
        })),
      };
      const products = allProducts[category];

  const scroll = (dir) => {
    const slider = document.getElementById("slider");
    if (slider) {
      const scrollAmount = window.innerWidth < 768 ? 240 : 300;
      slider.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='container mx-auto my-16'>
        <h3 className='text-2xl font-medium'>Latest Products</h3>
    <div>
 <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft size={window.innerWidth < 768 ? 14 : 18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight size={window.innerWidth < 768 ? 14 : 18} />
        </button>

        {/* Carousel */}
        <div
          id="slider"
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-6 snap-x scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start flex-shrink-0 w-52 sm:w-56 md:w-60 lg:w-64"
            >
              <div className="card bg-base-200 shadow-md">
                <figure className="bg-white h-28 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image</span>
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-base">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <p className="text-yellow-500 text-sm">★★★★☆</p>
                  <p className="text-green-600 font-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
