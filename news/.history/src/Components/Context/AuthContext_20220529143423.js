import React, { Children } from 'react'
import 

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const [user, setUser] = useState()
    const value={
        currentUser
    }
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
