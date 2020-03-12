import React, { useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = React.createContext({
    user: null,
    login: () => { },
    logout: () => { }
});

async function fetchAsync(payload) {
    try {
        let response = await fetch('http://outsource-management.aranyaa-construction.com/api/auth/admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        let data = await response.json();
        return data;
    } catch (err) {
        alert(err);
    }
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                login: (data) => {
                    fetchAsync(data)
                        .then((response) => {
                            setUser(response);
                            AsyncStorage.setItem("user", response);
                        }).catch((err) => {
                            setUser(null);
                            AsyncStorage.removeItem("user");
                        });
                },
                logout: () => {
                    setUser(null);
                    AsyncStorage.removeItem("user");
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};