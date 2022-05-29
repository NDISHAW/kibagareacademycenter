import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export function use
export  function AuthProvider({Children}) {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
