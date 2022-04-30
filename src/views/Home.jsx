import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import useAxiosGetUrl from '../hooks/HttpHooks';

const Home = () => {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
    
    const products = useAxiosGetUrl(url);

return <section className="flexy"><h1 className='font-bold text-2xl'> Best Sellers</h1>
{products.error === true ? <h1>An Error Occured</h1>
:products.loading === true ? <Loader/>
:products.data ? 
<div className="flexy">{products.data.map((product) => 
<ProductCard 
product={product} 
key={product.id}/>
)}
</div>

: "no record"}</section>;



};

export default Home;