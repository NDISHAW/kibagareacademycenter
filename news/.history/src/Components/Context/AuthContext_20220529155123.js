import React, { Children } from 'react'

const AuthContext = React.createContext(null)
export function useAuth(){
    return React.useContext(AuthContext)
}
export  function AuthProvider({Children}) {
    const [cu]
    const value={
        currentUser,
        Signup
    }
  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
  )
}