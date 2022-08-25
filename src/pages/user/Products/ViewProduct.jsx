import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/user/Navbar/Navbar";
import Footer from "../../../components/user/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Product from "../../../components/user/Product/Product";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

const ViewProduct = () => {
  let navigate = useNavigate();
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let isMounted = true;
    axios.get(`/api/fetchproducts/${slug}`).then((res) => {
      if (isMounted) {
        if (res.data.status === 200) {
          setProduct(res.data.product_data.product);
          setCategory(res.data.product_data.category);
          setLoading(false);
          console.log(res.data.product_data.product);
        } else if (res.data.status === 400) {
          swal("warning", res.data.message, "");
        } else if (res.data.status === 404) {
          navigate("/");
          // swal("Warning",res.data.message, "error")
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug, navigate]);

  if (loading) {
    return <h4>Loading products...</h4>;
  } else {
    var showProduct = "";

    showProduct = products.map((item, id) => {
      return (
        <Product
          key={id}
          brand={item.brand}
          imageName={`http://127.0.0.1:8000/${item.image}`}
          ratings={0}
          reviewNum={0}
          title={item.name}
          origprice={item.original_price}
          sellprice={item.selling_price}
          categs={item.category.slug}
          prods={item.slug}
        />
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mb-40">
        <h1 className="text-center pt-20 tracking-[0.50rem] font-dge_bold text-4xl">
          {category.name}
        </h1>
        <div className="container mx-auto">
          <div className="mt-6 grid grid-cols-4 gap-y-12 gap-x-12 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
            {showProduct}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProduct;
