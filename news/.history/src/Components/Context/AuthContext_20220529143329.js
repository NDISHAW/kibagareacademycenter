import React, { Children } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const value=
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
