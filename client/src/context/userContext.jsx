import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children, navigation }) => {
    const [newUser, setNewUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userType = newUser ? "user" : "admin";
                const storedUser = await AsyncStorage.getItem(userType);
                if (storedUser) {
                    setCurrentUser(JSON.parse(storedUser));
                    setLoggedIn(true);
                }
            } catch (e) {
                console.error('Failed to load user', e);
            }
        };
        loadUser();
    }, [newUser]);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setLoggedIn(false);
            navigation.navigate("Home");
        } catch (e) {
            console.error('Failed to logout', e);
        }
    };

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('admin');
            setLoggedIn(false);
            navigation.navigate("Home");
        } catch (e) {
            console.error('Failed to sign out', e);
        }
    };

    return (
        <UserContext.Provider value={{ newUser, setNewUser, currentUser, loggedIn, logout, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;