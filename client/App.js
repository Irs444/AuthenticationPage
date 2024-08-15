import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import LoadingScreen from './src/components/LoadingScreen';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './src/components/AddScreen';
import ProductScreen from './src/components/ProductScreen';
import { UserProvider } from './src/context/userContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




const UserTab = () => {
  
  const Tab = createBottomTabNavigator()
  const tabConfig = [
    {
      name: 'Product',
      component: ProductScreen,
      focusedIcon: "list-circle",
      unfocusedIcon: "list",
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

const AdminTab = () => {

  // const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator();
  const tabConfig = [
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
    headerShown:false
  })
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {
        tabConfig.map(routeConfig => (
          <Stack.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
          />
        ))
      }

    </Stack.Navigator>
  )
}

const MainTab = () => {

  // const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator();
  const tabConfig = [
    {
      name: "Admin",
      component: AdminTab,
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
      iconComponent: Ionicons

    },
    {
      name: "Home",
      component: HomeScreen,
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
      iconComponent: Ionicons

    },
    {
      name: "Signup",
      component: SignupScreen,
      focusedIcon: "user",
      unfocusedIcon: "user-o",
      iconComponent: FontAwesome
    },
    {
      name: "Login",
      component: LoginScreen,
      focusedIcon: "login",
      unfocusedIcon: "login-variant",
      iconComponent: MaterialCommunityIcons
    },
    
  
   
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
    <Stack.Navigator screenOptions={screenOptions}>
      {
        tabConfig.map(routeConfig => (
          <Stack.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
          />
        ))
      }

    </Stack.Navigator>
  )
}

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



  // const Tab = createBottomTabNavigator()

  // const tabConfig = [
  //   {
  //     name: "Home",
  //     component: HomeScreen,
  //     focusedIcon: "home",
  //     unfocusedIcon: "home-outline",
  //     iconComponent: Ionicons

  //   },
  //   {
  //     name: "AddProduct",
  //     component: AddScreen,
  //     focusedIcon: "add-circle",
  //     unfocusedIcon: "add",
  //     iconComponent: Ionicons
  //   },
  //   {
  //     name: 'Product',
  //     component: ProductScreen,
  //     focusedIcon: "list-circle",
  //     unfocusedIcon: "list",
  //     iconComponent: Ionicons
  //   },
  //   {
  //     name: "Signup",
  //     component: SignupScreen,
  //     focusedIcon: "user",
  //     unfocusedIcon: "user-o",
  //     iconComponent: FontAwesome
  //   },
  //   {
  //     name: "Login",
  //     component: LoginScreen,
  //     focusedIcon: "login",
  //     unfocusedIcon: "login-variant",
  //     iconComponent: MaterialCommunityIcons
  //   },

  // ]

  // const screenOptions = ({ route }) => ({
  //   tabBarIcon: ({ focused, color, size }) => {
  //     const routeConfig = tabConfig.find(config => config.name === route.name)
  //     const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
  //     const IconComponent = routeConfig.iconComponent;

  //     return <IconComponent name={iconName} size={size} color={color} />
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

    <NavigationContainer>
      <UserProvider>
        {/* <Tab.Navigator screenOptions={screenOptions}>
          {
            tabConfig.map(routeConfig => (
              <Tab.Screen
                key={routeConfig.name}
                name={routeConfig.name}
                component={routeConfig.component}
              />
            ))
          }

        </Tab.Navigator> */}
       
       {
        loggedIn && currentUser.role === "admin" ? ( <AdminTab/>) : loggedIn && currentUser .role === "user" ? (<UserTab/>) :(<MainTab/>)
       }

      </UserProvider>
    </NavigationContainer>


  );
}


