import { createContext, useContext, useEffect, useState } from "react";

import {checkCredentials} from '../services/audn-api'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(localStorage.getItem('auth-token'))
  },[])

  const login = (username,password) => {
    return checkCredentials(username,password).then(data=>{
      if(data.token){
        setUser(data)
      }
    })
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
}

export {AuthContext, AuthProvider, useAuth}