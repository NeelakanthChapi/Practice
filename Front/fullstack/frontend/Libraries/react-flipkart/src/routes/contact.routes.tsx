import { Outlet } from "react-router-dom";
import { Contact } from "../pages/project/contactform/Contact.page";

export const allContactForm={
    path:'/contact',
    element:<><Outlet/></>,
    children:[
        {
            path:'contact',
            element:<Contact/>
        }
   
    ]
}