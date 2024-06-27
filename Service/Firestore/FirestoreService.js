import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

export const getCollection = async () => {
  const querySnapshot = await getDocs(collection(firestore, "allResult"));
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return data;
  // const querySnapshot = await getDocs(collection(firestore, "allResult"));
  // const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  // return data;
};

export const addDocument = async (resultId,thumbnail,title,price ) => {

  await setDoc(doc(firestore, "allResult", data.resultId), data);
};

export const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(firestore, collectionName, docId);
  await updateDoc(docRef, data);
};

export const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(firestore, collectionName, docId);
  await deleteDoc(docRef);
};
