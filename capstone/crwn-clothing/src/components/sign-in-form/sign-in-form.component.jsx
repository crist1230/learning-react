import { useState, useContext } from "react";
<<<<<<< HEAD
=======

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

// returns whatever value was passed in for "value"
import { UserContext } from '../../contexts/user.context';
>>>>>>> 09bd47d6f62e713b1e5abdc4360d4f5f09f5c78b


import './sign-in-form.styles.scss';

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from '../../contexts/user.context'; // this UserContext will give the value passed in the value

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    // has to be async whenever you're making a call to a db
    const signInWithGoogle = async () => {
        // get back user credentials and access token and unique id tied to the account 
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
<<<<<<< HEAD
            // creates user
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
=======
            const { user } = await signInAuthUserWithEmailAndPassword(email, password); // want to take the user and store it in the context
>>>>>>> 09bd47d6f62e713b1e5abdc4360d4f5f09f5c78b
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password' :
                    alert('inncorrect password for email');
                    break;
                case 'auth/user-not-found' : 
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    // event will tell us what input fired and called the function
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value}); // square brackets allow you to insert the variable name
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;