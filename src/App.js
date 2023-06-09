import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import About from "./components/About";
import Base from "./components/home/Base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    // errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
      <div>
        {/*<Navbar/>*/}
        <main>
          <RouterProvider router={router} />
        </main>
        {/*<Footer/>*/}
      </div>
  );
}

export default App;