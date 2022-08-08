import React from 'react';
import { Link } from 'react-router-dom';
import {BrandLogo, HeartIcon, SearchIcon, CartIcon, UserIcon, MenuIcon, HeartFilledIcon, UserRegIcon} from './NavbarComponents'


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-red-50'>
      <nav className='container py-3 mx-auto px-4 flex justify-between'>
        <div>
          <BrandLogo/>
        </div>

        <div className='nav-category flex self-center gap-x-8 text-lg lg-laptop:hidden'>
          <Link className='nav-items' to='/'>SHOP</Link> 
          <Link className='nav-items' to='/'>PC</Link>
          <Link className='nav-items' to='/about'>ACCESSORIES</Link>
          <Link className='nav-items' to='/'>COLLECTIBLES</Link>
        </div>

        <div className='flex self-center gap-x-5'>
          <Link className='nav-items' to='/'>
            <SearchIcon className='lg-laptop:h-12'/>
          </Link> 
          <Link className='nav-items lg-laptop:hidden' to='/about'>
            <UserIcon/>
          </Link>
          <Link className='nav-items' to='/'>
            <HeartIcon/>
          </Link>
          <Link className='nav-items' to='/'>
            <CartIcon/>
          </Link>
          <button className='desktop:hidden lg-laptop:block'>
            <MenuIcon/>
          </button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar