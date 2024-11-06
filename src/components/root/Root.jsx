import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
import { cartContext } from "../../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async"
export default function Root() {
  const [carts, setCarts] = useState([]);
  const [wishLists, setWishLists] = useState([]);
  const [title, setTitle] = useState('Gadget Heaven');
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
  const handleRemoveWishList = (product)=>{
    const newList = wishLists.filter(item=>item.product_id != product.product_id);
    setWishLists(newList);
    toast.error(`${product.product_title} removed from wishList`);
  }
  const handleRemoveCart = (product)=>{
    const newList = carts.filter(item=>item.product_id != product.product_id);
    setCarts(newList);
    toast.error(`${product.product_title} removed from Carts`);
  }
  const sortCart = () => {
    const sortedArray = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sortedArray);
  };
  return (
    <cartContext.Provider value={{carts,handleAddToCart,wishLists,handleAddToWishList,setWishLists,setCarts,handleRemoveWishList,handleRemoveCart,sortCart,setTitle}}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
      <ToastContainer/>
    </div>
      </HelmetProvider>
    </cartContext.Provider>
  );
}
