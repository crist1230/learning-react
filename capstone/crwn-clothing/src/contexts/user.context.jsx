import { createContext, useState } from 'react';

// actual value you want to access
export const UserContext = createContext({ // the default state goes in as the parameters
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

{/* 
    <React.StrictMode>
        <BrowserRouter>
            <UserContext.Provider value={ currentUser, setCurrentUser }> // this provides the value set for user context
                <App />
            </UserContext.Provider>
        </BrowserRouter>
    </React.StrictMode> 
*/}