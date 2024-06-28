import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

export const getCollection = async () => {
  const querySnapshot = await getDocs(collection(firestore, "allResult"));
  const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return data;
};

export const addDocument = async (brandValue, modelValue, colorValue, size, gender, condition, purchaseReceipt, photos, description) => {
  let uuid = Math.random().toString()
  let data = {
    brand: `${brandValue}`,
    model: `${modelValue}`,
    color: `${colorValue}`,
    size: `${size}`,
    gender: `${gender}`,
    condition: `${condition}`,
    purchaseReceipt: `${purchaseReceipt}`,
    resultId: uuid,
    thumbnail: `${photos}`,
    description: `${description}`
  }
  await setDoc(doc(firestore, "allResult", uuid), data);
};

