import { createContext, useContext, useEffect, useState } from "react";

import {checkCredentials} from '../services/audn-api'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(localStorage.getItem('auth-token'))

  const login = async(username,password) => {
    const loginData = await checkCredentials(username,password)

    if (loginData.token){
      setUser(loginData.token)
      localStorage.setItem('auth-token', loginData.token)
      return true
    }

    return false;
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, setUser, logout }}>{children}</AuthContext.Provider>;
}

export {AuthContext, AuthProvider, useAuth}