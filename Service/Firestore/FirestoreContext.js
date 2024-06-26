import React, { createContext, useContext } from 'react';
import { getCollection, addDocument, updateDocument, deleteDocument } from './FirestoreService';

const FirestoreContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirestoreContext.Provider value={{
      getCollection,
      addDocument,
      updateDocument,
      deleteDocument
    }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => useContext(FirestoreContext);
