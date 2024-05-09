import React from "react";
import "./App.css";
import { Auth } from "./components/auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/About/about";
import FAQ from "./components/FAQ/faq";
import Booking from "./components/Booking/booking";

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

    {
      path: "/faq",
      element: <FAQ />,
    },

    {
      path: "/booking",
      element: <Booking />,
    },
  ]);
  

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
    );
}

export default App;