import React from "react";
import "./App.css";
import { Auth } from "./components/auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/About/about";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
    );
}

export default App;