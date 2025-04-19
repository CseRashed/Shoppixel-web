import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
   <>
   <div className='mt-5 flex justify-between items-center '>
    
    
   <div className="m-1">
        <button
          onClick={() => setOpen(true)}
          className="btn btn-outline flex text-xl gap-3 items-center"
        >
          <HiOutlineMenuAlt1 />
          <p>Short by Category</p>
          <FaAngleDown />
        </button>
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
          <div>          <Link to="#">Fashion</Link>
          </div>
          <Link to="#">Jewellery</Link>
          <div>          <Link to="#">Watches</Link>
          </div>
          <div>          <Link to="#">OutWear</Link>
</div>
          <div>          <Link to="#">Cosmetics</Link>
          </div>
          <div>          <Link to="#">Accessories</Link>
          </div>
          <div>          <Link to="#">Electronics</Link>
          </div>
          <div>          <Link to="#">Furniture</Link>
          </div>
          <div>          <Link to="#">Sunglasses</Link>
          </div>
          <div>          <Link to="#">Rolling Diamond</Link>
          </div>
          <div>          <Link to="#">Xbox Controller</Link>
          </div>
          <div>          <Link to="#">Leather Watch</Link>
          </div>
          <div>          <Link to="#">Smart Tablet</Link>
          </div>
          <div>          <Link to="#">Purse</Link>
          </div>
         
        </div>
      </div>
    
    <div className='flex gap-12 '>
    <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1"> <NavLink className='hover:text-red-600 hover:bg-gray-200'>Home</NavLink></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1">  <NavLink>Fashion</NavLink></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1">   <NavLink>New Arrivals</NavLink></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1">  <NavLink>All Brands</NavLink></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
       
    <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1">  <NavLink>More</NavLink></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
       
      
       
        
    </div>
    <div>
        Free Internation Delivery
    </div>
   </div>
   </>
  )
}
