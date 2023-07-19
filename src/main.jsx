import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/home",
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);