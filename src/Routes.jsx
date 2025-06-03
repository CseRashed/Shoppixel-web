import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignIn/SignIn";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import Message from "./Pages/Message/Message";
import User from "./Pages/User/User";


const router =createHashRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            },{
                path:'/login',
                element:<Login></Login>
            },{
                path:'/signIn',
                element:<Signup></Signup>
            }
        ]
    },
    {
        path:'/products/:id',
        element:<ProductDetails></ProductDetails>
    },{
        path:'/checkout',
        element:<Checkout></Checkout>
    },{
        path:'/cart',
        element:<Cart></Cart>
    },{
        path:'/message',
        element:<Message></Message>
    },{
        path:'/user',
        element:<User></User>
    }
])



export default router