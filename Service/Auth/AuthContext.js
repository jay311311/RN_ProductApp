import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, logout, register, subscribeToAuthChanges, loginWithGoogle } from './AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(user => {
        /* TODO : 
        getCurrentUser()
        */
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
      // getCurrentUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
