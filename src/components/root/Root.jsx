import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
import { cartContext } from "../../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
  const [carts, setCarts] = useState([]);
  const [wishLists, setWishLists] = useState([]);
  const handleAddToCart = (product)=>{
    const productFind = carts.find(item=>item.product_id === product.product_id);
    if(productFind){
      toast.warning('Product already added to cart');
    }
    else{
      setCarts([...carts,product]);
      toast.success('Product added to cart');
    }
  }
  const handleAddToWishList = (product)=>{
    const productFind = wishLists.find(item=>item.product_id === product.product_id);
    if(productFind){
      toast.warning('Product already added to wishList');
    }
    else{
      setWishLists([...wishLists,product]);
      toast.success('Product added to wishList');
    }
  }
  return (
    <cartContext.Provider value={{carts,handleAddToCart,wishLists,handleAddToWishList}}>
      <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
      <ToastContainer/>
    </div>
    </cartContext.Provider>
  );
}
