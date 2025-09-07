import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Signup = () => {
const { handleRegister,googleLogin } = useContext(AuthContext)
const axiosSecure = useAxios()
const navigate=useNavigate()
  const handleData=(e)=>{
    e.preventDefault();
    const formData =e.target;
    const name= formData.name.value;
    const email = formData.email.value;
    const password =formData.password.value;
    const userInf ={
      name, email
    }
    console.log(userInf)
 
    handleRegister( email, password)
    .then((res)=>{
      console.log(res.user)
      if(res.user){
        axiosSecure.post('/users',userInf )
        .then((res)=>{
          if(res.data.insertedId){
            Swal.fire({
  title: "Register Successfully",
  icon: "success",
  draggable: true
});
navigate('/')
          }
        })
      }
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleData} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>

        </form>
          <button
            onClick={googleLogin}
            className="w-full mt-3 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Login With Google
          </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:underline" to={'/login'}>
          Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
