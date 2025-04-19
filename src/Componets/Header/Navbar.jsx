import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
export default function Navbar() {
          const [open, setOpen] = useState(false)
        
  return (
    <>
      <div className='w-full px-4 py-3'>

        {/* ✅ Top Bar: Shoppixel + Icons => Always same row */}
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
          <div className='text-3xl flex gap-1 items-center font-bold'>
                <p><IoMdMenu  onClick={() => setOpen(true)}  className=' lg:hidden sm:block md:block' /></p>
            
                <p >Shoppixel</p>
          </div>
     {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-xl font-semibold mb-4">Shop By Category</h1>
        <div className="space-y-3">
          <div>          <Link to="#">Home</Link>
          </div>
          <Link to="#">Jewellery</Link>
          <div>          <Link to="#">Fashion</Link>
          </div>
          <div>          <Link to="#">New Arrivals</Link>
</div>
          <div>          <Link to="#">Cosmetics</Link>
          </div>
          <div>          <Link to="#">All Brands</Link>
          </div>
          <div>          <Link to="#">Blog</Link>
          </div>
          <div>          <Link to="#">Furniture</Link>
          </div>
          <div>          <Link to="#">More</Link>
          </div>
          
         
         
        </div>
      </div>
          {/* Icons */}
          <div className='flex gap-5'>
            {/* Message */}
            <div className="relative">
              <Tooltip title="Message" placement="top">
                <p><LuMessageSquareMore className="text-2xl" /></p>
              </Tooltip>
              <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </p>
            </div>

            {/* Heart */}
            <div className="relative">
              <Tooltip title="Wishlist" placement="top">
                <p><FaRegHeart className="text-2xl" /></p>
              </Tooltip>
              <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </p>
            </div>

            {/* Cart */}
            <div className="relative">
              <Tooltip title="Cart" placement="top">
                <p><MdOutlineShoppingCart className="text-2xl" /></p>
              </Tooltip>
              <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </p>
            </div>
          </div>
        </div>

        {/* 🔻 Search + Login Row: Stacked on mobile, inline on large */}
        <div className='flex  sm:flex-row justify-between items-start sm:items-center mt-4 gap-3'>

          {/* Search Box */}
          <div className='flex  sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto'>
            <input
              placeholder='Search Products Here ...'
              className='border rounded-md p-2 w-full sm:w-72'
              type="text"
            />
            <button className='bg-orange-400 rounded-md px-4 py-2 w-full sm:w-auto'>Search</button>
          </div>

          {/* Login/Register */}
          <div className='flex gap-3'>
           
            <div className="dropdown dropdown-left">
  <div tabIndex={0} role="button" className=" m-1"> <Link ><FaRegUser className='text-2xl ' /></Link> </div>
  <ul tabIndex={0} className="dropdown-content menu space-y-4 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
   <Link>Login</Link>
   <Link>Register</Link>
    
  </ul>
</div>
          </div>
        </div>
      </div>
    </>
  )
}
