import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "./home/home";
import Detail from "../components/detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element:<Home />,
      },
      {
        path:"/about/:id",
        element:<Detail />
      }
    ]
  },
  {
    path:"*",
    element:<h1>Not found</h1>
  }
]);


