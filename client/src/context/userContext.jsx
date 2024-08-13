import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [value , setValue] = useState(0)
   

    return(
        <UserContext.Provider value={(
            value,
            setValue
           
        )}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}

