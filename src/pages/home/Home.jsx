import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/product/Products'
import { useLoaderData } from 'react-router-dom'
import ProductCategories from '../../components/product/ProductCategories';
import { cartContext } from '../../context';

export default function Home() {
    const {setTitle} = useContext(cartContext);
    const allProducts = useLoaderData();
    const[ categories,setCategories] = useState([]);
    const[ searchedProducts,setSearchedProducts] = useState([]);
    const[ activeCategory,setactiveCategory] = useState('All Products');
    useEffect(()=>{
        const getCategories = allProducts.map(product=> product.category);
        setCategories(['All Products',...new Set(getCategories)]);
        setSearchedProducts(allProducts);
        setTitle('Gadget Heaven');
    },[])
    const searchProduct = (category)=>{
        if(category==='All Products'){
            setactiveCategory('All Products');
            setSearchedProducts(allProducts);
        }
        else{
            const products = allProducts.filter(product=>product.category===category);
            setactiveCategory(category);
            setSearchedProducts(products);
        }
    }
  return (
    <div className='bg-seconderyBg'>
        <Banner/>
        <h2 className='text-primaryText font-bold text-4xl text-center mt-10'>Explore Cutting-Edge Gadgets</h2>
        <section className='flex flex-col md:flex-row gap-4 container mx-auto mt-10'>
            <aside className='md:w-1/4'>
             <ProductCategories activeCategory={activeCategory} searchProduct={searchProduct} categories={categories}/>
            </aside>
            <section className='md:w-3/4'>
             <Products products={searchedProducts}/>
            </section>
        </section>
    </div>
  )
}
