import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxios from '../../Hooks/useAxios';
import { NavLink, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

export default function LatestProducts() {
  const allProduct =useProducts()
  const [products, setProducts]= useState([])

  useEffect(()=>{
      const latestProducts = allProduct.filter((p)=>p.position=='Latest')
  setProducts(latestProducts)
  },[allProduct])
  const scroll = (dir, id) => {
    const slider = document.getElementById(id);
    if (slider) {
      const scrollAmount = window.innerWidth < 768 ? 240 : 300;
      slider.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

      // const navigate =useNavigate()
      // const handleProduct=(id)=>{
      //   navigate(`products/${id}`)
       
    
      // }

  return (
    <div className='container mx-auto mt-7 lg:mt-16 md:mt-10'>
      <h3 className='text-2xl font-medium mb-4'>Latest Products</h3>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left", "featured-slider")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowLeft size={window.innerWidth < 768 ? 14 : 18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right", "featured-slider")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 md:p-3 rounded-full hover:bg-gray-200"
        >
          <FaArrowRight size={window.innerWidth < 768 ? 14 : 18} />
        </button>

        {/* Slider */}
        <div
          id="featured-slider"
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-6 snap-x scroll-smooth"
        >
          {products.map((product) => (
            <NavLink
             to={`products/${product._id}`}
            // onClick={()=>handleProduct(product._id)}
              key={product._id}
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
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
