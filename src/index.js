import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from './context/CartContext';

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <Home />
    </CartContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
