import React, { Children } from 'react'
import { auth } from '../../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const [currentUser,setCurrent] = useState()
    const value={
        currentUser
    }
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
