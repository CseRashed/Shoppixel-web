import React from 'react'
import Shipping from '../../Componets/Body/Shipping'
import CategoryTab from '../../Componets/Body/CategoryTab'
import OfferBanner from '../../Componets/Body/OfferBanner'
import LatestProducts from '../../Componets/Body/LatestProducts'
import Discount from '../../Componets/Body/Discount'
import FeaturedProducts from '../../Componets/Body/FeaturedProducts'
import Banner from '../../Componets/Header/Banner'

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <Shipping></Shipping>
     <CategoryTab></CategoryTab>
     <OfferBanner></OfferBanner>
     <LatestProducts></LatestProducts>
     <Discount></Discount>
     <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

