import React from 'react';
import bg_desktop from '../img/header/bg_1920x859.jpg';
import bg_laptop from '../img/header/bg_1200x859.jpg';
import bg_tablet from '../img/header/bg_770x785.jpg';
import bg_mobile from '../img/header/bg_425x785.jpg';



const Header = () => {
  return (
    <div>
      <div className='object-cover w-full h-screen bg-no-repeat bg-[url("/src/components/img/header/bg_1920x859.jpg")]'>
        {/* <img className='object-cover mix-blend-overlay w-full laptop:hidden tablet:hidden mobile:hidden' src={bg_desktop} alt='1920x859' />
        <img className='hidden w-full laptop:block tablet:hidden mobile:hidden' src={bg_laptop} alt='1200x859' />
        <img className='hidden w-full tablet:block mobile:hiden' src={bg_tablet} alt='770x785' />
        <img className='hidden w-full mobile:block' src={bg_mobile} alt='425x785' /> */}

        <div className=''>
          <h1 className=''>Hellow motherfackers</h1>
        </div>
      </div>
    </div>
  )
}

export default Header