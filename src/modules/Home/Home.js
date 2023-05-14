import React, { useEffect, useState } from 'react'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import StatCrad from '../../components/StatCard/StatCrad'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Categories/Categories'

const Home = () => {
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
    <>
    <Hero/>
    <Categories/>
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCT</h1>
    </div>  

    {
      products.length > 0 ? <ProductsCard products={products}/> 
      :
      <div>Loading....</div>
    }
    <ProductsCard/>
    <StatCrad/>
    <Footer/>
    </>
  )
}

export default Home