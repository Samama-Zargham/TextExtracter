import React, { createContext, useState } from 'react';
export const AuthContext = createContext();


export const ProviderUseContextApi = ({ children }) => {
    const [User, setUser] = useState([]);

    return (
        <AuthContext.Provider
            value={{
                newUser: [User, setUser],
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};