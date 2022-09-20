<<<<<<< HEAD
import { createContext, useState } from 'react';

// actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>; 
    /* Whatever value was passed in for the value is what importing UserContext will provide */
};
=======
import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// actual value you want to access
export const UserContext = createContext({ // pass the default value
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {

  //this is the actual thing you want to store in this context
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // useEffect runs once, when the component mounts
  useEffect(() => {
    // when this component unmounts, you want to tell the listener to stop listening (see return)
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe; // when the component unmounts, this runs and stops listening
  }, [])

  // the value component is what allows every child component to access the state
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
  <UserContext.Provider value={value}>{children}</UserContext.Provider>
    <App />
  </UserContext.Provider>
*/
>>>>>>> relearning-firebase
