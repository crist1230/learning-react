import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    // has to be async whenever you're making a call to a db
    const logGoogleUser = async () => {
        // get back user credentials and access token and unique id tied to the account 
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;