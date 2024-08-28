
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CreateProduct } from './products/components/CreateProduct';
import { ProductBalance } from './balances/components/ProductBalance';
import { ProductDetail } from './products/components/ProductDetail';
import { Products } from './products/components/Products';
import { ProductProvider } from './products/context/ProductProvider';
import { Balances } from './balances/components/Balances';
import { BalanceProvider } from './balances/context/BalanceProvider';
import { Help } from './pages/Help';

function App() {


  return (

    <ProductProvider>
      <BalanceProvider>
        <Router>
          <Routes>
            <Route path="/demo-encaja/" element={<Products />} />
            <Route path="/demo-encaja/product/" element={<Products />} />
            <Route path="/demo-encaja/product/create/" element={<CreateProduct />} />
            <Route path="/demo-encaja/product/:productId/" element={<ProductDetail />} />
            <Route path="/demo-encaja/product/balance/" element={<ProductBalance />} />
            <Route path="/demo-encaja/historical_balances/" element={<Balances />} />
            <Route path="/demo-encaja/help/" element={<Help />} />
          </Routes>
        </Router>
      </BalanceProvider>

    </ProductProvider>




  );
}

export default App;
