import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'
import './style/App.css';

// pages
import Home from "./pages/Home/Home";
import Testt from "./pages/Testt";
import Login from "./pages/Login/Login"
import Register from './pages/Register/Register'
import Checkout from './pages/Checkout/Checkout'

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
  
  // const [user, setUser]= useState(false);
  
  // const isLoggedin=()=>{
  //   if (localStorage.getItem('auth_token')){
  //     setUser(true);
  //     return true;
  //     const user= true;
  //   }else{
  //     setUser(false);
  //     return false;
  //     const user= false;
  //   }
  // }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Testt />} />
        <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> : <Login/>} />
        <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> :<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
