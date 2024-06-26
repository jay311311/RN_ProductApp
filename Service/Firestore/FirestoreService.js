import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

export const getCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return data;
};

export const addDocument = async (collectionName, data) => {
  await addDoc(collection(firestore, collectionName), data);
};

export const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(firestore, collectionName, docId);
  await updateDoc(docRef, data);
};

export const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(firestore, collectionName, docId);
  await deleteDoc(docRef);
};
