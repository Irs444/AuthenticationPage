import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupScreen from './src/components/SignupScreen';
import LoginScreen from './src/components/LoginScreen';
import LoadingScreen from './src/components/LoadingScreen';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    < >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Loading' component={LoadingScreen} />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}


