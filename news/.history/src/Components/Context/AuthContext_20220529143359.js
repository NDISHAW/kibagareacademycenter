import React, { Children } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const
    const value={
        currentUser
    }
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
