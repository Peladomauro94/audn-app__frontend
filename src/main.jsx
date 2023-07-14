import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import { Register } from "./components/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);