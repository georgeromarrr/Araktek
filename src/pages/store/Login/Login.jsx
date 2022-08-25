import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/store/Navbar/Navbar";
import Footer from "../../../components/store/Footer/Footer";
const Login = () => {

  let navigate = useNavigate();
const [login, setLogin]=useState({
  email: '',
  password:'',
  error_list: [],
  error_wrong: [],
})

const handleInput =(e)=>{
  e.persist();
  setLogin({...login, [e.target.name]: e.target.value });
}
const loginSubmit=(e)=>{
  e.preventDefault();
  const data= {
    email: login.email,
    password: login.password,
  }
  axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post(`api/login`, data).then(res =>{
      if(res.data.status === 200){
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username)
      //   swal("Success", res.data.message, "success")
        navigate("/", { replace: true });

      }
      else if(res.data.status === 401){
      //   swal("Warning", res.data.message, "Warning")
        setLogin({...login, error_wrong: res.data.message})
      }
      else{
        setLogin({...login, error_list: res.data.validation_errors });

      }
    });
});

}
return (
  <div>
    <Navbar/>
    <div className='flex items-center justify-center my-20 h-fit'>
      <form onSubmit={loginSubmit}>
        <div className='bg-white p-6 rounded shadow-lg login-card'>
          <div className="flex items-center justify-center mb-4 flex-col">
              <p className='text-3xl font-dge_bold cursor-default'>Login</p>
              <p className='text-xs leading-loose text-center cursor-default text-gray-500'>Please login below- if you registered on our old website,
              please create a new account and we will copy all your orders across.
              </p>
          </div>
          <div className='flex flex-col'>
            <span className='text-center text-sm text-red-600 mb-5'>{login.error_wrong}</span>
          </div>
          <input onChange={handleInput} value={login.email} name='email' type="email" className='h-12 w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' placeholder='Email Address' />
          <span className='text-xs text-red-600'>{login.error_list.password}</span>
          <input onChange={handleInput}  value={login.password} name='password' type="password" className='h-12 w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' placeholder='Password' />
          <div className='flex justify-end'>
            <p className='text-xs my-5 cursor-pointer hover:underline'>Forgot Password? </p>
          </div>
          <button type='submit' className='bg-zinc-900 w-full text-gray-100 py-2 rounded'>Log In</button>
          <div className='flex justify-between py-5'>
              <Link to='/register'><p className='text-xs cursor-pointer hover:underline'>Don't have an account?</p></Link>
              <Link to='/register'><p className='text-xs cursor-pointer hover:underline'>Create account</p></Link>
          </div>
      </div>
  </form>
 </div>
 <Footer/>
  </div>
 

)
}

export default Login