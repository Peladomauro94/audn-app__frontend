import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App.jsx";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Homepage } from "./components/Home";
import { Cupido } from "./components/CupidoMusical";
import { Contextual } from "./components/MusicaContextual";
import { AuthProvider, useAuth } from "./contexts/authContext";
import { Playlist } from "./components/Playlist";


const Routes = () => {
  // const [user, setUser] = useState(localStorage.getItem('auth-token'))

  const {user} = useAuth()
  
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: user ? <Navigate to="/home"/> : <App/>,
      },
      {
        path:"/register",
        element: user ? <Navigate to="/home"/> : <Register />
      },
      {
        path:"/login",
        element: user ? <Navigate to="/home"/> : <Login/>
      },
      {
        path:"/home",
        element: user ? <Homepage/> : <Navigate to="/login"/>
      },
      {
        path:"/cupidomusical",
        element: user ? <Cupido/> : <Navigate to="/login"/>
      },
      {
        path:"/contextual",
        element: user ? <Contextual/> : <Navigate to="/login"/>
      },
      {
        path:"/playlist/:id",
        element: user ? <Playlist/> : <Navigate to="/cupidomusical"/>
      },
    ])} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Routes/>
  </AuthProvider>
);