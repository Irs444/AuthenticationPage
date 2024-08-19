import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
import { createContext, useState, useEffect, React } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const navigation = useNavigation();

    const fetchData = async () => {
        try {
            const data = await AsyncStorage.getItem("data");
            const currentUser = data ? JSON.parse(data) : null;
            setLoggedIn(currentUser ? true : false);
        } catch (error) {
            console.error("Failed to load user data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("data");
            setLoggedIn(false);
            alert("Logged Out");
            navigation.navigate("Home");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };