import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { CreateProduct } from './products/components/CreateProduct';
import { ProductBalance } from './balances/components/ProductBalance';
import { ProductDetail } from './products/components/ProductDetail';
import { Products } from './products/components/Products';
import { ProductProvider } from './products/context/ProductProvider';
import { Balances } from './balances/components/Balances';
import { BalanceProvider } from './balances/context/BalanceProvider';
import { Help } from './pages/Help';
import { About } from './pages/About';
import { Header } from './pages/Header';

function App() {
  return (
    <ProductProvider>
      <BalanceProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/product/balance" element={<ProductBalance />} />
            <Route path="/historical_balances" element={<Balances />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </BalanceProvider>
    </ProductProvider>
  );
}

export default App;
