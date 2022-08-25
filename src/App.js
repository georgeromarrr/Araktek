import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'
import './style/App.css';

// user pages
import Home from "./pages/store/Home/Home";
import Testt from "./pages/Testt";
import Login from "./pages/user/Login/Login";
import Register from './pages/user/Register/Register';
import Checkout from './pages/user/Checkout/Checkout';
import Cart from './pages/user/Cart/Cart';

// API Login

http://phplaravel-821452-2822774.cloudwaysapps.com/
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
        {/* user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Testt />} />
        <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> : <Login/>} />
        <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> :<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
        <Route path="/:slug" element={<ViewProduct />} />
        <Route path="/:slug/:product" element={<ProductDetail />} />

        {/* admin routes */}
        
      </Routes>
    </div>
  );
}

export default App;
