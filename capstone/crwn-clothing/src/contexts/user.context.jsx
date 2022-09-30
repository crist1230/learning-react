import { createContext } from 'react';

// import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
// import { createAction } from '../utils/reducer/reducer.utils';

// actual value you want to access (values you want to expose)
export const UserContext = createContext({ // pass the default value
  currentUser: null,
  setCurrentUser: () => null,
});

// export const UserProvider = ({ children }) => {

  //this is the actual thing you want to store in this context
  // const [currentUser, setCurrentUser] = useState(null);

  // const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);


  // const value = { currentUser, setCurrentUser };

  // // useEffect runs once, when the component mounts
  // useEffect(() => {
  //   // when this component unmounts, you want to tell the listener to stop listening (see return)
  //   // unsubscribe is a function that will tell the listener to stop listening
  //   // look at comments on lecture 109 to understand where user comes from
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe; // when the component unmounts, this runs and stops listening
  // }, []);

  // the value component is what allows every child component to access the state
  // return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

/*
  <UserContext.Provider value={value}>{children}</UserContext.Provider>
    <App />
  </UserContext.Provider>
*/