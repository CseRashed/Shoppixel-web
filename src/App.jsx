
import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './Componets/Footer/Footer'
import Header from './Componets/Header/Header'

function App() {

  return (
    <>
     
     <Header></Header>
    <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
