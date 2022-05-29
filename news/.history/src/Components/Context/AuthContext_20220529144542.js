import React, { useContext,useState,useEffect } from 'react'
import { auth } from '../../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const [currentUser,setCurrentUser] = useState()
function Signup(email,password) {
 return auth.createUserWithEmailAndPAssword(email,password)   
}
useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
setCurrentUser(user)
})
    return unsubscribe
    },[])

    const value={
        currentUser,
        Signup
    }
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
