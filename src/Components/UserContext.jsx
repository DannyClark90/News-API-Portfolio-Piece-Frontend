import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [signedInUser, setSignedInUser] = useState("Sign in")
    return (
        <UserContext.Provider value={{signedInUser, setSignedInUser}}>
            {props.children}
        </UserContext.Provider>
    )
};