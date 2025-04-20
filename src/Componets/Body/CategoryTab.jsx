import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CategoryTab() {
  const [category, setCategory] = useState("Fashion");
  const sliderRef = useRef(null);

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
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = window.innerWidth < 768 ? 240 : 300;
      slider.scrollLeft += dir === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="px-4 py-10 container mx-auto overflow-hidden">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
        {["Fashion", "Electronics", "Furniture"].map((tab) => (
          <button
            key={tab}
            className={`text-lg font-semibold transition ${
              category === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setCategory(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>

        {/* Product List */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 px-6 scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-60 lg:w-64 snap-start"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-100 h-28 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image</span>
                </div>
                <div className="p-4 space-y-1">
                  <h2 className="text-base font-semibold">{product.name}</h2>
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
  );
}
