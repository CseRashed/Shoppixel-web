import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import {  NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate =useNavigate()
 const navItems = [
  'Fashion',
  'Jewellery',
  'Watches',
  'OutWear',
  'Cosmetics',
  'Accessories',
  'Electronic',
  'Furniture',
  'Sunglasses',
  'Rolling Diamond',
  'Xbox Controller',
  'Leather Watch',
  'Smart Tablet',
  'Purse',
];

// const handleProduct=(item)=>{
// navigate(`/products/category/${item}`)
// }

  return (
    <>
      <div className='w-full px-4 py-3 bg-gradient-to-r from-white to-blue-50 shadow-md flex justify-between items-center flex-wrap gap-4 sticky top-0 z-50'>

        {/* Left: Category Button */}
        <div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded-md text-blue-600 font-medium hover:bg-blue-100 transition-all"
          >
            <HiOutlineMenuAlt1 className="text-xl" />
            <span>Category</span>
            <FaAngleDown className="hidden md:inline-block" />
          </button>
        </div>

        {/* Middle: Nav Items (Hidden on small) */}
        <div className='hidden lg:flex items-center gap-6 text-gray-700 font-medium'>
          <NavLink to="/" className="hover:text-blue-600 transition">Home</NavLink>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">Fashion</span>
            <ul className="absolute hidden group-hover:block top-7 left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-40">
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Watch</li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Cosmetics</li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Sunglass</li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Neckless</li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Purse</li>
              <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Money Bag</li>
            </ul>
          </div>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">New Arrivals</span>
            <ul className="absolute hidden group-hover:block top-7 left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-40">
              
                <li  className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Item </li>
            
            </ul>
          </div>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">All Brands</span>
            <ul className="absolute hidden group-hover:block top-7 left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-40">
             
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Brand</li>
             
            </ul>
          </div>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">Blog</span>
            <ul className="absolute hidden group-hover:block top-7 left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-40">
             
                <li  className="px-4 py-2 hover:bg-blue-100 cursor-pointer">Blog</li>
             
            </ul>
          </div>

          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-600 transition">More</span>
            <ul className="absolute hidden group-hover:block top-7 left-0 bg-white shadow-lg rounded-lg w-48 py-2 z-40">
              
               <NavLink to={'/categoryProducts'}> <li  className="px-4 py-2 hover:bg-blue-100 cursor-pointer">More </li></NavLink>
          
            </ul>
          </div>
        </div>

        {/* Right Text */}
        <div className='text-sm text-gray-600 hidden md:block'>Free International Delivery</div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">Shop by Category</h2>
        <nav className="flex flex-col space-y-3 text-gray-700">

          {navItems.map((item, index) => (
        <NavLink
        to={`/products/category/${item}`}
          key={index}
          className="hover:text-blue-500"
          // onClick={() => handleProduct(item)}
        >
          {item}
        </NavLink>
      ))}
        
        </nav>
      </div>
    </>
  );
}
