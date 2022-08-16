import React, {useState, useEffect} from "react";
import Navbar from "../../../components/user/Navbar/Navbar";
import Footer from "../../../components/user/Footer/Footer";
import { HeaderTitle } from "../../../components/user/Header/Header";
import Product from "../../../components/user/Product/Product";
import { Link, Route, useNavigate } from "react-router-dom";
import Shopify from "../../../components/user/Shopify/Shopify";
import axios from 'axios'
const Home = () => {
  let navigate= useNavigate();
  const [loading, setLoading]= useState(true);
  const [product, setProduct]= useState([]);

  useEffect(()=>{
 
    axios.get(`/api/allproduct`).then(res=>{
        if(res.data.status === 200){
          console.log(res.data.products)
          setProduct(res.data.products)
          setLoading(false);
        }
    });

}, []);


  var showAll= '';

  if(loading){
    return (
      <div className="flex justify-center items-center">
      <h1 className="text-2xl">Loading all products...</h1>
      </div>
    )
   

  }else{
    showAll= product.map((item, idx) => {
      return(
        <Product
        key={idx}
        idx={idx}
        imageName={`http://127.0.0.1:8000/${item.image}`}
        ratings={item.rating}
        reviewNum={item.review}
        title={item.name}
        origprice={item.original_price}
        sellprice={item.selling_price}

        
    />
      )
    })
  }



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
