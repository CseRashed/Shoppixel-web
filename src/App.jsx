
import './App.css'
import CategoryTab from './Componets/Body/CategoryTab'
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
      
    </>
  )
}

export default App
