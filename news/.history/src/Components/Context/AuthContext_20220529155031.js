import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export function useAuth(){
    return React.useContext(AuthContext)
}
export  function AuthProvider({Children}) {
  return (
    <AuthContext.Provider value={}>
        {Children}
    </AuthContext.Provider>
  )
}
