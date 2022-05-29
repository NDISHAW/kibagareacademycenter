import React, { useContext,useState,useEffect } from 'react'
import { auth } from '../../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export  function AuthProvider({Children}) {
    const [currentUser,setCurrentUser] = useState()
function login(email,password) {
 return auth.createUserWithEmailAndPAssword(email,password)   
}
useEffect
auth.onAuthStateChanged((user) => {
  setCurrentUser(user);
});
    const value={
        currentUser
    }
  return (
    <AuthContext.Provider>
        {Children}
    </AuthContext.Provider>
  )
}
