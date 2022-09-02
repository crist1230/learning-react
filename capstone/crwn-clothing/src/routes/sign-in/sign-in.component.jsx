import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    // has to be async whenever you're making a call to a db
    const logGoogleUser = async () => {
        // get back user credentials and access token
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    );
};

export default SignIn;