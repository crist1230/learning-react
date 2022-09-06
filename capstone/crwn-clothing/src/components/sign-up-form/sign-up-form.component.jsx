import { useState } from 'react';

import { auth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = event.target;

        if (password !== confirmPassword) {
            alert('your passwords do not match');
            return;
        } 

        const userDocRef = createAuthUserWithEmailAndPassword(email, password);

    };

    // event will tell us what input fired and called the function
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value}); // square brackets allow you to insert the variable name
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => handleSubmit}>
                <label>Display Name</label>
                {/* value is whatever is inside the input text box and at the beginning it's whatever is set as the default*/}
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />
                
                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;