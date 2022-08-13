import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {
  BrandLogo,
  HeartIcon,
  SearchIcon,
  CartIcon,
  UserIcon,
  MenuIcon,
  HeartFilledIcon,
  UserRegIcon,
  LoginIcon,
  LogoutIcon,
} from "./NavbarComponents";

const Navbar = () => {

  let navigate = useNavigate();
  const logoutSubmit=(e)=>{
    e.preventDefault();

    axios.post('/api/logout').then(res=>{
      if(res.data.status === 200){
        localStorage.removeItem('auth_token', res.data.token);
        localStorage.removeItem('auth_name', res.data.username);
        navigate("/login", { replace: true });
      }
    })

  }

  let AuthButtons='';
  if(!localStorage.getItem('auth_token')){
    AuthButtons=(
      <div>
        <Link className="nav-items" to="/login"><LoginIcon/></Link>
      </div>
      
    );
  }
  else{
    AuthButtons= (
      <div onClick={logoutSubmit}>
        <Link className="nav-items" to=""><LogoutIcon/></Link>
      </div>
    )
  }



  return (
    <div className="z-50 inset-x-1 top-[3px] left-[5px] right-1 bg-white rounded-t-md border-b border-black">
      <nav className="container py-4 mx-auto px-4 flex justify-between">
        <Link to="/">
          <BrandLogo />
        </Link>

        <div className="nav-category flex self-center gap-x-8 text-lg laptop:hidden tablet:hidden mobile:hidden">
          <Link className="nav-items" to="/">
            PRODUCT
          </Link>
          <Link className="nav-items" to="/">
            PC
          </Link>
          <Link className="nav-items" to="/about">
            PERIPHERALS
          </Link>
          <Link className="nav-items" to="/">
            COLLECTIBLES
          </Link>
        </div>

        <div className="flex self-center gap-x-5">
          <Link className="nav-items" to="/">
            <SearchIcon />
          </Link>
          <Link className="nav-items" to="/">
            <HeartIcon />
          </Link>
          <Link className="nav-items" to="/cart">
            <CartIcon />
          </Link>
          <Link
            className="nav-items laptop:hidden tablet:hidden mobile:hidden"
            to="/login"
          >
            {AuthButtons}
          </Link>
          <button className="desktop:hidden laptop:block">
            <MenuIcon />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
