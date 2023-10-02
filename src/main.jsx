import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Login from "./components/Form/Login";
import SignUP from "./components/Form/SignUP";
import Home from "./components/Home/Home.jsx";
import Pricing from "./components/Pricing/Pricing";
import Enterprise from "./components/Enterprise/Enterprise";
import RequireAuth from "./components/Form/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/pricing",
        element: (
          <RequireAuth>
            <Pricing />
          </RequireAuth>
        ),
      },
      {
        path: "/enterprise",
        element: <Enterprise />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
