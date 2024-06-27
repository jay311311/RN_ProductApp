import {initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../firebaseConfig';

const auth = getAuth(app);

const initializeFirebaseWithAsyncStorage = () => {
  const persistence = getReactNativePersistence(AsyncStorage);

 const auth = initializeAuth(app, { persistence });

  return auth;
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  console.log(provider);
  try {
    await signInWithCredential(auth, provider);
    console.log('Google login 성공');
  } catch (error) {
    console.error('Google login 에러:', error);
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};

export const register = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};


