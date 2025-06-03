import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../public/firebase/firebase_init'
import Swal from 'sweetalert2'
import useAxios from '../Hooks/useAxios'
export const AuthContext = createContext()
export default function AuthProvider({children}) {
const [user, setUser] =useState([])
const [loading, setLoading] =useState([true])
  // create user using signIn method
    const handleRegister=(email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
       }


      //  login user method
      const handleLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email,  password)
      }

const axiosSecure =useAxios()
const provider =new GoogleAuthProvider()
      const googleLogin=()=>{
        signInWithPopup(auth, provider)
        .then((res)=>{
          const user =res.user;
          const userInfo ={
            name:user.displayName,
            email:user.email
          }

          axiosSecure.post('/users',userInfo)
.then((res)=>{
  console.log(res.data)
})
.catch((error)=>{
  if (error.response && error.response.status === 409) {
      console.log('User already exists');
      // Show this in UI if you want
    } else {
      console.error('Something went wrong:', error.message);
    }
})
        })
        .catch((error)=>{
          console.log(error.message)
        })
      }

      // logOut user method
     const logOut=()=>{
      signOut(auth)
      .then(()=>{
        Swal.fire({
  title: "Log Out Successfully",
  icon: "success",
  draggable: true
});
      })
      .catch((error)=>{
        console.log(error.message)
      })
     }

      // onstate changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unSubscribe()
    }
  }, [])
    const info={
      handleRegister, handleLogin,user, loading, googleLogin, logOut
    }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  )
}
