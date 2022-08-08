import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Logo from './bg-podium.svg';


const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <img src={Logo} alt='asd'/> */}
        <Footer/>
    </div>
  )
}

export default Home