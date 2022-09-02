// function that lets you connect to your firebase db
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// my specific online firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9xLNo9FDTPxVuF-W7fG46rHF_0Zq1kT4",
    authDomain: "crwn-clothing-db-2a6a2.firebaseapp.com",
    projectId: "crwn-clothing-db-2a6a2",
    storageBucket: "crwn-clothing-db-2a6a2.appspot.com",
    messagingSenderId: "276400225549",
    appId: "1:276400225549:web:02de0cffe5feb3480ac444"
};

// make an app connected to the online firebase i've already created
const firebaseApp = initializeApp(firebaseConfig); // doesn't get used just initializing the app

// this provides the services you'll need to run a sign in instance
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ // tells the provider how to behave
    prompt: 'select_account'
});

// get authentication (runs the code that will authenticate a user)
export const auth = getAuth();

// I want to sign in with this authorized token using the method provided
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);