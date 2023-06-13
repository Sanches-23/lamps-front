import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import About from "./components/About";
import Base from "./components/home/Base";
import ChandeliersMain from "./components/chandeliers/ChandeliersMain";
import ChandeliersSingleItem from "./components/chandeliers/single/ChandeliersSingleItem";
import Footer from "./utils/Footer";
import ErrorPage from "./utils/ErrorPage";
import Navbar from "./utils/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,
  },
    {
        path: "/chandeliers",
        element: <ChandeliersMain />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/chandeliers/:slug",
        element: <ChandeliersSingleItem />,
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