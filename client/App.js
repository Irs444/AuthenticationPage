import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import LoadingScreen from './src/components/LoadingScreen';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './src/components/AddScreen';
import ProductScreen from './src/components/ProductScreen';
import { UserContext, UserProvider } from './src/context/userContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserNav from './src/navigation/UserNav';
import AdminNav from './src/navigation/AdminNav';


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);


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



  return (

    <NavigationContainer>
        <UserProvider>
       
          {
            loggedIn && currentUser.role === "user" ? <UserNav/> : <AdminNav/>
          }

       
    </UserProvider>
      </NavigationContainer>


  );
}


