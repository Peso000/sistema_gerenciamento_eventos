import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) =>{
    const [user, setUser] = useState(() =>{
        const storageData = sessionStorage.getItem("user");
        return storageData ? JSON.parse(storageData) : {};
    });

    useEffect(() =>{
        sessionStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;