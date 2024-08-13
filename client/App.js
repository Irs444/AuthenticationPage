import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import LoadingScreen from './src/components/LoadingScreen';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from './src/components/AddScreen';
import ProductScreen from './src/components/ProductScreen';
import { UserProvider } from './src/context/userContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Loading' component={LoadingScreen} />
            <Stack.Screen name='AddProduct' component={AddScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />

          </Stack.Navigator>

        </NavigationContainer>
      </UserProvider>

    
  );
}


