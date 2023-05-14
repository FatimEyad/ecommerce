import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Features/Features';
import ProductsCard from '../../components/ProductsCard/ProductsCard'


const Products = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>
    {
      const fetchProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products?limit=12')
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
      
    },[])
  return (
    <div>
        <Categories/>
        <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All PRODUCT</h1>
    </div>  

      {
        products.length > 0 ?
        <ProductsCard products={products}/>
        :
        <div>loading...</div>
      }
    </div>
  )
}

export default Products
