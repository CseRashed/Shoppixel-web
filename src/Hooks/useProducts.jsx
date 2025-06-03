import React, { useEffect, useState } from 'react'
import useAxios from './useAxios';

export default function useProducts() {
     const [products, setProducts] =useState([])
      const axiosSecure =useAxios()
     useEffect(() => {
  axiosSecure.get('/products')
    .then((res) => {
      
      setProducts(res.data);
    });
}, []);
  return products
}
