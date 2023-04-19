// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

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