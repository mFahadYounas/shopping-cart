import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Backdrop from './components/Backdrop/Backdrop'

function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <div className='appHeader'>
        <Header setShowCart={setShowCart} />
      </div>

      <div className='appBody'>
        {(showCart) && <Backdrop setShowCart={setShowCart}>
            <Cart />
          </Backdrop>
        }
        <ProductGrid />
      </div>


    </div>
  )
}

export default App
