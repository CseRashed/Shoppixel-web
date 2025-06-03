import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

export default function User() {
  const {user} =useContext(AuthContext)
  const [userData, setUserData] =useState([])
  const axiosSecure = useAxios()


useEffect(()=>{
 axiosSecure.get(`/users/${user?.email}`)
 .then((res)=>{
  console.log(res.data)
  setUserData(res.data)

 })
 .catch((error)=>{
  console.log(error.message)
 })
},[user])

  const handleSave = (e) => {
    e.preventDefault();
    const formData =e.target;
    const name=formData.name.value;
    const email = formData.email.value;
    const phone =formData.phone.value;
    const image =formData.image.value;
    const street =formData.street.value;
    const city =formData.city.value;
    const state =formData.state.value;
    const zip= formData.zip.value;
    const country =formData.country.value;
    const info = {
      name, email, phone, image, street, city, state, zip, country
    }
    axiosSecure.patch(`/users/${user?.email}`, info)
    .then((res)=>{
      console.log(res.data)
      if(res.data.modifiedCount>0){
       Swal.fire({
  icon: 'success',
  position:'top-right',
  title: 'Profile Updated!',
  text: 'Your profile information has been saved.',
  timer: 1500,
  showConfirmButton: false
})
      }
    })
    .catch((error)=>{
      console.log(error.message)
       Swal.fire({
         position:'top-right',
    icon: 'error',
    title: 'Update Failed',
    text: error.message || 'Something went wrong.',
  });
    })

  };

  return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-40 h-40 rounded-full object-cover border-4 border-orange-300 shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800">User Profile</h2>
            <p className="text-gray-500">Manage your personal details</p>
          </div>
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline">Edit <FaEdit></FaEdit> </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              value={userData.name}
              
            
              className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              value={userData?.email}
              disabled
              className="w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Phone</label>
            <input
              type="text"
              value={userData?.phone}
             
              disabled
              className="w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Image</label>
            <input
              type="text"
              value={userData?.image}
              
              disabled
              className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
            />
          </div>

          {/* Address Fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600 font-semibold">Street Address</label>
              <input
              value={userData?.street}
                type="text"
                
                
                disabled
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">City</label>
              <input
                type="text"
                value={userData?.city}
                disabled
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">State / Province</label>
              <input
                type="text"
              value={userData?.state}
                disabled
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">ZIP / Postal Code</label>
              <input
                type="text"
              value={userData?.zip}
                disabled
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600 font-semibold">Country</label>
              <input
                type="text"
                value={userData?.country}
                disabled
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600 cursor-not-allowed'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal for edit profiles */}
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost  bg-green-600 absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={userData?.name}
               className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={userData?.email}
              className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={userData?.phone}
              className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
            />
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="text-sm text-gray-600 font-semibold">Image</label>
            <input
              type="text"
              name="image"
              defaultValue={userData?.image}
               className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
            />
          </div>

          {/* Address Fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600 font-semibold">Street Address</label>
              <input
                type="text"
                name="street"
                defaultValue={userData?.street}
                 className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">City</label>
              <input
                type="text"
                name="city"
                defaultValue={userData?.city}
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">State / Province</label>
              <input
                type="text"
                name="state"
                defaultValue={userData?.state}
               className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-semibold">ZIP / Postal Code</label>
              <input
                type="text"
                name="zip"
                defaultValue={userData?.zip}
               className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600 font-semibold">Country</label>
              <input
                type="text"
                name="country"
                defaultValue={userData?.country}
                className='w-full mt-2 px-4 py-2 rounded-xl border bg-gray-100 text-gray-600'
              />
            </div>
          </div>
          <button type="submit" className="flex gap-2 items-center btn btn-primary text-xl"><h1>Save</h1>
          <h1><FaSave></FaSave></h1></button>
        </form>
  </div>
</dialog>
  </>
  );
}
