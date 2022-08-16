import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/user/Navbar/Navbar'
import Footer from '../../../components/user/Footer/Footer'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'
import swal from 'sweetalert';
const ProductDetail = () => {
    let navigate= useNavigate();

    const {product_slug} = useParams();
    const {slug} = useParams();
    // const category_slug = props.match.params.category;
    // const product_slug = props.match.params.product;
    const [loading, setLoading]= useState(true);
    const [product, setProduct]= useState([]);
  

    useEffect(()=>{
        
        let isMounted = true;



        axios.get(`/api/viewproductdetail/${slug}/${product_slug}`).then(res=>{
            if(isMounted){
                if(res.data.status === 200){
                    setProduct(res.data.product);
                    setLoading(false);
                    console.log(res.data.product)
                }
                else if(res.data.status === 400){
                    navigate('/');
                    swal("Warning",res.data.message, "error")
                }
            }
        });
        return ()=>{
            isMounted= false
        } 
   

    }, [slug, product_slug, navigate]);



    if(loading){
        return <h4>Loading produicts...</h4>
    }
    else{

    }



  return (
    <div>
        <Navbar/>
        <div>
    <h1>View Category</h1>
    <div className='py-3'>
    <div className="container">
        <div className="row">
        <div className="col-md-4 border-end">
        <img src={`http://127.0.0.1:8000/${product.image}`} width='100px' height='100px' alt={product.name} srcset="" />
        </div>
        <div className="col-md-8">
            <h4>{product.name}</h4>
            <span>{product.brand}</span>
            <p>{product.description}</p>
            <h4>{product.original_price}</h4>
            <label>In stock</label>

            <div className="row">
                <div className="col-md-3 mt-3">
                <div className="input-group d-flex">
                    <button>-</button>
                    <input className='mx-5' type="text" name="" id="" value={1} />
                    <button>+</button>
                </div>

                </div>
            </div>
        </div>
        </div>
    </div>
        
    </div>
</div>
        <Footer/>
    </div>
  )
}

export default ProductDetail