import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'
import './style/App.css';

// user pages
import Home from "./pages/store/Home/Home";
import Testt from "./pages/Testt";
import Login from "./pages/store/Login/Login";
import Register from './pages/store/Register/Register';
import Checkout from './pages/store/Checkout/Checkout';
import Cart from './pages/store/Cart/Cart';


// admin pages
import AdminLogin from "./pages/admin/Login/Login";
import Admin from "./pages/admin/Home/Home";


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
        {/* user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Testt />} />
        <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> : <Login/>} />
        <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> :<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />

        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
