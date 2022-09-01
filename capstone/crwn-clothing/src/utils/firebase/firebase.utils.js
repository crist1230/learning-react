import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9xLNo9FDTPxVuF-W7fG46rHF_0Zq1kT4",
    authDomain: "crwn-clothing-db-2a6a2.firebaseapp.com",
    projectId: "crwn-clothing-db-2a6a2",
    storageBucket: 'crwn-clothing-db-2a6a2.appspot.com',
    messagingSenderId: '276400225549',
    appId: '1:276400225549:web:5764369c02ca61f10ac444'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt});
        } catch (err) {
            console.log('error creating the user', err.message);
            
        }
    }

    return userDocRef;

}