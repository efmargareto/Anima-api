import { createContext, useState, useContext, useEffect } from 'react'
import { setToken, getAccessToken, logout } from '../store/AccessTokenStore'
import { getCurrentUser } from '../services/UserService'
import { verifyJWT } from '../utils/jwtHelper'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [isAuthenticationFetched, setIsAuthenticationFetched] = useState(false)

  const login = (token, navigateCb) => {
    setToken(token)
    getUser(navigateCb)
  }

  const getUser = (cb) => {
    console.log('entra en get User')
    getCurrentUser()
      .then(user => {
        setUser(user)
        setIsAuthenticationFetched(true)
        cb && cb()
      })
      .catch(err => {
        console.log('catch del get Curren user')
        console.log(err)
      })
  }

  useEffect(() => {
    // Si existe token, me traigo al usuario
    if (getAccessToken()) {
      if ( !verifyJWT(getAccessToken()) ) {
        logout()
      } else {
        // existe el token cogemos el usuario
        getUser()
      }
    } else {
      setIsAuthenticationFetched(true)
    }
  }, [])

  const value = {
    user,
    isAuthenticationFetched,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext