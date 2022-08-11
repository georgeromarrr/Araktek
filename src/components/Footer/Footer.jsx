import React from 'react';
import {FooterDetails, FooterCredits } from './FooterComponent';

const Footer = () => {
  return (
    <div>
      <div className='bg-black'>
        <FooterDetails/>
      </div>
      <FooterCredits/>
    </div>

  )
}

export default Footer