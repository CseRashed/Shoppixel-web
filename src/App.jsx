
import './App.css'
import CategoryTab from './Componets/Body/CategoryTab'
import Discount from './Componets/Body/Discount'
import FeaturedProducts from './Componets/Body/FeaturedProducts'
import LatestProducts from './Componets/Body/LatestProducts'
import OfferBanner from './Componets/Body/OfferBanner'
import Shipping from './Componets/Body/Shipping'
import Header from './Componets/Header/Header'

function App() {

  return (
    <>
     
     <Header></Header>
     <Shipping></Shipping>
     <CategoryTab></CategoryTab>
     <OfferBanner></OfferBanner>
     <LatestProducts></LatestProducts>
     <Discount></Discount>
     <FeaturedProducts></FeaturedProducts>
      
    </>
  )
}

export default App
