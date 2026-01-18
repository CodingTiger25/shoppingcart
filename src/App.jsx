import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Product } from './Product'
import { HomePage } from './HomePage'
import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
        <HashRouter>
           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<Product />} />
           </Routes>
        </HashRouter>
    </>
  )
}

export default App



