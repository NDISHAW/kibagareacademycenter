import React, { Children } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({childre}) {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
