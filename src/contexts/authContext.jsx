import { createContext, useContext, useEffect, useState } from "react";

import {checkCredentials} from '../services/audn-api'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(localStorage.getItem('auth-token'))
  const [username, setUsername] = useState(localStorage.getItem('auth-username'))


  const login = async(username,password) => {
    const loginData = await checkCredentials(username,password)

    if (loginData.token){
      setUser(loginData.token)
      localStorage.setItem('auth-token', loginData.token)
      setUsername(loginData.username)
      localStorage.setItem('auth-username', loginData.username)
      return true
    }

    return false;
  }

  const logout = () => {
    setUser(null)
    setUsername(null)
    localStorage.removeItem('auth-token')
    localStorage.removeItem('auth-username')
  }

  return <AuthContext.Provider value={{ user, login, setUser, logout, username }}>{children}</AuthContext.Provider>;
}

export {AuthContext, AuthProvider, useAuth}