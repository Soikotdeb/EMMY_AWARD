import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NoFound from "../Pages/Shared/ErrorPage/NoFound";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contacts/Contact";
import Introduction from "../Pages/Introduction/Introduction";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NoFound></NoFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'contacts',
          element:<Contact></Contact>
        },
        {
          path:'Introduction',
          element:<Introduction></Introduction>
        }

      ]
    },
  ]);