import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"
import ProductScreen from '../components/ProductScreen'
import AddScreen from '../components/AddScreen'



const UserNav = () => {

    const Tab = createBottomTabNavigator()
    const tabConfig = [
      {
        name: 'Product',
        component: ProductScreen,
        focusedIcon: "list-circle",
        unfocusedIcon: "list",
        iconComponent: Ionicons
      },
      {
        name: "AddProduct",
        component: AddScreen,
        focusedIcon: "add-circle",
        unfocusedIcon: "add",
        iconComponent: Ionicons
      }
    ]
  
    const screenOptions = ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const routeConfig = tabConfig.find(config => config.name === route.name)
        const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
        const IconComponent = routeConfig.iconComponent;
  
        return <IconComponent name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: "darkviolet",
      tabBarInactiveTintColor: "black",
      tabBarLabelStyle: {
        fontSize: 10,
        paddingBottom: 5,
        fontWeight: 600,
      },
      tabBarStyle: {
        height: 60,
        paddingTop: 0
      },
    })
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {
        tabConfig.map(routeConfig => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
          />
        ))
      }

    </Tab.Navigator>
  )
}

export default UserNav

const styles = StyleSheet.create({})