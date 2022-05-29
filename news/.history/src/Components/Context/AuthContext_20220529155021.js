import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export function useAuth(){
    return
}
export  function AuthProvider({Children}) {
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
