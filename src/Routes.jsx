import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";


const router =createHashRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            }
        ]
    }
])



export default router