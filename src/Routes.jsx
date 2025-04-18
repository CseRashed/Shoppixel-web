import { createHashRouter } from "react-router-dom";
import App from "./App";


const router =createHashRouter([
    {
        path:'/',
        element:<App></App>
    }
])



export default router