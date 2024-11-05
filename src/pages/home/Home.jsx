import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/product/Products'
import { useLoaderData } from 'react-router-dom'
import ProductCategories from '../../components/product/ProductCategories';

export default function Home() {
    const allProducts = useLoaderData();
    const[ categories,setCategories] = useState([]);
    useEffect(()=>{
        const getCategories = allProducts.map(product=> product.category);
        setCategories(['All Products',...new Set(getCategories)]);
    },[])
    console.log(allProducts,categories);
  return (
    <div className='bg-seconderyBg'>
        <Banner/>
        <h2 className='text-primaryText font-bold text-4xl text-center mt-10'>Explore Cutting-Edge Gadgets</h2>
        <section className='flex gap-4 container mx-auto'>
            <aside className=' w-1/4'>
             <ProductCategories categories={categories}/>
            </aside>
            <section className='w-3/4'>
             <Products products={allProducts}/>
            </section>
        </section>
    </div>
  )
}
