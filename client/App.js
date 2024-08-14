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


const Stack = createNativeStackNavigator();

export default function App() {

  const Tab = createBottomTabNavigator()

  const tabConfig =[
    {
      name:"Home",
      component:HomeScreen,
      focusedIcon:"home",
      unfocusedIcon:"home-outline",
      iconComponent:Ionicons
      
    },
   {
    name:"AddProduct",
    component:AddScreen,
    focusedIcon:"add-circle",
    unfocusedIcon:"add",
    iconComponent:Ionicons
   },
   {
    name:'Product',
    component:ProductScreen,
    focusedIcon:"list-circle",
    unfocusedIcon:"list",
    iconComponent:Ionicons
   },
   {
    name:"Signup",
    component:SignupScreen,
    focusedIcon:"user",
    unfocusedIcon:"user-o",
    iconComponent:FontAwesome
   },
   {
    name:"Login",
    component:LoginScreen,
    focusedIcon:"login",
    unfocusedIcon:"login-variant",
    iconComponent:MaterialCommunityIcons
   },
  
  ]

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused , color, size}) => {
      const routeConfig = tabConfig.find(config => config.name === route.name)
      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName}size={size} color={color}/>
    },
    tabBarActiveTintColor: "bue",
    tabBarInactiveTintColor:"black",
    tabBarLabelStyle:{
      fontSize:10,
      paddingBottom:5,
      fontWeight:600,
    },
    tabBarStyle:{
      height:60,
      paddingTop:0
    },
  })

  return (

    <NavigationContainer>
      <UserProvider>
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
          {/* <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='AddProduct' component={AddScreen} />
          <Tab.Screen name='Product' component={ProductScreen} />
          <Tab.Screen name='Signup' component={SignupScreen} />
          <Tab.Screen name='Login' component={LoginScreen} /> */}
          {/* <Tab.Screen name='Loadingg' component={LoadingScreen} /> */}
         
        </Tab.Navigator>
      </UserProvider>
    </NavigationContainer>


  );
}


