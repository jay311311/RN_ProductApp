import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "@react-native-firebase/firestore";
import { app } from './firebaseConfig';

const auth = getAuth(app);
const firestore = getFirestore(app);

class FirebaseService {

    login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    loginWithGoogle = () => {

    }

    logout = async () => {
        await signOut(auth)
    }

    getCurrentUser = () => {
        return auth.currentUser;
    }

    getList = async (collectionName) => {
        const datas = await getDocs(collection(firestore, collectionName));
        return datas.docs.map(doc => doc.data());
    }

}

export default FirebaseService();
