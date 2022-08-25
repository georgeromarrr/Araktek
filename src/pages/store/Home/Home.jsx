import React from "react";
import Navbar from "../../../components/user/Navbar/Navbar";
import Footer from "../../../components/user/Footer/Footer";
import { HeaderTitle } from "../../../components/user/Header/Header";
import Productdata from "../../../components/user/Product/ProductData";
import Product from "../../../components/user/Product/Product";
import { Link, Route } from "react-router-dom";

  return (
    <>
      <Navbar />
      <HeaderTitle>
        <button
          type="button"
          className="mt-12 text-black bg-white hover:bg-transparent hover:text-white hover:border font-medium text-base px-14 py-4"
        >
          SHOP NOW
        </button>
      </HeaderTitle>

      <div className="w-11/12 mx-auto mb-40">
        <h1 className="text-center pt-20 tracking-[0.50rem] font-dge_bold text-4xl">
          PRODUCTS
        </h1>
        <div className="mt-6 grid grid-cols-4 gap-y-12 gap-x-12 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
          {showAll}
        </div>
      </div>
      <Shopify/>    
      <Footer />
    </>
  );
};

export default Home;
