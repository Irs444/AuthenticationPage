import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons/Ionicons'
import HomeScreen from '../components/HomeScreen'
import SignupScreen from '../components/SignupScreen'
import LoginScreen from '../components/LoginScreen'
import { FontAwesome } from '@expo/vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../components/ProductScreen'
import AddScreen from '../components/AddScreen'
import UserNav from './UserNav'



// const TabBarIcon = ({focused, color, size, iconName}) => {
    //     return <Ionicons name={iconName} size={size} color={color} />
    // }
    // const Tab = createBottomTabNavigator()
    const Stack = createNativeStackNavigator()
    
    const AdminNav = () => {
        
        
    //     const tabConfig = [
    //         {
    //                   name: "Home",
    //                   component: HomeScreen,
    //                   focusedIcon: "home",
    //                   unfocusedIcon: "home-outline",
    //                   iconComponent: Ionicons
                
    //                 },
    //                 {
    //                   name: "Signup",
    //                   component: SignupScreen,
    //                   focusedIcon: "user",
    //                   unfocusedIcon: "user-o",
    //                   iconComponent: FontAwesome
    //                 },
    //                 {
    //                   name: "Login",
    //                   component: LoginScreen,
    //                   focusedIcon: "login",
    //                   unfocusedIcon: "login-variant",
    //                   iconComponent: MaterialCommunityIcons
    //                 }
    //     ]

    // const screenOptions = ({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     const routeConfig = tabConfig.find(config => config.name === route.name)
    //     const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
    //     const IconComponent = routeConfig.iconComponent;
  
    //     return <IconComponent name={iconName} size={size} color={color} />
    //     // return <TabBarIcon focused={focused} color={color} size={size} iconName={iconName} />
    //   },
    //   tabBarActiveTintColor: "darkviolet",
    //   tabBarInactiveTintColor: "black",
    //   tabBarLabelStyle: {
    //     fontSize: 10,
    //     paddingBottom: 5,
    //     fontWeight: 600,
    //   },
    //   tabBarStyle: {
    //     height: 60,
    //     paddingTop: 0
    //   },
    // })

  return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="AddProduct" component={AddScreen} />
      {/* {
        tabConfig.map(routeConfig => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
          />
        ))
      } */}

    </Stack.Navigator>
  )
}

export default AdminNav

const styles = StyleSheet.create({})