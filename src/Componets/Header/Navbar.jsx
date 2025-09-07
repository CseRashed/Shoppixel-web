import React, { useContext, useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxios from '../../Hooks/useAxios';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {user, logOut} =useContext(AuthContext)
  const [cart, setCart]= useState([])
  const email= user?.email;
  const axiosSecure =useAxios()
  useEffect(()=>{
 axiosSecure.get(`/carts/${email}`)
 .then((res)=>{
  // console.log(res.data)
  setCart(res.data)
 })
  },[user])
  return (
    <div className="w-full px-4 py-3 bg-gradient-to-r from-white to-blue-50 shadow-md sticky top-0 z-50">
      {/* ✅ Top Row: Logo + Icons */}
      <div className="flex justify-between items-center">
        {/* Logo & Sidebar */}
        <div className="flex items-center gap-3 text-2xl font-extrabold text-[#e99157]">
          <IoMdMenu
            onClick={() => setOpen(true)}
            className="cursor-pointer block lg:hidden"
          />
          <Link to="/">Shoppixel</Link>
        </div>

        {/* Icons + User */}
        <div className="flex items-center gap-5">
          {/* Message */}
       <Link to={'/message'}>
       <div className="relative">
            <Tooltip title="Messages" placement="top">
              <LuMessageSquareMore className="text-2xl text-gray-600 hover:text-[#e99157] cursor-pointer" />
            </Tooltip>
            <span className="absolute -top-2 -right-2 bg-[#e99157] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </div>
       </Link>


          {/* Cart */}
         <Link to={'/cart'}>
         <div className="relative">
            <Tooltip  title="Cart" placement="top">
              <MdOutlineShoppingCart className="text-2xl text-gray-600 hover:text-[#e99157] cursor-pointer" />
            </Tooltip>
            <span className="absolute -top-2 -right-2 bg-[#e99157] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cart.length}</span>
          </div>
         </Link>

          {/* User Dropdown */}
          <div className="relative group">
            <FaRegUser className="text-2xl text-gray-600 hover:text-[#e99157] cursor-pointer" />
            <div className="absolute right-0  hidden group-hover:block bg-white border rounded-lg shadow-md p-3 z-50 space-y-2 w-40">
              <Link to="/user" className="block text-sm text-gray-700 hover:text-blue-600">User</Link>
              {
                user?<button onClick={logOut} className="block text-sm text-gray-700 hover:text-blue-600 cursor-pointer">Log Out</button>:<div><Link to="/login" className="block text-sm text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/signIn" className="block text-sm text-gray-700 hover:text-blue-600">Register</Link> </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Search Bar */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex w-full sm:w-auto gap-2">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full sm:w-72 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99157]"
          />
          <button className="bg-[#e99157] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all">
            Search
          </button>
        </div>
      </div>

      {/* ✅ Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">Shop by Category</h2>
        <nav className="flex flex-col space-y-3 text-gray-700">
          <Link to="#" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Jewellery</Link>
          <Link to="#" className="hover:text-blue-500">Fashion</Link>
          <Link to="#" className="hover:text-blue-500">New Arrivals</Link>
          <Link to="#" className="hover:text-blue-500">Cosmetics</Link>
          <Link to="#" className="hover:text-blue-500">All Brands</Link>
          <Link to="#" className="hover:text-blue-500">Blog</Link>
          <Link to="#" className="hover:text-blue-500">Furniture</Link>
          <Link to="#" className="hover:text-blue-500">More</Link>
        </nav>
      </div>
    </div>
  );
}
