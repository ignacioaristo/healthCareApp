import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import ClientsList from '../Screens/ClientsList';
import LogIn from '../Screens/LogIn';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{title: 'Log In'}} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}} />
      <Stack.Screen
        name= 'Clients'
        component= {ClientsList}
        options={{title: 'Clients List'}}
        />
      </Stack.Navigator>
  )
}

export default MainStack;