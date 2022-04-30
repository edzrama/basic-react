import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import useAxiosGetUrl from '../hooks/HttpHooks';

const Product = () => {
    const {id} = useParams();
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
    const product = useAxiosGetUrl(url);

return <div>{product.error === true ? <h1>An Error Occured</h1>
:product.loading === true ? <Loader/>
:product.data ? 
<div><h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
<div> <img src={product.data.images[0].imageUrl} alt={product.data.name} /></div>
<div className="font-bold text-xl mb-3"> $ {product.data.price}</div>
<div> {product.data.description}</div>
</div>
: "no record"}</div>
};

export default Product;