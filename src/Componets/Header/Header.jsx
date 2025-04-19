import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'

export default function Header() {
  return (
   <>
  <div className='container mx-auto my-7'>
  <Navbar></Navbar>
  </div>
   <hr />
 <div className='container mx-auto'>
 <Navigation></Navigation>
 </div>
   </>
  )
}
