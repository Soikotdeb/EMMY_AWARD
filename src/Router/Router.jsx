import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NoFound from "../Pages/Shared/ErrorPage/NoFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NoFound></NoFound>,
      children:[
        
      ]
    },
  ]);