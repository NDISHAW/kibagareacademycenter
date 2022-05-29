import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export  function AuthProvider() {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
