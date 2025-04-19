import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

export default function Header() {
  return (
   <>

   <header className='container mx-auto py-3'>
    <div className='flex justify-between'>
        <div>
           <p className='text-xl font-medium'> Get up to 50% off new season styles, limited time only</p>
        </div>
        <div className='flex gap-3'>
<lin>Help Center</lin>
<lin>Order Tracking</lin>
        </div>
    </div>

   </header>

   <hr />
  <div className='container mx-auto'>
  <Navbar></Navbar>
  </div>
   <hr />
 <div className='container mx-auto'>
 <Navigation></Navigation>
 </div>
   </>
  )
}
