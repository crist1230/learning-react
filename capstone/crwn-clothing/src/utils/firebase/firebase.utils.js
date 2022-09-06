// function that lets you connect to your firebase db
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// my specific online firebase
const firebaseConfig = {
    apiKey: 'AIzaSyD9xLNo9FDTPxVuF-W7fG46rHF_0Zq1kT4',
    authDomain: 'crwn-clothing-db-2a6a2.firebaseapp.com',
    projectId: 'crwn-clothing-db-2a6a2',
    storageBucket: 'crwn-clothing-db-2a6a2.appspot.com',
    messagingSenderId: '276400225549',
    appId: '1:276400225549:web:02de0cffe5feb3480ac444'
};

// make an app connected to the online firebase i've already created
const firebaseApp = initializeApp(firebaseConfig); // doesn't get used just initializing the app

// this provides the services you'll need to run a sign in instance
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ // tells the provider how to behave
    prompt: 'select_account'
});

// get the rules for authenticating with firebase
export const auth = getAuth();

// I want to sign in, here are the rules for authentication, and here's your provider
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// creating the db (will allow us to get/set documents)
export const db = getFirestore();

/* google sign-in will return some user authentication object and that's what gets passed here
   it's a function that takes that data we get from the authentication service, and will 
   store that in our firebase db */
export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;

    /*  get reference to a document
    if doc doesn't exist it will return an address that points to a phantom doc,
    waiting for you to do something with it

    the parameters basically act like a path
    ie: I want you to look in this db, then in this collection,
    then at a doc that has this specific & unique name/id

    basically, create an address using the info I put in as parameters
    */
    const userDocRef = doc(db, 'users', userAuth.uid);

    // get the doc at this address (insert doc reference)
    // will return an object that has methods you can use
    const userSnapshot = await getDoc(userDocRef);

    // if the doc doesn't exist create doc
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
    
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};