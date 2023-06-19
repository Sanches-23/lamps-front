import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ChandeliersMain from "./components/chandeliers/ChandeliersMain";
import ChandeliersSingleItem from "./components/chandeliers/single/ChandeliersSingleItem";
import Footer from "./utils/Footer";
import ErrorPage from "./utils/ErrorPage";
import Navbar from "./utils/Navbar";
import OrderMain from "./components/order/OrderMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
    // {
    //     path: "/chandeliers",
    //     element: <ChandeliersMain />,
    //     errorElement: <ErrorPage />,
    // },
    {
        path: "/chandeliers/:slug",
        element: <ChandeliersSingleItem />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/order",
        element: <OrderMain />,
        errorElement: <ErrorPage />,
    },
]);

const App = () => {
  return (
      <div>
        <Navbar/>
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer/>
      </div>
  );
}

export default App;