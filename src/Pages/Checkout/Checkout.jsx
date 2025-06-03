import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Checkout() {
    const {id}=useParams()
    console.log(id)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.address.trim()) {
      setError("Address is required");
      return;
    }

    setError("");
    setStep(step + 1);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <h1 className="text-center text-4xl font-bold mb-10">Checkout</h1>

      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-10">
        {["Billing Address", "Shipping Method", "Payment Method"].map((label, i) => (
          <div key={i} className="text-center flex-1">
            <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white ${i + 1 === step ? "bg-orange-500" : "bg-gray-300"}`}>
              {i + 1}
            </div>
            <div className="text-sm mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Step 1: Billing */}
      {step === 1 && (
        <div className="grid md:grid-cols-3 gap-8">
          <form onSubmit={handleFormSubmit} className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Billing Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="First Name" name="firstName" onChange={handleChange} />
              <input className="border p-2 rounded" placeholder="Last Name" name="lastName" onChange={handleChange} />
              <input className="border p-2 rounded" placeholder="Email" name="email" onChange={handleChange} />
              <input className="border p-2 rounded" placeholder="Phone" name="phone" onChange={handleChange} />
              <input className={`border p-2 rounded ${error ? "border-red-500" : ""}`} placeholder="Address" name="address" onChange={handleChange} />
              <input className="border p-2 rounded" placeholder="City" name="city" onChange={handleChange} />
              <input className="border p-2 rounded" placeholder="ZIP/Postal Code" name="zip" onChange={handleChange} />
              <select className="border p-2 rounded" name="country" onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="BD">Bangladesh</option>
                <option value="US">USA</option>
                <option value="IN">India</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter" className="text-sm">Sign up for newsletter</label>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="same" defaultChecked />
              <label htmlFor="same" className="text-sm">Ship to same address</label>
            </div>

            <button type="submit" className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded">
              CONTINUE
            </button>
          </form>

          {/* Order Summary */}
          <div className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex gap-4">
              <img src="https://via.placeholder.com/80" alt="Product" />
              <div className="text-sm">
                <p>Stavanger By BN</p>
                <p className="text-gray-500">Qty: 1</p>
                <p className="text-orange-600 font-bold mt-1">32,490.00 kr</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>36,999.00 kr</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>103,999.00 kr</span>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* Step 2: Shipping Method */}
{step === 2 && (
  <div className="max-w-3xl mx-auto px-4 sm:px-0">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600">Choose a Shipping Method</h2>

    <div className="space-y-6">
      {[
        {
          id: "standard",
          name: "Standard Shipping (3-5 days)",
          description: "Free delivery for orders over $50",
          price: "Free",
        },
        {
          id: "express",
          name: "Express Shipping (1-2 days)",
          description: "Fast delivery via DHL/UPS",
          price: "$9.99",
        },
        {
          id: "pickup",
          name: "Local Pickup",
          description: "Pickup from our showroom",
          price: "Free",
        },
      ].map((method) => (
        <label
          key={method.id}
          className={`flex items-center justify-between p-5 rounded-lg border border-gray-300 cursor-pointer transition-shadow hover:shadow-lg hover:border-orange-400 ${
            formData.shippingMethod === method.id ? "border-orange-500 bg-orange-50 shadow-md" : "bg-white"
          }`}
        >
          <div className="flex items-start gap-5">
            <input
              type="radio"
              name="shipping"
              value={method.id}
              className="mt-2 accent-orange-500 w-5 h-5"
              onChange={() => setFormData({ ...formData, shippingMethod: method.id })}
              checked={formData.shippingMethod === method.id}
            />
            <div>
              <p className="font-semibold text-lg text-gray-900">{method.name}</p>
              <p className="text-sm text-gray-600 mt-1">{method.description}</p>
            </div>
          </div>
          <div className="text-base font-semibold text-gray-900">{method.price}</div>
        </label>
      ))}
    </div>

    <button
      onClick={() => setStep(step + 1)}
      className="mt-10 w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-md transition-colors"
      disabled={!formData.shippingMethod}
      title={formData.shippingMethod ? "Continue to payment" : "Please select a shipping method"}
    >
      CONTINUE TO PAYMENT
    </button>
  </div>
)}


      {/* Step 3: Payment Method */}
{step === 3 && (
  <div className="max-w-3xl mx-auto px-4 sm:px-0">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-600">Choose Your Payment Method</h2>
    <p className="text-center text-gray-600 mb-10">
      Select a payment option to complete your purchase securely.
    </p>

    <div className="space-y-6">
      {[
        {
          id: "credit_card",
          name: "Credit / Debit Card",
          description: "Visa, MasterCard, Amex",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h18M3 12h18M3 17h18M5 7v10M19 7v10"
              />
            </svg>
          ),
        },
        {
          id: "paypal",
          name: "PayPal",
          description: "Fast and secure checkout",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7 3.86 0 7 3.14 7 7 0 3.86-3.14 7-7 7z" />
            </svg>
          ),
        },
        {
          id: "apple_pay",
          name: "Apple Pay",
          description: "Pay quickly with Apple devices",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7c0-1.1-.9-2-2-2-1.11 0-2 .9-2 2s.89 2 2 2c1.1 0 2-.9 2-2zM12 17c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2s2 .9 2 2v3c0 1.1-.9 2-2 2z"
              />
            </svg>
          ),
        },
      ].map((method) => (
        <label
          key={method.id}
          className={`flex items-center gap-5 p-5 border rounded-lg cursor-pointer transition-shadow hover:shadow-lg ${
            formData.paymentMethod === method.id
              ? "border-orange-500 bg-orange-50 shadow-md"
              : "border-gray-300 bg-white"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            className="accent-orange-500 w-5 h-5"
            onChange={() => setFormData({ ...formData, paymentMethod: method.id })}
            checked={formData.paymentMethod === method.id}
          />
          <div className="flex items-center gap-4">
            <div>{method.icon}</div>
            <div>
              <p className="font-semibold text-lg text-gray-900">{method.name}</p>
              <p className="text-sm text-gray-600 mt-1">{method.description}</p>
            </div>
          </div>
        </label>
      ))}
    </div>

    <button
      onClick={() => setStep(step + 1)}
      className="mt-10 w-full sm:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-md transition-colors"
      disabled={!formData.paymentMethod}
      title={formData.paymentMethod ? "Proceed to confirmation" : "Please select a payment method"}
    >
      PROCEED TO CONFIRMATION
    </button>
  </div>
)}

    </div>
  );
}
