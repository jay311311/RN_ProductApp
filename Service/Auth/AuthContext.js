import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, logout, register, subscribeToAuthChanges, loginWithGoogle, getCurrentUser } from './AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(user => {
      let userInfo = getCurrentUser()
      console.log(`userInfo after Landing ${userInfo} // ${user}`)
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      loginWithGoogle,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
