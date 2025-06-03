import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import FeaturedProducts from "../../Componets/Body/FeaturedProducts";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function ProductDetails() {
  const { id } = useParams();
  const {user}= useContext(AuthContext)
  const axiosSecure = useAxios();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosSecure.get(`/products/${id}`);
        setProduct(res.data);
        console.log(res.data)
        setLoading(false);
      } catch (err) {
        setError("Product not found");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-10 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  const name = product.name;
  const category=product.category;
  const stock= product.stock;
  const price= product.price;
  const photo= product.photo;
  const email = user?.email

const handleAddCart = () => {
  if (user) {
    axiosSecure.post('/carts', { name, category, stock, price, photo, email })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${product.name} added successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          Swal.fire({
            icon: 'warning',
            title: 'Already in cart',
            text: `${product.name} is already in your cart!`
          });
        } else {
          console.log(err.message);
        }
      });
  } else {
    navigate('/login');
  }
};


  return (
    <>
    <div onClick={()=>navigate(-1)} className="container cursor-pointer bg-green-500 w-[120px] rounded-full ml-5 p-2  flex items-center gap-3 mt-10 text-2xl font-bold">
      <h1><FaArrowLeft /></h1>
        <h1 className="">Back</h1>
    </div>
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left: Image Carousel */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          effect="fade"
          spaceBetween={30}
          className="rounded-lg shadow-2xl overflow-hidden"
        >
          {(product.images?.length ? product.images : [product.photo]).map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Product image ${i + 1}`}
                className="w-full h-[450px] object-contain bg-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Right: Product Details */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-5 bg-white p-6 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-extrabold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600">Brand: {product.brand}</p>
        <p className="text-yellow-500 text-lg">★★★★☆</p>
      

        {/* Buttons */}
        <div onClick={handleAddCart} className="mt-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white w-full sm:w-auto px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </motion.button>
         
        </div>
      </motion.div>
    </div>
    {/* Customer Reviews Section */}
<div className="container mx-auto px-4 py-10">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>

  <div className="space-y-6">
    {[
      {
        id: 1,
        name: "Emily Johnson",
        avatar: "https://i.pravatar.cc/150?img=47",
        rating: 5,
        comment: "Absolutely love this product! Great quality and fast shipping. Highly recommended.",
      },
      {
        id: 2,
        name: "Michael Smith",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 4,
        comment: "Product is good for the price. Packaging was neat. Could improve delivery time.",
      },
      {
        id: 3,
        name: "Sara Lee",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        comment: "Perfect for what I needed. Will definitely buy again!",
      },
    ].map((review) => (
      <div
        key={review.id}
        className="flex flex-col sm:flex-row items-start gap-4 p-5 border rounded-xl bg-white shadow-md"
      >
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
          <div className="text-yellow-500 text-sm mb-1">
            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* <FeaturedProducts></FeaturedProducts> */}
    </>
  );
}
