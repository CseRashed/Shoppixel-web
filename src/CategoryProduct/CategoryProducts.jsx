import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function CategoryProducts() {
     const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products?category=${category}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [category]);

    return (
       <>
       {products.length>0? <div className='container mx-auto mt-10'>


            <div className='grid grid-cols-4 gap-2'>
                {
                    products.map((product) =>
                        <NavLink  to={`/products/${product._id}`}
                            key={product._id}
                            className="snap-start flex-shrink-0 w-52 sm:w-56 md:w-60 lg:w-64"
                        >
                            <div className="card bg-base-200 shadow-md">
                                <figure className="bg-white h-28 flex items-center justify-center">
                                   <img src={product.photo} alt={product.name} />
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-base">{product.name}</h2>
                                    <p className="text-sm text-gray-500">{product.brand}</p>
                                    <p className="text-yellow-500 text-sm">★★★★☆</p>
                                    <p className="text-green-600 font-bold">${product.price}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                }

            </div>
        </div>:
        
        <div>
           <h1 className="text-red-600 text-center mt-5">Product not found</h1>
        </div>}
       </>
    )
}
