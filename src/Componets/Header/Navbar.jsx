import React from 'react'
import logo from './../../assets/logo/Shoppixel1.png'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
export default function Navbar() {
  return (
   <>
   <div className='flex items-center justify-between'>
    <div>
        <img className='w-[200px] ' src={logo} alt="" />
    </div>
    <div className='flex items-center gap-[250px]'>
       <div> <input placeholder='Search Products Here ...' className='border w-[400px] rounded-md mr-3 p-2' type="text" />
       <button className='bg-orange-400 w-[150px] rounded-md p-2'>Search</button></div>
       <div className='flex gap-3'>
       <Link>Login</Link> |
       <Link>Resister</Link>
       </div>
    </div>
    <div className='flex gap-7'>
    <div className="relative">
    
          <Tooltip title="Message" placement="top">
          <p><LuMessageSquareMore className="text-2xl"/></p>
  <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
   2
  </p>
          </Tooltip>
</div>
    <div className="relative">
  
          <Tooltip title="love" placement="top">
          <p><FaRegHeart className="text-2xl" /></p>
  <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
   2
  </p>
          </Tooltip>
</div>
    <div className="relative">
    
          <Tooltip title="Cart" placement="top">
          <p><MdOutlineShoppingCart className="text-2xl" /></p>
  <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
   2
  </p>
          </Tooltip>
</div>
    </div>
   </div>
  
   </>
  )
}
