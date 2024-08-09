import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Navigation from './template/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/' element={<ProductList />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
