import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { HeaderTitle } from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderTitle>
        <button
          type="button"
          className="mt-12 text-black bg-white hover:bg-transparent hover:text-white hover:border font-medium text-base px-14 py-4"
        >
          SHOP NOW
        </button>
      </HeaderTitle>

      <Footer />
    </div>
  );
};

export default Home;
