import { initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, FacebookAuthProvider, signInWithCredential } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../firebaseConfig';
import {
  AccessToken,
  LoginManager
} from 'react-native-fbsdk-next';

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
  const result = await LoginManager.logInWithPermissions(['public_profile','email']);
  if (result.isCancelled) {
    throw new Error('User cancelled login');
  }

  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw new Error('Something went wrong obtaining access token');
  }

  const credential = FacebookAuthProvider.credential(data.accessToken);
  const user = await signInWithCredential(auth, credential);
  console.log(user)
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


