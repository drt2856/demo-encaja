
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CreateProduct } from './products/components/CreateProduct';
import { ProductBalance } from './products/components/ProductBalance';
import { ProductDetail } from './products/components/ProductDetail';
import { Products } from './products/components/Products';
import { ProductProvider } from './products/context/ProductProvider';

function App() {


  return (

    <ProductProvider>
        <Router>
          <Routes>
            <Route path="/demo-encaja/" element={<div>Esto es lo que hay</div>} />
            <Route path="/demo-encaja/product/" element={<Products />} />
            <Route path="/demo-encaja/product/create/" element={<CreateProduct />} />
            <Route path="/demo-encaja/product/:productId/" element={<ProductDetail />} />
            <Route path="/demo-encaja/product/balance/" element={<ProductBalance />} />
          </Routes>
        </Router>
    </ProductProvider>




  );
}

export default App;
