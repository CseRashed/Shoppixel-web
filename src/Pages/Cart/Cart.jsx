import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";

export default function Cart() {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const email = user?.email;
  const axiosSecure = useAxios();

  // ✅ Fetch cart items
 useEffect(() => {
  if (email) {
    axiosSecure.get(`/carts/${email}`)
      .then((res) => {
        // ✅ Set default quantity = 1 if missing
        const updatedCart = res.data.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(updatedCart);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}, [email, axiosSecure]);


  // ✅ Quantity change handler
  const handleQuantityChange = (id, amount) => {
    const updatedItem = cartItems.find((item) => item._id === id);
    if (!updatedItem) return;

    const newQuantity = Math.max(1, updatedItem.quantity + amount);

    // Update UI
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    // Update DB
    axiosSecure.patch(`/carts/${id}`, { quantity: newQuantity })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log("Quantity updated");
        }
      })
      .catch((err) => {
        console.error("Quantity update failed:", err.message);
      });
  };

  // ✅ Remove item handler
  const handleRemoveItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to remove this item from the cart.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setCartItems((prev) => prev.filter((item) => item._id !== id));
              Swal.fire('Removed!', 'Item has been removed.', 'success');
            }
          });
      }
    });
  };

  // ✅ Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is currently empty.
          </p>
        ) : (
          <>
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b pb-6"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-3/4">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl border shadow"
                    />
                    <div className="space-y-1 text-center sm:text-left">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Price: ${item.price}
                      </p>
                      <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500">Qty:</span>
                        <div className="flex items-center border rounded overflow-hidden shadow-sm">
                          <button
                            onClick={() => handleQuantityChange(item._id, -1)}
                            className="px-3 py-1 bg-orange-400 hover:bg-orange-500 text-white"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item._id, 1)}
                            className="px-3 py-1 bg-orange-400 hover:bg-orange-500 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end gap-2 w-full sm:w-1/4">
                    <p className="text-lg font-bold text-green-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
              <Link
                to="/"
                className="w-full lg:w-auto text-center px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-xl hover:bg-orange-100 transition"
              >
                ← Continue Shopping
              </Link>

              <div className="w-full lg:w-auto text-center lg:text-right">
                <p className="text-xl font-bold text-gray-800">
                  Subtotal: ${subtotal.toFixed(2)}
                </p>
                <Link to="/checkout">
                  <button className="mt-4 w-full lg:w-auto px-10 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
