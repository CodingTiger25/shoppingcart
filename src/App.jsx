import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Product } from './Product'
import { HomePage } from './HomePage'
import { Cart } from './cart'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
          <nav>
            <Link to="/product">Products</Link>
            <Link to="/">Home Page</Link>
            <Link to="/cart">Cart</Link>
          </nav>
      
           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App



