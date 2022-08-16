import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Product = (props) => {
  const [isHover, setHover] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const submitAddtocart=(e)=>{
    e.preventDefault();
    console.log(props.title);
    console.log(props.idx);
    
    const data = {
      product_id: props.idx,
      qty: quantity,
    }
    // console.log(data);
    axios.post(`/api/addcart`, data).then(res=>{
      if(res.data.status === 201){
        swal("Warning", res.data.message, "warning");
        console.log(res.data.message);
      }else if(res.data.status === 409){
        swal("Warning", res.data.message, "warning");
        console.log(res.data.message);
      }else if(res.data.status === 401){
        swal("Warning", res.data.message, "error");
        console.log(res.data.message);
      }

    });
  }

  return (
    <div
      className="bg-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="group relative" key={props.id}>
        <div className="w-full h-96 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 relative">
        <Link to={`/${props.categs}/${props.prods}`}>
          <img
            src={props.imageName}
            alt="img display"
            className="w-full h-full object-center object-contain"
          />
          </Link>

          {/* favorites */}
          <button
            className={`rounded-full bg-white top-1 right-1 p-2 border border-black absolute ${
              isHover ? "" : "hidden"
            }`}
          >
            <HeartSvg fill="#ffffff" />
          </button>

          {/* add to cart */}
          <button
            onClick={submitAddtocart}
            className={`bg-black text-white inset-x-1 bottom-1 object-center py-2 px-12 absolute ${
              isHover ? "" : "hidden"
            }`}
          >
            ADD TO BAG
          </button>

          {/* new, sale, last item */}
          <span
            className="bg-black text-white top-1 left-0 object-center py-1 px-5 absolute"
          >
            SALE
          </span>
        </div>
        <div className="mt-4 flex-col mx-1">
          {/* title */}
          <div>
            <h5 className="text-lg tracking-tight text-ellipsis mr-28">
              {props.title}
            </h5>
          </div>
          <div className="flex flex-row justify-between mt-2 mb-4 gap-4">
            {/* price */}
            <div className="flex flex-row">
              <p className="text-sm">₱ {props.sellprice.toLocaleString()}</p>
              <span className="text-sm mx-1">   </span>
              <span className="text-sm"><s>₱ {props.origprice.toLocaleString()}</s></span>
            </div>

            {/* rating */}
            <div className="flex items-center">
              <Rating
                name="half-rating-read"
                defaultValue={props.ratings}
                precision={0.5}
                readOnly
                sx={{
                  fontSize: 16,
                  color: "#121111",
                  pr: 0.4,
                }}
              />

              {/* rating number */}
              <span className="text-sm">({props.reviewNum})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const HeartSvg = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};
