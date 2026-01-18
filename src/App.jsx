import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Product } from './Product'
import { HomePage } from './HomePage'
import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
          <nav>
            <Link to="/product">Shop Page</Link>
            <Link to="/">Home Page</Link>
          </nav>
      
           <Routes>
              <Route path="/" element={<HomePage />} />
              </Routes>
        </BrowserRouter>
    </>
  )
}

export default App



