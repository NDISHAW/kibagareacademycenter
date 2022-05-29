import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export  function AuthProvider({chil}) {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
