import React, { createContext, useContext } from 'react';
import { getCollection, addDocument} from './FirestoreService';

const FirestoreContext = createContext();

export const FirebaseProvider = ({ children }) => {
  
  return (
    <FirestoreContext.Provider value={{
      getCollection,
      addDocument
    }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => useContext(FirestoreContext);
