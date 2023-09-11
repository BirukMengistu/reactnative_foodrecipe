import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  AppNavigation  from './src/components/navigations/';
import { NavigationContainer } from '@react-navigation/native';
import {TailwindProvider}  from 'tailwindcss-react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/screens/HomeScreen';
import { Discover } from './src/components/screens/Discover';
import { ItemCardContainer } from './src/components/ItemCardContainer';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
<TailwindProvider>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Discover' component={Discover}/>
      <Stack.Screen name='Itemcard' component={ItemCardContainer}/>
    </Stack.Navigator>
  </NavigationContainer>
</TailwindProvider>
  
    
  );
}


