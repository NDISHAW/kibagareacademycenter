import React, { useContext, useState, useEffect } from "react";
mport 'firebase/auth'; 

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ Children }) {
  const [currentUser, setCurrentUser] = useState();
  function Signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    Signup,
  };
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
}
