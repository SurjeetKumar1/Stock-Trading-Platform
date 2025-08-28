import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup"
import AboutPage from './landing_page/about/AboutPage';
import Product from "./landing_page/products/ProductsPage"
import Support from "./landing_page/support/SupportPage"
import Pricing  from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from "./landing_page/Footer";
import NotFound from './NotFound';
import LoginKite from './landing_page/kite/LoginKite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/login_zerodha_kite' element={<LoginKite/>}/>

    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
