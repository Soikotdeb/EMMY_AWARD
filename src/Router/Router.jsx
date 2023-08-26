import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NoFound from "../Pages/Shared/ErrorPage/NoFound";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NoFound></NoFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);