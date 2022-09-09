import { createContext, useState } from "react";

// actual value you want to access
export const UserContext = createContext({ // pass the default value
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // the value component is what allows every child component to access the state
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
        <App />
    </UserContext.Provider>
*/