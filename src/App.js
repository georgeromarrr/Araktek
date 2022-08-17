import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'
import './style/App.css';

// pages
import Home from "./pages/user/Home/Home";
import Testt from "./pages/Testt";
import Login from "./pages/user/Login/Login";
import Register from './pages/user/Register/Register';
import Checkout from './pages/user/Checkout/Checkout';
import Cart from './pages/user/Cart/Cart';
import Wishlist from './pages/user/Wishlist/Wishlist'
import Account from './pages/user/Account/Account'
import ViewProduct from './pages/user/Products/ViewProduct'
import ProductDetail from './pages/user/ProductDetail/ProductDetail'

// admin pages
import AdminLogin from "./pages/admin/Login/Login";
import Admin from "./pages/admin/Home/Home";
import Category from "./pages/admin/Category/Category"


// API Login

axios.defaults.baseURL ="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token= localStorage.getItem('auth_token');
  config.headers.Authorization= token ? `Bearer ${token}` : '';
  return config
})



function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Testt />} />
        <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/account'/> : <Login/>} />
        <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> :<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<Account />} />
        
        <Route path="/:slug" element={<ViewProduct />} />
        <Route path="/:slug/:product" element={<ProductDetail />} />

        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
