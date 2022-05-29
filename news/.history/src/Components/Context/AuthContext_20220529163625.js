import React, { useState,useContext } from 'react'
import { auth } from '../../Firebase'

const AuthContext = React.createContext(null)
export function useAuth(){
    return React.useContext(AuthContext)
}
export  function AuthProvider({Children}) {
    const [currentUser,setCurrentUser] = useState(null)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    auth.onAuthStateChanged(user=>{
    })
    const value={
        currentUser,
        
    }
  return (
    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
  )
}
