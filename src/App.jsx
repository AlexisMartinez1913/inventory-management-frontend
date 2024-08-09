import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Navigation from './template/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';



function App() {


  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path='/' element={<ProductList />} />
      <Route exact path='/add' element={<AddProduct />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
