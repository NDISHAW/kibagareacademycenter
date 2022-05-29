import React, { Children } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}
export  function AuthProvider() {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
