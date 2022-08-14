import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/user/Navbar/Navbar";
import Footer from "../../../components/user/Footer/Footer";

const Register = () => {

  let navigate = useNavigate();
  const [register, setRegister]=useState({
    name:'',
    email:'',
    password:'',
    error_list:[],
  });
  const handleInput= (e)=>{
    e.persist();
    setRegister({...register, [e.target.name]: e.target.value});
  }
  const registerSubmit=(e)=>{
    e.preventDefault();
    const data= {
      name: register.name,
      email: register.email,
      password: register.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res =>{
        if(res.data.status === 200){
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          // swal("Success", res.data.message, "success")
          navigate("/", { replace: true });
        }
        else{
          setRegister({...register,error_list: res.data.validation_errors})
        }
      }); 
  });
    
  }
return (
  <div>
  <Navbar/>
    <div className='flex items-center justify-center my-20 h-full'>
      <form onSubmit={registerSubmit}>
          <div className='bg-white login-card p-6 rounded shadow-lg'>
              <div className="flex items-center justify-center mb-4 flex-col">
                  <p className='text-3xl font-dge_bold cursor-default'>Create An Account</p>
                  <p className='text-xs leading-loose text-center cursor-default text-gray-500'>
                  Please register below to create a new account on our website.
                  </p>
              </div>
              <span className='text-xs text-red-600'>{register.error_list.name}</span>
              <input onChange={handleInput} value={register.name} name='name' type="text" className='h-12 w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' placeholder='Username' />
              <span className='text-xs text-red-600'>{register.error_list.email}</span>
              <input onChange={handleInput} value={register.email} name='email' type="email" className='h-12 w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' placeholder='Email Address' />
              <span className='text-xs text-red-600'>{register.error_list.password}</span>
              <input onChange={handleInput} value={register.password} name='password' type="password" className='h-12 w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' placeholder='Create Password' />
              <div class="flex items-center">
                  <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 rounded border-gray-300"/>
                  <label class="ml-2 text-xs text-gray-900 dark:text-gray-300 py-5">Sign up to our newsletter & receive the latest news, offers & discounts</label>
              </div>
              <button type='submit' className='bg-zinc-900 w-full text-gray-100 py-2 rounded'>Create An Account</button>
              <div className='flex justify-between py-5'>
                  <p className='text-xs cursor-default'>Already have an account?</p>
                  <Link to='/login'><p className='text-xs cursor-pointer hover:underline'>Log In To Your Account</p></Link>
              </div>
          </div>
      </form>
 </div>
 <Footer/>
  </div>
  
)
}

export default Register;
