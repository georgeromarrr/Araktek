import React from 'react';
import { Link } from 'react-router-dom';
import {BrandLogo, HeartIcon, SearchIcon, CartIcon, UserIcon, MenuIcon, HeartFilledIcon, UserRegIcon} from './NavbarComponents';


const Navbar = () => {
  return (
    <div className='z-50 inset-x-1 top-[3px] left-[5px] right-1 bg-white rounded-t-md border-b border-black'>
      <nav className='container py-4 mx-auto px-4 flex justify-between'>
        <Link to='/'>
          <BrandLogo/>
        </Link>

        <div className='nav-category flex self-center gap-x-8 text-lg laptop:hidden tablet:hidden mobile:hidden'>
          <Link className='nav-items' to='/'>PRODUCT</Link> 
          <Link className='nav-items' to='/'>PC</Link>
          <Link className='nav-items' to='/about'>ACCESSORIES</Link>
          <Link className='nav-items' to='/'>COLLECTIBLES</Link>
        </div>

        <div className='flex self-center gap-x-5'>
          <Link className='nav-items' to='/'>
            <SearchIcon/>
          </Link> 
          <Link className='nav-items laptop:hidden tablet:hidden mobile:hidden' to='/about'>
            <UserIcon/>
          </Link>
          <Link className='nav-items' to='/'>
            <HeartIcon/>
          </Link>
          <Link className='nav-items' to='/'>
            <CartIcon/>
          </Link>
          <button className='desktop:hidden laptop:block'>
            <MenuIcon/>
          </button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar